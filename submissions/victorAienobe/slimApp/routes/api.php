<?php
use Slim\Routing\RouteCollectorProxy;
use App\Controller\UserController;


$app->group('/api', function(RouteCollectorProxy $group)
{
    // create a new article
    $group->post('/postarticle', UserController::class.':create');

    //update an article
    $group->put('/article/{id}', UserController::class.':update');

    //delete an article
    $group->delete('/article/{id}', UserController::class.':delete');

    //publish an article
    $group->put('/publisharticle/{id}', UserController::class.':publish');
    
    //get all published articles
    $group->get('/article', UserController::class.':retrieve');

    //get a single article
    $group->get('/article/{id}', UserController::class.':singleArticle');
});

$app->addBodyParsingMiddleware();

$app->run();

?>