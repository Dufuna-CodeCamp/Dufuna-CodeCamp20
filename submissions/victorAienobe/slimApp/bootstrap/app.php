<?php

use Slim\Factory\AppFactory;

require __DIR__ . '/../vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '../../');
$dotenv->load();

require 'web.php';
require 'database.php';


//Instantiate App
$app = AppFactory::create();
require __DIR__ . '/../routes/api.php';

?>