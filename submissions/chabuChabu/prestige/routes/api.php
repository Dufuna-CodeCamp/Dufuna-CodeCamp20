<?php

use App\Middleware\JsonParserMiddleware;
use App\Controller\ManageArticle;
use Slim\Routing\RouteCollectorProxy;
use App\Controller\Administrators;

$app->group('/api',function(RouteCollectorProxy $group){

    $group->post('/article', ManageArticle::class .':create')
        ->add(new JsonParserMiddleware());

    $group->put('/article/{id}',ManageArticle::class .':update')
       ->add(new JsonParserMiddleware());
    
    $group->delete('/article/{id}',ManageArticle::class .':delete');

    $group->put('/publish/{id}', ManageArticle::class . ':publishArticle')
        ->add(new JsonParserMiddleware());

    $group->get('/article', ManageArticle::class .':published');

    $group->get('/article/{id}',ManageArticle::class .':getArticle');
   
});