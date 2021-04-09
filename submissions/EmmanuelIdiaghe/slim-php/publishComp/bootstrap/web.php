<?php

use Illuminate\Container\Container;

$container = new Container();

$container['settings'] = [
    'determineRouteBeforeAppMiddleware' => false,
    'displayErrorDetails' => true,
    'db' => [
        'driver' => 'mysql',
        'host' => $_ENV['DBHostName'],
        'database' => $_ENV['DBName'],
        'username' => $_ENV['DBUserName'],
        'password' => $_ENV['DBPassword'],
        'charset' => 'utf8',
        'collation' => 'utf8_unicode_ci',
        'prefix' => ''
    ]
];