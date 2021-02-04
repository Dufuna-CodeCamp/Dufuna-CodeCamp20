<?php

use Slim\Factory\AppFactory;

require __DIR__ . '/../vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '../../');
$dotenv->load();

require 'web.php';
require 'database.php';

// Instantiate app
$app = AppFactory::create();

require __DIR__ . '/../routes/api.php';