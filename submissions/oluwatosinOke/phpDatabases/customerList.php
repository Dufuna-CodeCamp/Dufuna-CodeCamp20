<?php
$servername = "localhost";
$username = "root";
$password = "tocyn";
$dbname = "my_faveorite_online_store";

try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  // set cookies
    $cookie_name = "fullname";
    $cookie_value = "email";
    setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/"); // 86400 = 1 day

  // sql to create table
  $sql = "CREATE TABLE customer (
  id INT AUTO_INCREMENT PRIMARY KEY,
  fullname VARCHAR(30) NOT NULL,
  email VARCHAR(50),
  actions VARCHAR(30) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  )";
  $conn->exec($sql);
  echo "Table customers created successfully <br>";
} catch(PDOException $e) {
  echo $sql . "<br>" . $e->getMessage();
}

//insert into table customers
try {
    $sql = "INSERT INTO customer (fullname, email, actions)
    VALUES ('Dangote', 'alikodangote@gmail.com', 'pending'),
        ('Markle', 'merganmarkle@gmail.comn', 'completed'),
        ('Kardasian', 'kimk@gmail.comn', 'pending'),
        ('Adeleke','davidomusic@gmail.com', 'pending')";
    $conn->exec($sql);
    echo "New record created successfully";
} catch(PDOException $e) {
    echo $sql . "<br>" . $e->getMessage();
}

//create customer list view
echo "<table style='border: solid 1px black;'>";
echo "<tr><th>Id</th><th>Fullname</th><th>email</th><th>actions</th><th>created_at</th></tr>";

class TableRows extends RecursiveIteratorIterator {
  function __construct($it) {
    parent::__construct($it, self::LEAVES_ONLY);
  }

  function current() {
    return "<td style='width:150px;border:1px solid black;'>" . parent::current(). "</td>";
  }

  function beginChildren() {
    echo "<tr>";
  }

  function endChildren() {
    echo "</tr>  \n";
  }
}

try {
  $stmt = $conn->prepare("SELECT id, fullname, email, actions, created_at FROM customer");
  $stmt->execute();

  // set the resulting array to associative
  $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);
  foreach(new TableRows(new RecursiveArrayIterator($stmt->fetchAll())) as $k=>$v) {
    echo $v;
  }
} catch(PDOException $e) {
  echo "Error: " . $e->getMessage();
}
$conn = null;
echo "</table>";

$conn = null;

// Close Connection
unset($pdo);
?>