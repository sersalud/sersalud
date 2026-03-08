<?php
/**
 * API para obtener los perfiles/formularios desde la Base de Datos
 */

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

require_once __DIR__ . '/db-config.php';

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$pdo = getDBConnection();

if (!$pdo) {
    http_response_code(500);
    echo json_encode(['error' => 'No se pudo conectar a la base de datos']);
    exit();
}

try {
    // Obtener los formularios con información del paciente
    $query = "
        SELECT 
            f.id,
            f.nombre_completo as name,
            f.registro_medico as recordNumber,
            f.dpi,
            f.edad as age,
            f.sexo as gender,
            f.procedimiento_nombre as procedure_name,
            f.fecha_guardado as date,
            p.correo as email
        FROM formularios f
        JOIN pacientes p ON f.paciente_id = p.id
        ORDER BY f.fecha_guardado DESC
    ";

    $stmt = $pdo->query($query);
    $profiles = $stmt->fetchAll();

    echo json_encode([
        'success' => true,
        'data' => $profiles
    ]);

}
catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => $e->getMessage()
    ]);
}
?>