<?php
    session_start();
    unset($_SESSION['counter']);
    session_destroy();
    header('Location:sessions_page1.php');
?>