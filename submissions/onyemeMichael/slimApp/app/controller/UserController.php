<?php

namespace App\Controller;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use App\Model\Article;

class UserController
{
    public function create(Request $request, Response $response)
    {
        $data = $request->getParsedBody();
        $article = Article::create([
            'title' => $data['title'],
            'description' => $data['description'],
            'status' => 'unpublished',
            'created_by' => $data['created_by'],
            'created_at' => date('Y:m:d H:m:s')
        ]);
        $article->save();

        $response->getBody()->write(json_encode([
            "status" => "success",
            "data" => $article ] ));
        return $response->withHeader('Content-Type', 'application/json')->withStatus(200);
    }

    public function update(Request $request, Response $response, $args)
    {
        $data = $request->getParsedBody();
        $id = $args['id'];
        $article = Article::find($id);
        $article->title = $data['title'];
        $article->description = $data['description'];
        $article->save();

        $response->getBody()->write(json_encode([
            "status" => "success",
            "data" => $article ] ));
        return $response->withHeader('Content-Type', 'application/json')->withStatus(200);
    }

    public function delete(Request $request, Response $response, $args)
    {
        $id = $args['id'];
        $article = Article::find($id);
        $article->delete();

        $response->getBody()->write(json_encode([
            "status" => "success",
            "message" => "The article was succesfully deleted"
        ]));
        return $response->withHeader('Content-Type', 'application/json')->withStatus(200);
    }

    public function publish(Request $request, Response $response, $args)
    {
        $data = $request->getParsedBody();
        $id = $args['id'];
        $article = Article::find($id);
        $article->status = $data['status'];
        $article->save();

        $response->getBody()->write(json_encode([
            "status" => "success",
            "data" => $article ] ));
        return $response->withHeader('Content-Type', 'application/json')->withStatus(200);
    }

    public function retrieve(Request $request, Response $response)
    {
        $article = Article::where('status', 'published')->get();

        $response->getBody()->write(json_encode([
            "status" => "success",
            "data" => $article ] ));
        return $response->withHeader('Content-Type', 'application/json');
    }

    public function singleArticle(Request $request, Response $response, $args)
    {
        $id = $args['id'];
        $article = Article::where('id', $id)->get();

        $response->getBody()->write(json_encode([
            "status" => "success",
            "data" => $article ] ));
        return $response->withHeader('Content-Type', 'application/json');
    }
}


?>