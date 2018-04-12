<?php
$db = [
    'host' => '127.0.0.1',
    'dbname' => 'SI3D',
    'user' => 'root',
    'password' => 'motdepasse',
    'charset' => 'utf8'
];

$dsn = "mysql:host=".$db['host'].";dbname=".$db['dbname'].';charset=utf8;';
$options = array(
    PDO::ATTR_PERSISTENT    => true,
    PDO::ATTR_ERRMODE       => PDO::ERRMODE_EXCEPTION
);

try {
    $bdd = new PDO($dsn, $db['user'], $db['password'], $options);
} catch (PDOException $e) {
    $error = $e->getMessage();
}
