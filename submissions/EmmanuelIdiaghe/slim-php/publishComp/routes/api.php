<?php

use psr\Http\Message\ResponseInterface as Response;
use psr\Http\Message\ServerRequestInterface as Request;
use Slim\Routing\RouteCollectorProxy;
use App\Controller\ArticleController;

$app->group('/api', function (RouteCollectorProxy $group) {
    //ORM
    //1. Create new
    $group->post('/article', ArticleController::class . ':addArticle');
    
    //2. Update existing
    $group->put('/article/{id}', ArticleController::class . ':updateArticle');
    
    //3. Delete existing
    $group->delete('/article/{id}', ArticleController::class . ':deleteArticle');
    
    //4. Publish existing
    $group->put('/article/pub/{id}', ArticleController::class . ':publishArticle');
    
    //5. Show all published
    $group->get('/articles', ArticleController::class . ':allArticles');
    
    //6. Retrieve single
    $group->get('/article/{id}', ArticleController::class . ':getArticle');
});

$app->addBodyParsingMiddleware();
$app->run();