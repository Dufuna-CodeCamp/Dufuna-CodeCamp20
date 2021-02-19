<?php
require_once("connection.php");
try {
  	$sql = "SELECT * FROM customers";
  	$result= $pdo->query($sql);
    if ($result->rowCount()>0){
        echo "<table style='border: solid 1px black'>";
        	echo "<tr>";
            	echo "<th> S/N </th>";
            	echo "<th> Full Name </th>";
            	echo "<th> Email Address </th>";
            	echo "<th> Created At</th>";
            	echo "<th> Actions </th>";
        	echo "</tr>";
        	while ($row=$result->fetch()){
            	echo "<tr>";
            		echo "<td style='border: solid 1px black'>" . $row['id'] . "</td>";
            		echo "<td style='border: solid 1px black'>" . $row['first_name'] . ' ' . $row['last_name'] . "</td>";
            		echo "<td style='border: solid 1px black'>" . $row['email_address'] . "</td>";
            		echo "<td style='border: solid 1px black'>" . $row['created_at'] . "</td>";
            		echo "<td style='border: solid 1px black'>" . '<button><a href="#">View</a></button>' . "</td>";
            	echo "</tr>";
        	}
        echo "</table>";
        //free result set
        unset($result);
    }else{
        echo "no Records matching your Query were found";
    }
}catch (PDOException $e) {
    die ('could not execute ' . $sql . $e->getMessage());
}
// close connection
unset($pdo);

/*Alternative method
function getCustomers(){
  try {
      $sql = "SELECT * FROM customers";
      $stmt  = $this->connect()->query($sql);
      $results = $stmt->fetchAll();
      $this->setData('customers', $results, time() + 3600);
      return $results;
  } catch (PDOException $e) {
      die("ERROR: Could not execute $sql. " . $e->getMessage());
  }
}

//create customer list view
echo "<table style='border: solid 1px black;'>";
echo "<tr><th>Id</th><th>Fullname</th><th>email</th><th>created_at</th></tr>";

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
    echo "</tr> . \n";
  }
}

try {
  $stmt = $conn->prepare("SELECT id, first_name, email_address, created_at FROM customers");
  $stmt->execute();

  // set the resulting array to associative
  $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);
  foreach(new TableRows(new RecursiveArrayIterator($stmt->fetchAll())) as $k=>$v) {
    echo $v;
  }
} catch(PDOException $e) {
  echo "Error: " . $e->getMessage();
}
echo "</table>";

// Close Connection
unset($pdo);*/
?>