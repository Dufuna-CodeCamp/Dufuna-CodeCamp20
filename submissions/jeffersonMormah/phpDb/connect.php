<?php 
class Connected {

    private $host = "localhost";
    private $user = "root";
    private $pwd = "mysql";
    private $dbName = "ebekelchemicalz";

    protected function connect ()  {

       try {
            $dsn = 'mysql:host=' . $this->host . ';dbname=' .  $this->dbName;
        $pdo = new PDO($dsn, $this->user, $this->pwd);
        $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        return $pdo;
       } catch (PDOException $e) {
           die("ERROR: Could not connect. " . $e->getMessage());
       }

       unset($pdo);
    }

}
?>