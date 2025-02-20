<?php
// getBandwidthUsageData.php
$pdo = new PDO('mysql:host=localhost;dbname=network_monitoring', 'root', '');
$stmt = $pdo->query("SELECT * FROM bandwidth_usage ORDER BY timestamp DESC LIMIT 10");
$data = $stmt->fetchAll(PDO::FETCH_ASSOC);

$response = [
    'timestamps' => array_column($data, 'timestamp'),
    'download_speed' => array_column($data, 'download_speed'),
    'upload_speed' => array_column($data, 'upload_speed')
];

echo json_encode($response);
?>
