<?php

    function unit_converter()
    {
        $units = $_POST['units'];
        $given_value = $_POST['given_value'];
        
        switch ($units) {
            case 'kilograms':
                $pounds = $given_value * 2.20462262185;
                echo round($pounds, 5).' lbs <br>';
            break;
            case 'meters':
                $yards = $given_value * 1.09361;
                echo "$yards yards <br>";
            break;
            case 'celsius':
                $farenheit = 32 + ($given_value * 9 / 5);
                echo "$farenheit  &deg F <br>";
            break;
            default:
                echo 'The unit provided is undefined';
        }
    };

    unit_converter();

?>