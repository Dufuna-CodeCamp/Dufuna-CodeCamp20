<?php

use App\Controller\ArticleController;
use App\Middleware\JsonBodyParserMiddleware;
use Slim\Routing\RouteCollectorProxy;

$app->group('/api', function (RouteCollectorProxy $group) {
   
    // Get article by id
    $group->get('/articles/{id}', ArticleController::class.':getArticle');
    
    // Create an article
    $group->post('/articles',  ArticleController::class.':create');
    
    // Update an article
    $group->put('/articles/{id}', ArticleController::class.':update')
        ->add(new JsonBodyParserMiddleware());
    
    // Delete an article 
    $group->delete('/articles/{id}', ArticleController::class .':delete');

    //Publish an article
    $group->put('/publish-articles/{published}/{id}', ArticleController::class.':publishArticle');

    //Get all published articles
    $group->get('/publish-articles/{published}', ArticleController::class . ':getPublishedArticles');

});