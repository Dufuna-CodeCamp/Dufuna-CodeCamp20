<?php

use App\Controller\ArticlesController;
use App\Middlewares\JsonParserMiddleware;
use Slim\Routing\RouteCollectorProxy;

$app ->group ('/api', function(RouteCollectorProxy $group){
    $group->post('/articles', ArticlesController::class . ':createArticle' )
        -> add(new JsonParserMiddleware);
    $group->put('/articles/{id}', ArticlesController::class . ':updateArticle' )
        -> add(new JsonParserMiddleware);
    $group->delete('/articles/{id}', ArticlesController::class . ':deleteArticle' );
    $group->put('/publish-articles/{id}', ArticlesController::class . ':publishArticle' );
    $group->get('/publish-articles', ArticlesController::class . ':showPublishedArticle' );
    $group->get('/articles/{id}', ArticlesController::class . ':singleArticle' );
});