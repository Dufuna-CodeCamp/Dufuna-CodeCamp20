<?php

namespace App\Controller;

use DB\DB;
use PDO;
use PDOException;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class ArticleController
{
    private $db;

    public function __construct()
    {
        $this->db = (new DB())->connect();
    }

    public function getArticle(Request $request, Response $response, $args)
    {
        $id = $args['id'];
        try {
            $query = $this->db->prepare("select *
            from articles
            inner join admin
            on articles.id = admin.id
            where articles.id = :id;");
            $query->bindParam(":id", $id);
            $query->execute();
            $article = $query->fetch();

            if (!$article) {
                $response->getBody()->write(json_encode(["error" => "Article not found"]));
                return $response->withHeader('Content-Type', 'application/json')->withStatus(404);
            }

            $response->getBody()->write(json_encode($article));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(200);
        } catch (PDOException $ex) {
            $response->getBody()->write(json_encode(["error" => $ex->getMessage()]));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(500);
        }
    }

    public function create(Request $request, Response $response, $args)
    {
        $requestData = $request->getParsedBody();
        $title = $requestData['title'];
        $description = $requestData['description'];
        $created_by = $requestData['created_by'];
        $created_at = date('Y-m-d H:i:s');

        $sql = "INSERT INTO articles (title, description, created_by, created_at) VALUES (:title, :description, :created_by, :created_at)";

        try {
            $query = $this->db->prepare($sql);
            $query->bindParam(':title', $title);
            $query->bindParam(':description', $description);
            $query->bindParam(':created_by', $created_by);
            $query->bindParam(':created_at', $created_at);
            $query->execute();
            $query =$this->db->prepare("SELECT * FROM articles");
            $query->execute();
            $articles =$query->fetchAll();
            $response->getBody()->write(json_encode(['status' => 'successfully created','data' => $articles]));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(200);
        } catch (PDOException $ex) {
            $response->getBody()->write(json_encode(["error" => $ex->getMessage()]));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(500);
        }
    }

    public function update(Request $request, Response $response, $args)
    {
        $id = $args['id'];
        $title = $request->getParsedBody()['title'];
        $description = $request->getParsedBody()['description'];

        try{
            $query = $this->db->prepare("UPDATE articles SET title = :title, description = :description WHERE id = $id");
            $query->bindParam(':title', $title);
            $query->bindParam(':description', $description);
            $query->execute();

            $query =$this->db->prepare("SELECT * FROM articles WHERE id = $id ");
            $query->execute();
            $articles =$query->fetch();

            
            $response->getBody()->write(json_encode(['status' => 'successfully updated','data' => $articles]));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(200);
        } catch (PDOException $ex) {
            $response->getBody()->write(json_encode(["error" => $ex->getMessage()]));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(500);
        }
    }

    public function delete(Request $request, Response $response, $args)
    {
        $id = $args['id'];
        try {
            $query = $this->db->prepare("DELETE FROM articles
            where articles.id =  $id;");
            $query->execute();

            $response->getBody()->write(json_encode(["status" => "Success",'message' => 'This article was deleted successfully']));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(200);
        } catch (PDOException $ex) {
            $response->getBody()->write(json_encode(["error" => $ex->getMessage()]));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(500);
        }
    }

  public function publishArticle(Request $request, Response $response, $args){
        
        $id = $args['id'];
        $status = $args['published'];

        try{
            $query =$this->db->prepare("UPDATE articles SET  status = :status WHERE id =:id");
            $query->bindParam(':id', $id);
            $query->bindParam(':status', $status);
            $query->execute();

            $query = $this->db->prepare("SELECT * FROM articles  WHERE id =:id");
            $query->bindParam(':id', $id);
            $query->execute();
            $article = $query->fetch();
            if(!$article) {
            $response->getBody()->write(json_encode(['error' => 'Article not found']));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(404);
        } else if ('status' ==='published') {
            $response->getBody()->write(json_encode(['error' => 'Article already published']));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(400);
        }
             $response->getBody()->write(json_encode(['status' => 'success','data' => $article]));
            return $response ->withHeader('Content-Type', 'application/json')->withStatus(200);  
        }catch(PDOException $ex){
             $response->getBody()->write(json_encode(['error'=>$ex->getMessage()]));
             return $response ->withHeader('Content-Type', 'application/json')->withStatus(500);
        }
    }
    public function getPublishedArticles(Request $request, Response $response, $args){
        $status = $args['published'];
        
        try{
            $query =$this->db->prepare("SELECT * FROM articles WHERE status =:status");
                 $query->bindParam(':status', $status);
            $query->execute();
            $articles =$query->fetchall();
            if(!$articles){
                $response->getBody()->write(json_encode(['error'=>'Article not found']));
             return $response ->withHeader('Content-Type', 'application/json')->withStatus(404);
            }
            $response->getBody()->write(json_encode(['status' => 'success','data' => $articles]));
            return $response ->withHeader('Content-Type', 'application/json')->withStatus(200);
        }catch(PDOException $ex){
             $response->getBody()->write(json_encode(['error'=>$ex->getMessage()]));
             return $response ->withHeader('Content-Type', 'application/json')->withStatus(500);
              }
    }
}
