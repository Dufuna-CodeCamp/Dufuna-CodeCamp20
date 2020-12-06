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
        $sql = "SELECT * FROM users";
        $stmt = $this->connect()->query($sql);
        $users = $stmt->fetchAll();

        $this->storeData('users', $users, time()+3600);
        return $users;
    } 

};