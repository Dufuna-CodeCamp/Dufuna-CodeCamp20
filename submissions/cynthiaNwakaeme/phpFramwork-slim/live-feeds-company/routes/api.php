<?php

use App\Controller\ArticleController;
use Slim\Routing\RouteCollectorProxy;

$app->group('/api', function (RouteCollectorProxy $group) {

    // Post a new article.
    $group->post('/articles', ArticleController::class.':create');

    // Update an existing article
    $group->put('/articles/{id}', ArticleController::class.':update');

    // delete an existing article.
    $group->delete('/articles/{id}', ArticleController::class .':delete');

    // publish an unpublished article.
    $group->put('/published-articles/{id}', ArticleController::class.':publishArticle');

    //get all published articles
    $group->get('/published-articles', ArticleController::class.':getAllActicles');
 
    //get a single article
    $group->get('/articles/{id}', ArticleController::class.':getAnArticle');
});

$app->addBodyParsingMiddleware();

?>
