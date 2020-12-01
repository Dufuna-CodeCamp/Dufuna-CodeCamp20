<?php

namespace App\Controller;

use App\Model\User;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class TestUserController
{
    public function index(Request $request, Response $response, $args)
    {
        $users = User::all();
        $response->getBody()->write($users->toJson());
        return $response->withHeader('Content-Type', 'application/json')
            ->withStatus(200);
    }

    public function findById(Request $request, Response $response, $args)
    {
        $id = $args['id'];
        $user = User::find($id);
        $response->getBody()->write($user->toJson());
        return $response->withHeader('Content-Type', 'application/json')
            ->withStatus(200);
    }

    public function create(Request $request, Response $response, $args)
    {
        $data = $request->getParsedBody();
        $createdAt = date('Y-m-d H:i:s');
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'gender' => $data['gender'],
            "created_at" => $createdAt
        ]);
       $user->save();
       $response->getBody()->write($user->toJson());
        return $response->withHeader('Content-Type', 'application/json')
            ->withStatus(200);
    }

    public function update(Request $request, Response $response, $args)
    {
        $data = $request->getParsedBody();
        $id = $args['id'];
        $user = User::find($id);
        $user->name = $data['name'];
        $user->save();
        $response->getBody()->write($user->toJson());
        return $response->withHeader('Content-Type', 'application/json')
            ->withStatus(200);
    }

    public function delete(Request $request, Response $response, $args)
    {
        $id = $args['id'];
        $user = User::find($id);
        $user->delete();
        $response->getBody()->write('User deleted successfully');
        return $response->withHeader('Content-Type', 'application/json')
            ->withStatus(200);
    }
}