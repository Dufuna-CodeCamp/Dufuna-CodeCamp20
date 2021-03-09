<?php
use Slim\Factory\AppFactory;

require __DIR__ . '/../vendor/autoload.php';

$dontenv = Dotenv\Dotenv::createImmutable(__DIR__ . '../../');
$dontenv->load();


// Instantiate app
$app = AppFactory::create();

require __DIR__. '/../routes/api.php';