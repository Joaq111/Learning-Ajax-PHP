<?php
//users.php
require __DIR__ . '/../../config.php';

use app\models\Users;


sleep(1);

$users = new Users;

echo json_encode($users->all());







?>