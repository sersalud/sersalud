import FormData from 'form-data';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const boundary = req.headers['content-type'].split('boundary=')[1];
    
    // We proxy the whole form directly to web3forms, intercepting the PDF and sending it over
    const fetchRes = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': `multipart/form-data; boundary=${boundary}`,
        },
        body: req,
        // Using "req" directly as the body acts as a stream passthrough
    });
    
    const result = await fetchRes.json();
    
    if (result.success) {
      return res.status(200).json({
          success: true,
          message: 'Email enviado correctamente'
      });
    } else {
        throw new Error(result.message || 'Error Web3Forms');
    }
    
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      error: error.message
    });
  }
}
