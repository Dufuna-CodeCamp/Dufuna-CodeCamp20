<?php

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

require __DIR__ .'/../bootstrap/app.php';

//add route callbacks
$app->get('/',function(Request $request,Response $response){
$response->getBody()->write('Slim Appliction');
return $response;
});

//run application
$app->run();