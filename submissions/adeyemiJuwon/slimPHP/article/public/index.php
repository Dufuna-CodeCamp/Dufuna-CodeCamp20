<?php

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

require __DIR__ . '/../bootstrap/app.php';




//add route callbacks
$app->get('/', function(Request $request, Response $response){
    $response->getBody()->write('slim Application');
    return $response;
});
// Run Application
$app ->run();