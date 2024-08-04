<?php
header('Content-Type: application/json');
include 'db.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    $name = $input['name'];
    $severity = $input['severity'];
    $time_in_queue = time();

    $stmt = $pdo->prepare('INSERT INTO patients (name, severity, time_in_queue) VALUES (?, ?, ?)');
    $stmt->execute([$name, $severity, $time_in_queue]);

    echo json_encode(['status' => 'success']);
} else if ($method === 'GET') {
    $stmt = $pdo->query('SELECT * FROM patients ORDER BY severity DESC, time_in_queue ASC');
    $patients = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($patients);
}
?>
