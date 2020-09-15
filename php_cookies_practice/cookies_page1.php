<?php
    setcookie("name", "Indiana Jones", time()+3600, "/", "", false);
    setcookie("age", 45, time()+3600, "/", "", false);
?>

<html>
    <head>
        <title>Setting Cookies with PHP</title>
    </head>
    <body>
        <?php echo "<h1>Set Cookies"."</h1><br/>"; ?>
        <h2>My name is <?php echo $_COOKIE["name"]. "<br/>"; ?></p>
        <h2>I am <?php echo $_COOKIE["age"]; ?> years old</p>
        <a href="cookies_page2.php"><h5>Move to welcome page</h5></a>
    </body>
</html>