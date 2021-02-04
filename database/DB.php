<?php

namespace DB;

use PDO;

class DB
{
    protected $db_hostname;
    protected $db_username;
    protected $db_password;
    protected $db_name;

    public function __construct()
    {
        $this->db_hostname = $_ENV['DB_HOSTNAME'];
        $this->db_username = $_ENV['DB_USERNAME'];
        $this->db_password = $_ENV['DB_PASSWORD'];
        $this->db_name = $_ENV['DB_NAME'];
    }

    public function DBConnect()
    {
        $mysql_connect_str = "mysql:host={$this->db_hostname};dbname={$this->db_name}";
        $pdo = new PDO($mysql_connect_str, $this->db_username, $this->db_password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
        return $pdo;
    }
}