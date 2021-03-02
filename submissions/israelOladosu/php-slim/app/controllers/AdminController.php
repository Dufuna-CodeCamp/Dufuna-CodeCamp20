<?php

namespace App\Controller;

use App\Model\Admin;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

session_start();

class AdminController
{
    public function index(Request $request, Response $response, $args)
    {
        $admin = Admin::all();

        $response->getBody()->write(json_encode(["status" => "success", "data" => [$admin]]));
        return $response->withHeader('Content-Type', 'application/json')
            ->withStatus(200);
    }

    public function create(Request $request, Response $response, $args)
    {
        $data = $request->getParsedBody();
        $createdAt = date('Y-m-d H:i:s');
        $admin = Admin::create([
            'name' => $data['name'],
            'email_address' => $data['email'],
            "created_at" => $createdAt,
        ]);

        $admin->save();

        $response->getBody()->write(json_encode(["status" => "success", "data" => [$admin]]));
        return $response->withHeader('Content-Type', 'application/json')
            ->withStatus(200);
    }

    public function login(Request $request, Response $response)
    {
        $data = $request->getParsedBody();
        $email = $data['email'];

        $admin = Admin::where('email_address', $email)->first();
        if (!$admin) {
            $response->getBody()->write(json_encode(['error' => 'Admin not found']));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(404);
        }

        $_SESSION["admin"] = $admin->id;
        $response->getBody()->write(json_encode(["status" => "success", 'message' => 'Admin signed in successfully']));
        return $response->withHeader('Content-Type', 'application/json')
            ->withStatus(200);
    }

    public function logout(Request $request, Response $response)
    {
        unset($_SESSION['admin']);
        $response->getBody()->write(json_encode(["status" => "success", 'message' => 'Admin successfully signed out']));
        return $response->withHeader('Content-Type', 'application/json')
            ->withStatus(200);
    }

    public function update(Request $request, Response $response, $args)
    {
        $data = $request->getParsedBody();
        $id = $args['id'];

        $admin = Admin::find($id);
        if (!$admin) {
            $response->getBody()->write(json_encode(['error' => 'Admin not found']));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(404);
        }

        $admin->name = $data['name'];

        $admin->save();

        $response->getBody()->write(json_encode(["status" => "success", "data" => [$admin]]));

        return $response->withHeader('Content-Type', 'application/json')
            ->withStatus(200);
    }

    public function delete(Request $request, Response $response, $args)
    {
        $id = $args['id'];
        $admin = Admin::find($id);
        if (!$admin) {
            $response->getBody()->write(json_encode(['error' => 'Admin not found']));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(404);
        }

        $admin->delete();

        $response->getBody()->write(json_encode(["status" => "success", "message" => "Admin deleted successfully"]));
        return $response->withHeader('Content-Type', 'application/json')
            ->withStatus(200);
    }
}
