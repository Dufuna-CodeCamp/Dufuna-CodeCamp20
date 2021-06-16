<?php

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

require __DIR__ . "/../bootstrap/app.php";

$app->get('/', function(Request $request, Response $response) {
    $response->getBody()->write('Dufuna Publishers');
    return $response->withHeader(Constants::CONTENT_TYPE_HEADER, Constants::APPLICATION_JSON)->withStatus(200);
});

$app->run();