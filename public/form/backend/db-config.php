<?php
/**
 * Configuración de la Base de Datos para SERSALUD
 */

// NOTA: Reemplazar con las credenciales reales de Hostinger
$DB_HOST = 'localhost';
$DB_NAME = 'u775151803_sersalud_pac';
$DB_USER = 'root';
$DB_PASS = '';

function getDBConnection()
{
    global $DB_HOST, $DB_NAME, $DB_USER, $DB_PASS;

    try {
        $pdo = new PDO("mysql:host=$DB_HOST;dbname=$DB_NAME;charset=utf8mb4", $DB_USER, $DB_PASS);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
        return $pdo;
    }
    catch (PDOException $e) {
        // En producción, no mostrar el error detallado al usuario
        error_log("Error de conexión DB: " . $e->getMessage());
        return null;
    }
}
?>