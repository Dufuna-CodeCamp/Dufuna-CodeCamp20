<?php
    setcookie("name", "Indiana Jones", time()+3600, "/", "", false);
    setcookie("age", 45, time()+3600, "/", "", false);
?>

<html>
    <head>
        <title>Setting Cookies with PHP</title>
    </head>
    <body>
        <?php echo "Set Cookies"."<br/>"; ?>
        <p>My name is <?php echo $_COOKIE["name"]. "<br/>"; ?></p>
        <p>I am <?php echo $_COOKIE["age"]; ?> years old</p>
        <a href="cookies_page2.php">Move to welcome page</a>
    </body>
</html>