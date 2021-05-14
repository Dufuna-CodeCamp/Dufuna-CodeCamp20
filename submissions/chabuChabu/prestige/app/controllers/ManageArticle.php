<?php

namespace App\Controller;
use App\Constants\Constants;
use App\Model\Article;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class ManageArticle 
{

    public function create(Request $request,Response $response, $args)
    {
 
       $data = $request->getParsedBody();
       $article = Article::create([
         'title' => $data['title'],
         'description' => $data['description'],
         'status' => $data['status'],
         'created_by' => $data['created_by'],
         'created_at' => date('Y-m-d H:i:s')
       ]);
       $article->save();
       $response->getBody()->write(json_encode(array("status " => "success", "data" => $article)));
       return $response->withHeader(Constants::CONTENT_TYPE_HEADER,Constants::APPLICATION_JSON)
          ->withStatus(200);
    }

    public function update(Request $request,Response $response,$args)
    {
     
       $data = $request->getParsedBody();
       $id = $args['id'];
       $article = Article::find($id);
       $article->title = $data['title'];
       $article->description = $data['description'];
       $article->save();
       $response->getBody()->write(json_encode(array("status " => "success", "data" => $article)));
       return $response->withHeader(Constants::CONTENT_TYPE_HEADER,Constants::APPLICATION_JSON)
           ->withStatus(200);
    }

    public function delete(Request $request,Response $response, $args)
    {

      $id = $args['id'];
      $article = Article::find($id);
      if(!$article)
      {
          $response->getBody()->write(json_encode(['error'=>'Article not found']));
          return $response->withHeader(Constants::CONTENT_TYPE_HEADER,Constants::APPLICATION_JSON)
            ->withStatus(404);
      }

      $article->delete();
      $response->getBody()->write(json_encode(array("status " => "success", "message" => "This article was successfully deleted")));
      return $response->withHeader(Constants::CONTENT_TYPE_HEADER,Constants::APPLICATION_JSON)
        ->withStatus(200);
    }

    public function publishArticle(Request $request,Response $response,$args)
    {

      $data = $request->getParsedBody();
      $id = $args['id'];
      $article = Article::find($id);
      $article->status = $data['status'];
      $article->save();
      $response->getBody()->write(json_encode(array("status " => "success", "data" => $article)));
      return $response->withHeader(Constants::CONTENT_TYPE_HEADER,Constants::APPLICATION_JSON)
         ->withStatus(200);
    }

    public function published(Request $request,Response $response)
    {

       $published = Article::where('status','published')->get();
       $response->getBody()->write(json_encode(array("status " => "success", "data" => $published)));
       return $response->withHeader(Constants::CONTENT_TYPE_HEADER,Constants::APPLICATION_JSON)
          ->withStatus(200); 
    }

    public function getArticle(Request $request,Response $response, $args)
    {

      $id = $args['id'];
      $article = Article::find($id);

      if(!$article)
      {
          $response->getBody()->write(json_encode(['error'=>'Article not found']));
          return $response->withHeader(Constants::CONTENT_TYPE_HEADER,Constants::APPLICATION_JSON)
             ->withStatus(404);
      }

      $response->getBody()->write(json_encode(array("status " => "success", "data" => $article)));
      return $response->withHeader(Constants::CONTENT_TYPE_HEADER,Constants::APPLICATION_JSON)
           ->withStatus(200);
    }

}