<?php

use Slim\Routing\RouteCollectorProxy;
use App\Controller\ArticleController;
use App\Middleware\JsonParserMiddleware;

$app->group('/api', function(RouteCollectorProxy $group){

    //GET ALL ARTICLE
$group->get('/articles', ArticleController::class.':index');

    //CREATE NEW ARTICLE
$group->post('/articles', ArticleController::class.':createArticle')
    ->add(new JsonParserMiddleware());
    //UPDATE ARTICLE

$group->put('/articles/{id}', ArticleController::class.':updateArticle')
->add(new JsonParserMiddleware());

    //DELETE ARTICLE
$group->delete('/articles/{id}', ArticleController::class.':deleteArticle');

    //PUBLISH UNPUBLISHED ARTICLE
 $group->put('/article/{published}/{id}', ArticleController::class.':publishArticle');

 //GET ALL PUBLISHED ARTICLES
 $group->get('/articles/{published}', ArticleController::class . ':getPublishedArticles');

    //GET ARTICLE BY ID
$group->get('/article/{id}', ArticleController::class.':getArticle');


});