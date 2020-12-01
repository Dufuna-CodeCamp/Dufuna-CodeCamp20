<?php

use App\Controller\TestUserController;
use App\Controller\UserController;
use App\Middleware\JsonBodyParserMiddleware;
use Slim\Routing\RouteCollectorProxy;

$app->group('/api', function (RouteCollectorProxy $group) {
    // Get all Users
    $group->get('/users', UserController::class.':index');
    // Get one user
    $group->get('/users/{id}', UserController::class.':show');
    // Create a user
    $group->post('/users',  UserController::class.':create');
    // Update a user
    $group->put('/users/{id}', UserController::class.':update')
        ->add(new JsonBodyParserMiddleware());
    // Delete a user
    $group->delete('/users/{id}', UserController::class .':delete');

    $group->get('/test-users', TestUserController::class.':index');
    $group->get('/test-users/{id}', TestUserController::class.':findById');
    $group->post('/test-users', TestUserController::class.':create');
    $group->put('/test-users/{id}', TestUserController::class.':update')
        ->add(new JsonBodyParserMiddleware());
    $group->delete('/test-users/{id}', TestUserController::class .':delete');
});