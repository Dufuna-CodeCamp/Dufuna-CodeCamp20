<?php

namespace App\Controller;

use App\Model\Article;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class ArticleController
{   
    //1. Create new article
    public function addArticle(Request $request, Response $response) {
        $data = $request->getParsedBody();

        if($data) {
            $article = Article::create([
                'title' => $data['title'],
                'description_' => $data['description_'],
                'status_' => 'unpublished',
                'created_by' => $data['created_by'],
                'created_at' => date('Y-m-d H:m:s')
            ]);
            $article->save();
            $response->getBody()->write($article->toJson());
            return $response->withHeader('Content-Type', 'application/json')->withStatus(200);
        }
        else {
            $response->getBody()->write(json_encode(['status' => 'failure', 'message' => 'Empty input fields']));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(400);
        }
    }

    //2. Update existing article
    public function updateArticle(Request $request, Response $response, $args) {
        $id = $args['id'];
        $data = $request->getParsedBody();

        $article = Article::find($id);
        if ($article) {
            $article->title = $data['title'];
            $article->save();
            $response->getBody()->write($article->toJson());
            return $response->withHeader('Content-Type', 'application/json')->withStatus(200);
        }
        else {
            $response->getBody()->write(json_encode(['status' => 'failure', 'message' => 'This article does not exist!']));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(404);
        }
    }

    //3. Delete existing article
    public function deleteArticle(Request $request, Response $response, $args) {
        $id = $args['id'];

        $article = Article::find($id);
        if ($article) {
            $article->delete();
            $response->getBody()->write(json_encode(['status' => 'success', 'message' => 'This article was successfully deleted']));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(200);
        }
        else {
            $response->getBody()->write(json_encode(['status' => 'failure', 'message' => 'This article does not exist!']));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(404);
        }
    }

    //4. Update existing article
    public function publishArticle(Request $request, Response $response, $args) {
        $id = $args['id'];
        $data = $request->getParsedBody();

        $article = Article::find($id);
        if ($article) {
            $article->status_ = 'published';
            $article->save();
            $response->getBody()->write(json_encode(['status' => 'success', 'data' => $article]));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(200);
        }
        else {
            $response->getBody()->write(json_encode(['status' => 'failure', 'message' => 'This article does not exist!']));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(404);
        }
    }

    //5. Show all published articles
    public function allArticles(Request $request, Response $response) {
        $articles = Article::all();
        if($articles) {
            $response->getBody()->write(json_encode(['status' => 'success', 'data' => $articles]));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(200);
        }
        else {
            $response->getBody()->write(json_encode(['status' => 'failure', 'data' => 'NULL']));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(404);
        }
    }

    //6. Retrieve single article
    public function getArticle(Request $request, Response $response, $args) {
        $id = $args['id'];
        $article = Article::find($id);
        if($article) {
            $response->getBody()->write(json_encode(['status' => 'success', 'data' => $article]));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(200);
        }
        else {
            $response->getBody()->write(json_encode(['status' => 'failure', 'data' => 'NULL']));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(404);
        }
    }
}