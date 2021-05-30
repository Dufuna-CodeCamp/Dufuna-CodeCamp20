<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

require __DIR__ .'/../bootstrap/app.php';

$app->get('/', function (Request $request, Response $response) { 
    $response->getBody()->write("LIVE FEEDS COMPANY");
    return $response->withHeader('Content-Type','application/json')->withStatus(200);
});

// Run Application
 $app->run();
