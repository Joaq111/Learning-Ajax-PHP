<?php
//user.php
require __DIR__ . '/../../config.php';

use app\models\User;


sleep(1);

$user = new User;

$id = $_GET['id'];

echo json_encode($user->find('id', $id));







?>