<?php

namespace App\Controller;


use DB\DB;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use PDO;
use PDOException;



class ArticleController{


     private $db;
    public function __construct(){
        $this->db =(new DB())->connect();
    }

    public function index(Request $request, Response $response, $args){
        try{
            $query =$this->db->prepare("SELECT * FROM articles");
            $query->execute();
            $articles =$query->fetchAll();
            $response->getBody()->write(json_encode(['status' => 'success',
'data' => $articles]));
            return $response ->withHeader('Content-Type', 'application/json')->withStatus(200);
        }catch(PDOException $ex){
             $response->getBody()->write(json_encode(['error'=>$ex->getMessage()]));
             return $response ->withHeader('Content-Type', 'application/json')->withStatus(500);
        }
    }


    public function createArticle(Request $request, Response $response, $args){
        
        $requestData = $request->getParsedBody();
        $title = $requestData['title'];
        $description= $requestData['description'];
        $status = $requestData['status'];
        $created_by = $requestData['created_by'];
        $createAt = date('y-m-d H:i:s');

        $sql =  'INSERT INTO articles (title, description, status, created_by, created_at )VALUES(:title, :description, :status,:created_by, :created_at)';
 
        try{
            $query = $this->db->prepare($sql);
            $query->bindParam(':title', $title);
            $query->bindParam(':description', $description);
            $query->bindParam(':status', $status);
            $query->bindParam(':created_by', $created_by);
            $query->bindParam(':created_at', $createAt);
            $query->execute();
             $query =$this->db->prepare("SELECT * FROM articles");
            $query->execute();
            $articles =$query->fetchAll();
            $response->getBody()->write(json_encode(['status' => 'success',
'data' => $articles]));
             return $response ->withHeader('Content-Type', 'application/json')->withStatus(200);

        }catch(PDOException $ex){
             $response->getBody()->write(json_encode(['error'=>$ex->getMessage()]));
             return $response ->withHeader('Content-Type', 'application/json')->withStatus(400);
        }
    }
    public function updateArticle(Request $request, Response $response, $args)  {
       $id = $args['id'];
        $title = $request->getParsedBody()['title'];
         $description = $request->getParsedBody()['description'];
       $status = $request->getParsedBody()['status'];
       

        try{
            $query = $this->db->prepare("UPDATE articles SET title = :title, description = :description, status = :status WHERE id =$id");
            $query->bindParam(':title', $title);
            $query->bindParam(':description', $description);
            $query->bindParam(':status', $status);
            $query->execute();
             $query =$this->db->prepare("SELECT * FROM articles");
            $query->execute();
            $articles =$query->fetchAll();
            $response->getBody()->write(json_encode(['status' => 'success',
'data' => $articles]));

             return $response ->withHeader('Content-Type', 'application/json')->withStatus(200);
        }catch(PDOException $ex){
             $response->getBody()->write(json_encode(['error'=>$ex->getMessage()]));
             return $response ->withHeader('Content-Type', 'application/json')->withStatus(400);
        }

   }
    public function deleteArticle(Request $request, Response $response, $args){
       $id = $args['id'];
        try{
            $query =$this->db->prepare("DELETE FROM articles WHERE id= $id");
            $query->execute();
            $response->getBody()->write(json_encode(['status' => 'success','message'=>'This article was successfully deleted']));
            return $response ->withHeader('Content-Type', 'application/json')->withStatus(200);
        }catch(PDOException $ex){
             $response->getBody()->write(json_encode(['error'=>$ex->getMessage()]));
             return $response ->withHeader('Content-Type', 'application/json')->withStatus(400);
        }
    }
     public function getArticlesStatus(Request $request, Response $response, $args){
        $status = $args['status'];
        try{
            
            $query =$this->db->prepare("SELECT * FROM articles WHERE status =:status");
            $query->bindParam(':status', $status);
            $query->execute();
            $article =$query->fetchall();
            if(!$article){
                $response->getBody()->write(json_encode(['error'=>'Article not found']));
             return $response ->withHeader('Content-Type', 'application/json')->withStatus(404);
            }
            $response->getBody()->write(json_encode(['status' => 'sucess',
'data' => $article]));
            return $response ->withHeader('Content-Type', 'application/json')->withStatus(200);
        }catch(PDOException $ex){
             $response->getBody()->write(json_encode(['error'=>$ex->getMessage()]));
             return $response ->withHeader('Content-Type', 'application/json')->withStatus(500);
        }
    }
    public function getArticle(Request $request, Response $response, $args){
        $id = $args['id'];
        try{
            
            $query =$this->db->prepare("SELECT * FROM articles WHERE id =:id");
            $query->bindParam(':id', $id);
            $query->execute();
            $article =$query->fetch();
            if(!$article){
                $response->getBody()->write(json_encode(['error'=>'Article not found']));
             return $response ->withHeader('Content-Type', 'application/json')->withStatus(404);
            }
            $response->getBody()->write(json_encode($article));
            return $response ->withHeader('Content-Type', 'application/json')->withStatus(200);
        }catch(PDOException $ex){
             $response->getBody()->write(json_encode(['error'=>$ex->getMessage()]));
             return $response ->withHeader('Content-Type', 'application/json')->withStatus(500);
        }
    }
}