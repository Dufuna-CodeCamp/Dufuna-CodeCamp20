<?php
include('dbh.class.php');

// class responsible for querying the Db
class QueryDb extends Dbh {

     public function storeData ($name, $value, $expire) {
        setcookie($name,serialize($value),$expire);
    }

    public function removeData ($name) {
        setcookie($name, "", time()-60);
    }

    public function getAllUsers () {
       try {
        $sql = "SELECT * FROM users";
        $stmt  = $this->connect()->query($sql);
        $results = $stmt->fetchAll();

        // store in cookie
        $this->storeData('users', $results, time()+3600);
        return $results;
       } catch (PDOException $e) {
           die("ERROR: Could not execute $sql. " . $e->getMessage());
       }
    } 

};