<?php

namespace DB;

use PDO;

class DB {
    private $db_hostname;
    private $db_username;
    private $db_password;
    private $db_name;

    public function __construct()
    {
        $this->db_hostname = $_ENV['DB_HOSTNAME'];
        $this->db_username = $_ENV['DB_USERNAME'];
        $this->db_password = $_ENV['DB_PASSWORD'];
        $this->db_name = $_ENV['DB_NAME'];
    }

    public function connect()
    {
        $connectionString = "mysql:host={$this->db_hostname};dbname={$this->db_name}";
        $pdo = new PDO($connectionString, $this->db_username, $this->db_password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
        return $pdo;
    }
}
