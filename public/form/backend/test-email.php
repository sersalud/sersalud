<?php
/**
 * Script de prueba para verificar configuración SMTP
 */

require_once __DIR__ . '/PHPMailer/PHPMailer.php';
require_once __DIR__ . '/PHPMailer/SMTP.php';
require_once __DIR__ . '/PHPMailer/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

echo "<h1>Prueba de Configuración SMTP - SERSALUD</h1>";

try {
    $mail = new PHPMailer(true);
    
    // Configuración
    $mail->isSMTP();
    $mail->Host = 'smtp.hostinger.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'registros@sersalud.hospital';
    $mail->Password = 'Primero1.1';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = 465;
    $mail->CharSet = 'UTF-8';
    
    // Activar debug
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = 'html';
    
    // Email de prueba
    $mail->setFrom('registros@sersalud.hospital', 'SERSALUD Test');
    $mail->addAddress('registros@sersalud.hospital');
    
    $mail->isHTML(true);
    $mail->Subject = 'Prueba de Configuración SMTP';
    $mail->Body = '<h2>✅ Configuración SMTP Correcta</h2><p>Este es un email de prueba enviado el ' . date('d/m/Y H:i:s') . '</p>';
    
    $mail->send();
    
    echo "<hr><h2 style='color: green;'>✅ EMAIL ENVIADO CORRECTAMENTE</h2>";
    echo "<p>Revisa la bandeja de registros@sersalud.hospital</p>";
    
} catch (Exception $e) {
    echo "<hr><h2 style='color: red;'>❌ ERROR AL ENVIAR EMAIL</h2>";
    echo "<p><strong>Error:</strong> {$mail->ErrorInfo}</p>";
}
?>
