<?php
    function weatherCheck($input) {
      if ($input <= 20) {
        echo "It is freezing today";
      }
      elseif ($input > 20 and $input < 30) {
        echo "The weather is just perfect";
      }
      elseif ($input >= 30 and $input < 40) {
        echo "It's so hot today";
      }
      else {
        echo "Am I in the Sahara Desert?";
      }
    }
    weatherCheck(42);
?>
