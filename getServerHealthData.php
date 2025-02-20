<?php
// getServerHealthData.php
$pdo = new PDO('mysql:host=localhost;dbname=network_monitoring', 'root', '');
$stmt = $pdo->query("SELECT * FROM server_status ORDER BY timestamp DESC LIMIT 10");
$data = $stmt->fetchAll(PDO::FETCH_ASSOC);

$response = [
    'timestamps' => array_column($data, 'timestamp'),
    'cpu_usage' => array_column($data, 'cpu_usage'),
    'memory_usage' => array_column($data, 'memory_usage')
];

echo json_encode($response);
?>