<?php

use App\Controller\ArticleController;
use Slim\Routing\RouteCollectorProxy;
use App\Middleware\JsonParserMiddleware;

$app->group('/api', function(RouteCollectorProxy $group) {
    $group->post('/articles', ArticleController::class . ':create')
    ->add(new JsonParserMiddleware());

    $group->put('/articles/{id}', ArticleController::class . ':update')
    ->add(new JsonParserMiddleware());

    $group->delete('/articles/{id}', ArticleController::class . ':delete');

    $group->put('/articles/{id}', ArticleController::class . ':publish')->add(new JsonParserMiddleware());

    $group->get('/articles/published', ArticleController::class . ':getPublishedArticles');
    
    $group->get('/articles/{id}', ArticleController::class . ':getArticle');
});