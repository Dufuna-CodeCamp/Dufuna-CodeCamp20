<?php
    function setData($name, $value, $expire){
        setcookie($name, serialize($value), $expire);
    }
?>