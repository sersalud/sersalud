import Busboy from 'busboy';
import FormData from 'form-data';
import { createClient } from '@supabase/supabase-js';

// Supabase Configuration (Will use environment variables)
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = (supabaseUrl && supabaseKey) ? createClient(supabaseUrl, supabaseKey) : null;

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { url } = req;

  // Route: api-profiles.php
  if (url.includes('api-profiles.php')) {
    return res.status(200).json({
      success: true,
      data: []
    });
  }

  // Route: send-email.php
  if (url.includes('send-email.php')) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    return new Promise((resolve) => {
      const busboy = Busboy({ headers: req.headers });
      const formData = new FormData();
      
      // Inject Web3Forms Access Key
      formData.append('access_key', 'abbf25bc-ae17-4a27-95c3-7f786f64d142');
      formData.append('subject', 'Nueva Admisión Digital');
      formData.append('from_name', 'Sersalud Hospital');

      busboy.on('file', (fieldname, file, info) => {
        const { filename, encoding, mimeType } = info;
        // Form-data needs the filename to properly set the header
        formData.append(fieldname, file, { 
          filename: filename, 
          contentType: mimeType 
        });
      });

      busboy.on('field', (fieldname, val) => {
        formData.append(fieldname, val);
      });

      busboy.on('finish', async () => {
        try {
          const fields = {};
          // Extract fields for Supabase
          formData.forEach((value, key) => {
            if (typeof value === 'string') {
                fields[key] = value;
            }
          });

          // 1. Save to Supabase (Database)
          if (supabase) {
            const { error: dbError } = await supabase
              .from('pacientes')
              .insert([
                {
                  nombres: fields.nombres || fields.name,
                  apellidos: fields.apellidos,
                  email: fields.email,
                  telefono: fields.telefono,
                  cedula: fields.cedula,
                  procedimiento: fields.procedimiento,
                  evaluacion_medica: fields, // Save everything as JSON for backup
                  consentimiento_datos: true
                }
              ]);
            
            if (dbError) console.error('Supabase Error:', dbError);
            else console.log('Sersalud: Datos guardados en Supabase correctamente.');
          }

          // 2. Send Email (Backup/Notification)
          const fetchRes = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData,
            // Fetch with FormData in Node automatically sets correct multipart/form-data headers
          });
          
          const result = await fetchRes.json();
          
          if (result.success) {
            res.status(200).json({
                success: true,
                message: 'Email enviado correctamente'
            });
          } else {
            res.status(400).json({
              success: false,
              message: result.message || 'Error Web3Forms'
            });
          }
        } catch (error) {
          console.error('Fetch error:', error);
          res.status(500).json({
            success: false,
            error: error.message
          });
        }
        resolve();
      });

      req.pipe(busboy);
    });
  }

  // Fallback
  return res.status(404).json({ error: 'Endpoint not found' });
}
