<?php

use App\Controller\AdminController;
use App\Controller\ArticleController;
use App\Middleware\JsonBodyParserMiddleware;
use Slim\Routing\RouteCollectorProxy;

$app->group('/api', function (RouteCollectorProxy $group) {
    // Get all Admin
    $group->get('/admin', AdminController::class . ':index');
    // Admin login
    $group->post('/admin/login', AdminController::class . ':login')
        ->add(new JsonBodyParserMiddleware());
    // Admin logout
    $group->get('/admin/logout', AdminController::class . ':logout');
    // Get one Admin
    $group->get('/admin/{id}', AdminController::class . ':getUser');
    // Create an Admin
    $group->post('/admin', AdminController::class . ':create')
        ->add(new JsonBodyParserMiddleware());
    // Update an Admin
    $group->put('/admin/{id}', AdminController::class . ':update')
        ->add(new JsonBodyParserMiddleware());
    // Delete an Admin
    $group->delete('/admin/{id}', AdminController::class . ':delete');

    // ARTICLE
    // create article
    $group->post('/article', ArticleController::class . ':create')
        ->add(new JsonBodyParserMiddleware());
    // update article
    $group->put('/article/{id}', ArticleController::class . ':update');
    // delete article
    $group->delete('/article/{id}', ArticleController::class . ':delete');
    // publish article
    $group->put('/article/publish/{id}', ArticleController::class . ':publish');
    // get all published articles
    $group->get('/article/published', ArticleController::class . ':getPublished');
    // get on article
    $group->get('/article/{id}', ArticleController::class . ':getById');
    // get all articles
    $group->get('/article', ArticleController::class . ':index');

});
