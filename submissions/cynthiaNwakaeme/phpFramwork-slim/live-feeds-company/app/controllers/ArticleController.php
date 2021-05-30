<?php

namespace App\Controller;

use App\Model\Article;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class ArticleController
{
    // A FUNCTION TO CREATE A NEW ARTICLE.
    public function create(Request $request, Response $response)
    {
        $data = $request->getParsedBody();

        $status = 'unpublished';
        $createdAt = date('Y-m-d H:i:s');

        $article = Article::create([
            'title' => $data['title'],
            'description' => $data['description'],
            'status' => $status,
            'created_by' => $data['created_by'],
            "created_at" => $createdAt
        ]);

        $article->save();
        
        $response->getBody()->write(json_encode(
            [
            "status" => "success",
            "data" => $article
            ])
        );

        return $response->withHeader('Content-Type', 'application/json')->withStatus(200);
    }

    // A FUNCTION TO UPDATE AN EXISTING ARTICLE.
    public function update(Request $request, Response $response, $args)
    {
        $data = $request->getParsedBody();
        $id = $args['id'];

        $article = Article::find($id);
        if (!$article) {
            $response->getBody()->write(json_encode([ 
                "status" => "failed",
                'error' => 'Article with id '. $id .' not found' 
                ])
            );
            return $response->withHeader('Content-Type', 'application/json')->withStatus(404);
        }

        $article->title = $data['title'];
        $article->description = $data['description'];

        $article->save();
        
        $response->getBody()->write(json_encode(
            [
            "status" => "success",
            "data" => $article
            ])
        );
        return $response->withHeader('Content-Type', 'application/json')->withStatus(200);
    }

    // A FUNCTION TO DELETE AN EXISTING ARTICLE.
    public function delete(Request $request, Response $response, $args)
    {
        $id = $args['id'];
        $article = Article::find($id);
        if (!$article) {
            $response->getBody()->write(json_encode([ 
                "status" => "failed",
                'error' => 'Article with id '. $id .' not found'
                 ])
                );
            return $response->withHeader('Content-Type', 'application/json')->withStatus(404);
        }

        $article->delete();

        $response->getBody()->write(json_encode(
            [
            "status" => "success",
            "message" => "The article was succesfully deleted"
            ])
        );
        return $response->withHeader('Content-Type', 'application/json')->withStatus(200);
    }

    // A FUNCTION TO PUBLISH AN UNPUBLISHED ARTICLE.
    public function publishArticle(Request $request, Response $response, $args)
    {
        $data = $request->getParsedBody();
        $id = $args['id'];
        $article = Article::find($id);

        if (!$article) {
            $response->getBody()->write(json_encode([
                "status" => "failed",
                 'error' => 'Article with id '. $id .' not found'
                ])
            );
            return $response->withHeader('Content-Type', 'application/json')->withStatus(404);
        }
        
        $article->status = $data['status'];
        $article->save();

        $response->getBody()->write(json_encode(
            [
            "status" => "success",
            "data" => $article 
            ])
        );
        return $response->withHeader('Content-Type', 'application/json')->withStatus(200);
    }

    // A FUNCTION TO SHOW ALL PUBLISHED ARTICLE.
    public function getAllActicles(Request $request, Response $response)
    {
        $article = Article::where('status', 'published')->get();

        $response->getBody()->write(json_encode(
            [
            "status" => "success",
            "data" => $article 
            ])
        );
        return $response->withHeader('Content-Type', 'application/json');
    }

    // A FUNCTION TO RETRIEVE JUST A SINGLE ARTICLE.
    public function getAnArticle(Request $request, Response $response, $args)
    {
        $id = $args['id'];

        $article = Article::find($id);
        if (!$article) {
            $response->getBody()->write(json_encode([ 
                "status" => "failed",
                'error' => 'Article with id '. $id .' not found' 
                ])
            );
            return $response->withHeader('Content-Type', 'application/json')->withStatus(404);
        }

        $response->getBody()->write(json_encode(
            [
            "status" => "success",
            "data" => $article 
            ])
        );
        return $response->withHeader('Content-Type', 'application/json')->withStatus(200);
    }
}