<?php
/**
 * API para enviar emails con PDF adjunto desde SERSALUD
 * Configurado para Hostinger SMTP
 */

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Manejar preflight OPTIONS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Validar método POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Método no permitido']);
    exit();
}

// Cargar PHPMailer (debe estar instalado en el servidor)
require_once __DIR__ . '/PHPMailer/PHPMailer.php';
require_once __DIR__ . '/PHPMailer/SMTP.php';
require_once __DIR__ . '/PHPMailer/Exception.php';
require_once __DIR__ . '/db-config.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Configuración SMTP de Hostinger
$SMTP_HOST = 'smtp.hostinger.com';
$SMTP_PORT = 465;
$SMTP_USER = 'registros@sersalud.hospital';
$SMTP_PASS = 'Primero1.1';
$FROM_EMAIL = 'registros@sersalud.hospital';
$FROM_NAME = 'SERSALUD - Sistema de Admisiones';

try {
    // Obtener datos del POST
    $toEmail = $_POST['to'] ?? '';
    $subject = $_POST['subject'] ?? 'Formulario de Admisión';
    $body = $_POST['body'] ?? '';
    $patientName = $_POST['patientName'] ?? 'Paciente';

    // Validar email destino
    if (empty($toEmail) || !filter_var($toEmail, FILTER_VALIDATE_EMAIL)) {
        throw new \Exception('Email de destino inválido');
    }

    // Validar que venga el PDF
    if (!isset($_FILES['pdf']) || $_FILES['pdf']['error'] !== UPLOAD_ERR_OK) {
        throw new \Exception('No se recibió el archivo PDF');
    }

    // Crear instancia de PHPMailer
    $mail = new PHPMailer(true);

    // Configuración del servidor SMTP
    $mail->isSMTP();
    $mail->Host = $SMTP_HOST;
    $mail->SMTPAuth = true;
    $mail->Username = $SMTP_USER;
    $mail->Password = $SMTP_PASS;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = $SMTP_PORT;
    $mail->CharSet = 'UTF-8';

    // Remitente
    $mail->setFrom($FROM_EMAIL, $FROM_NAME);

    // Destinatario
    $mail->addAddress($toEmail);

    // Copia a registros (opcional)
    $mail->addBCC($FROM_EMAIL);

    // Asunto y cuerpo
    $mail->Subject = $subject;
    $mail->isHTML(true);

    $htmlBody = "
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #0f172a; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; background: #f8fafc; }
            .footer { text-align: center; padding: 20px; font-size: 12px; color: #64748b; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h1>SERSALUD</h1>
                <p>Sistema de Admisiones Digitales</p>
            </div>
            <div class='content'>
                <h2>Formulario de Admisión</h2>
                <p><strong>Paciente:</strong> {$patientName}</p>
                <p>{$body}</p>
                <p>Adjunto encontrará el formulario de admisión completo en formato PDF.</p>
            </div>
            <div class='footer'>
                <p>Este es un mensaje automático del sistema SERSALUD</p>
                <p>Por favor no responda a este email</p>
            </div>
        </div>
    </body>
    </html>
    ";

    $mail->Body = $htmlBody;
    $mail->AltBody = strip_tags($body);

    // Adjuntar PDF
    $pdfFile = $_FILES['pdf']['tmp_name'];
    $pdfName = $_FILES['pdf']['name'];
    $mail->addAttachment($pdfFile, $pdfName);

    // Enviar email
    $mail->send();

    // --- Guardar en Base de Datos (Opcional si falla la DB aún funciona el email) ---
    $pdo = getDBConnection();
    $db_saved = false;

    if ($pdo) {
        try {
            // 1. Obtener o crear paciente por correo
            $stmt = $pdo->prepare("SELECT id FROM pacientes WHERE correo = ?");
            $stmt->execute([$toEmail]);
            $paciente = $stmt->fetch();

            $paciente_id = null;
            if ($paciente) {
                $paciente_id = $paciente['id'];
            }
            else {
                // Crear paciente básico si no existe
                $stmt = $pdo->prepare("INSERT INTO pacientes (nombre, correo, password, verificado) VALUES (?, ?, ?, 1)");
                $stmt->execute([$patientName, $toEmail, password_hash('sersalud2024', PASSWORD_DEFAULT)]);
                $paciente_id = $pdo->lastInsertId();
            }

            // 2. Guardar el formulario
            // Extraer datos básicos si vienen en el POST (el frontend debería enviarlos)
            $registro_medico = $_POST['registro_medico'] ?? null;
            $dpi = $_POST['dpi'] ?? null;
            $edad = $_POST['edad'] ?? null;
            $sexo = $_POST['sexo'] ?? null;
            $procedimiento = $_POST['procedimiento_nombre'] ?? null;

            $stmt = $pdo->prepare("INSERT INTO formularios (paciente_id, nombre_completo, registro_medico, dpi, edad, sexo, procedimiento_nombre, fecha_guardado) VALUES (?, ?, ?, ?, ?, ?, ?, NOW())");
            $stmt->execute([$paciente_id, $patientName, $registro_medico, $dpi, $edad, $sexo, $procedimiento]);

            $db_saved = true;
        }
        catch (\Exception $e) {
            error_log("Error guardando en DB: " . $e->getMessage());
        // No bloqueamos la respuesta exitosa si el email se envió
        }
    }

    // Respuesta exitosa
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Email enviado correctamente' . ($db_saved ? ' y datos guardados' : ''),
        'to' => $toEmail,
        'db_status' => $db_saved ? 'saved' : 'failed'
    ]);

}
catch (\Exception $e) {
    // Error
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => $e->getMessage(),
        'details' => isset($mail) ? $mail->ErrorInfo : ''
    ]);
}