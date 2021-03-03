<?php

use Slim\Routing\RouteCollectorProxy;
use App\Controller\ArticleController;
use App\Middleware\JsonParserMiddleware;


$app->group('/api', function(RouteCollectorProxy $group){
$group->get('/articles', ArticleController::class.':index');
$group->post('/articles', ArticleController::class.':createArticle')
    ->add(new JsonParserMiddleware());
$group->put('/articles/{id}', ArticleController::class.':updateArticle')
->add(new JsonParserMiddleware());
$group->delete('/articles/{id}', ArticleController::class.':deleteArticle');
$group->get('/articles/{id}/', ArticleController::class.':getArticle');
$group->get('/articles/{status}/', ArticleController::class.':getArticlesStatus');

});