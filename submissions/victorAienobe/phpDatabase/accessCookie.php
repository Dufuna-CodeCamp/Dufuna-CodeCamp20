<?php

    if(isset($_COOKIE["customer"])) {
        echo 'the customer details have been saved in a cookie successfully' . "<br>";
    } else {
        echo 'the customer details was not saved in a cookie' . "<br>";
    }

?>