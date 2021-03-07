<?php
namespace App\Controller;


use App\Constants\constants;
use App\Model\Article;
use Psr\Http\Message\ResponseInterface  as Response;
use Psr\Http\Message\ServerRequestInterface  as Request;



class ArticlesController
{
    public function createArticle (Request $request, Response $response, $args)
    {
        $Data = $request ->getParsedBody();
        $article = Article::create([
            'title'=> $Data['title'],
            'description'=> $Data['description'],
            'status'=> $Data['status'],
            'created_by'=> $Data['created_by'],
            'created_at' => date('Y-m-d H:i:s')
        ]);
        $article->save();
        $response->getBody()->write(json_encode([ 'status'=> 'success','data' => $article]));
        return $response -> withHeader(Constants::CONTENT_TYPE_HEADER, Constants::APPLICATION_JSON)->withStatus(200);
    }
    public function updateArticle (Request $request, Response $response, $args)
    {
        $data = $request ->getParsedBody();
        $id = $args['id'];
        $article = Article::find($id);
        if(!$article){
            $response->getBody()->write(json_encode(["error"=> "Article not found"]));
            return $response -> withHeader('Content-Type', 'application/json')->withStatus(404);
        }
        $article->title = $data['title'];
        $article->description = $data['description'];
        $article->save();
        $response->getBody()->write(json_encode([ 'status'=> 'success','data' => $article]));
        return $response -> withHeader(Constants::CONTENT_TYPE_HEADER, Constants::APPLICATION_JSON)->withStatus(200);
    }
    public function deleteArticle (Request $request, Response $response, $args)
    {
        $id = $args['id'];
        $article = Article::find($id);
        if(!$article){
            $response->getBody()->write(json_encode(["error"=> "Article not found"]));
            return $response -> withHeader('Content-Type', 'application/json')->withStatus(404);
        }
        $article->delete();
        $response->getBody()->write(json_encode(["status"=>"success",'message' => 'This Article was successfully deleted']));
        return $response -> withHeader(Constants::CONTENT_TYPE_HEADER, Constants::APPLICATION_JSON)->withStatus(200);
    }
    public function publishArticle (Request $request, Response $response, $args)
    {
        // $data = $request ->getParsedBody();
        $id = $args['id'];
        $article = Article::find($id);
        if(!$article){
            $response->getBody()->write(json_encode(["error"=> "Article not found"]));
            return $response -> withHeader('Content-Type', 'application/json')->withStatus(404);
        }
        $article->status = 'published';
        $article->save();
        $response->getBody()->write(json_encode([ 'status'=> 'success','data' => $article]));
        return $response -> withHeader(Constants::CONTENT_TYPE_HEADER, Constants::APPLICATION_JSON)->withStatus(200);
    }
    public function showPublishedArticle (Request $request, Response $response, $args)
    {
        $articles = Article::where('status','=', 'published')->get();
        if(!$articles){
            $response->getBody()->write(json_encode(["error"=> "No article published"]));
            return $response -> withHeader('Content-Type', 'application/json')->withStatus(404);
        }
        $response->getBody()->write(json_encode([ 'status'=> 'success','data' => $articles]));
        return $response -> withHeader(Constants::CONTENT_TYPE_HEADER, Constants::APPLICATION_JSON)->withStatus(200);
    }
    public function singleArticle (Request $request, Response $response, $args)
    {
        $id = $args['id'];
        $article = Article::find($id);
        if(!$article){
            $response->getBody()->write(json_encode(["error"=> "User not found"]));
            return $response -> withHeader('Content-Type', 'application/json')->withStatus(404);
        }
        $response->getBody()->write(json_encode([ 'status'=> 'success','data' => $article]));
        return $response -> withHeader(Constants::CONTENT_TYPE_HEADER, Constants::APPLICATION_JSON)->withStatus(200);
    }
}

