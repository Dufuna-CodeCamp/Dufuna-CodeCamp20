<?php

use Slim\Routing\RouteCollectorProxy;
use App\Controller\ArticleController;
use App\Middleware\JsonParserMiddleware;

$app->group('/api', function(RouteCollectorProxy $group){

    //Get all articles
$group->get('/articles', ArticleController::class.':index');

    //Create new article
$group->post('/articles', ArticleController::class.':createArticle')
    ->add(new JsonParserMiddleware());

    //Update article
$group->put('/articles/{id}', ArticleController::class.':updateArticle')
    ->add(new JsonParserMiddleware());

    //Delete article
$group->delete('/articles/{id}', ArticleController::class.':deleteArticle');

    //Publish all unpublished article
$group->put('/article/{published}/{id}', ArticleController::class.':publishArticle');

 //Get all published article
$group->get('/articles/{published}', ArticleController::class . ':getPublishedArticles');

    //Get article by ID     
$group->get('/article/{id}', ArticleController::class.':getArticle');

});