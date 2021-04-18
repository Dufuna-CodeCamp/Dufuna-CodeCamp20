<?php

namespace App\Controller;

use App\Model\Article;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

session_start();

class ArticleController
{
    public function create(Request $request, Response $response)
    {
        if (!isset($_SESSION['admin'])) {
            $response->getBody()->write(json_encode(['error' => 'Only an authenticated admin can perform this action']));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(403);
        };
        $data = $request->getParsedBody();
        $createdAt = date('Y-m-d H:i:s');
        $id = $_SESSION["admin"];
        $article = Article::create([
            'title' => $data['title'],
            'description' => $data['description'],
            "status" => "unpublished",
            "created_by" => $id,
            "created_at" => $createdAt,
        ]);

        $article->save();

        $response->getBody()->write((json_encode(["status" => "success", "data" => $article])));
        return $response->withHeader('Content-Type', 'application/json')
            ->withStatus(200);
    }

    public function update(Request $request, Response $response, $args)
    {
        $data = $request->getParsedBody();
        $id = $args['id'];

        $article = Article::find($id);
        if (!$article) {
            $response->getBody()->write(json_encode(['error' => 'Article not found']));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(404);
        }

        $article->title = $data['title'];
        $article->description = $data['description'];

        $article->save();

        $response->getBody()->write(json_encode(["status" => "success", "data" => $article]));
        return $response->withHeader('Content-Type', 'application/json')
            ->withStatus(200);
    }

    public function delete(Request $request, Response $response, $args)
    {
        $data = $request->getParsedBody();
        $id = $args['id'];

        $article = Article::find($id);
        if (!$article) {
            $response->getBody()->write(json_encode(['error' => 'Article not found']));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(404);
        }

        $article->delete();

        $response->getBody()->write(json_encode(["status" => "success", "message" => "This article was succssfully deleted"]));
        return $response->withHeader('Content-Type', 'application/json')
            ->withStatus(200);
    }

    public function publish(Request $request, Response $response, $args)
    {
        $data = $request->getParsedBody();
        $id = $args['id'];

        $article = Article::find($id);
        if (!$article) {
            $response->getBody()->write(json_encode(['error' => 'Article not found']));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(404);
        } else if ($article->status === 'published') {
            $response->getBody()->write(json_encode(['error' => 'Article already published']));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(400);
        }

        $article->status = "published";

        $article->save();

        $response->getBody()->write(json_encode(["status" => "success", "data" => $article]));
        return $response->withHeader('Content-Type', 'application/json')
            ->withStatus(200);
    }

    public function getPublished(Request $request, Response $response, $args)
    {
        $articles = Article::where('status', 'published')->get();
        $response->getBody()->write(json_encode(["status" => "success", "data" => [$articles]]));
        return $response->withHeader('Content-Type', 'application/json')
            ->withStatus(200);
    }

    public function getById(Request $request, Response $response, $args)
    {
        $id = $args['id'];

        $article = Article::find($id);
        if (!$article) {
            $response->getBody()->write(json_encode(['error' => 'Article not found']));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(404);
        }

        $response->getBody()->write(json_encode(["status" => "success", "data" => $article]));
        return $response->withHeader('Content-Type', 'application/json')
            ->withStatus(200);
    }

}
