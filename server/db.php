<?php
$host = 'localhost';
$db = 'hospital_triage';
$user = 'yourusername';
$pass = 'yourpassword';

$dsn = "pgsql:host=$host;dbname=$db";
$pdo = new PDO($dsn, $user, $pass);
?>
