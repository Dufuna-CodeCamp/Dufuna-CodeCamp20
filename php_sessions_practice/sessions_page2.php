<?php
    session_start();
    if (isset($_SESSION['counter'])) {
        $_SESSION['counter'] += 1;
    } else {
        $_SESSION['counter'] = 1;
    }

    $msg = "You have visited this site (". $_SESSION['counter'];
    $msg .= ") in this session";
?>

<html>
    <head>
        <title>Setting up a PHP session</title>
    </head>
    <body>
        <?php echo ($msg) ?>
        <p>
            To continue click the following link <br />
            <a href="session_page1.php">Move to the previous page on the site</a>
            <a href="logout.php">Log out</a>
        </p>
    </body>
</html>