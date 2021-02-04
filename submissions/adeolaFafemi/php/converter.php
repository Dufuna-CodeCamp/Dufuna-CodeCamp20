 <?php

 function convert($unit,$parameter){
     // 1 pound is equal to 0.453592 kilogram approximately 0.4536
     $pound = 0.4535;
     // 1 yard is equal to 0.9144 meters
     $yard = 0.9144;

     switch($unit){
         case('kg'):
             $result = round($parameter/$pound, 2);
             return $result.'pounds';
             break;
         case('m'):
            $result = round($parameter/$yard, 2);
            return $result.'yards';
            break;
         case('C'):
            $result = round(($parameter *9/5) + 32, 2);
            return $result.'F';
            break;
        default:
            return "Cannot covert the unit given";
     }

 }

 echo convert('kg', 50) . "<br>";
 echo convert('m', 50) . "<br>";
 echo convert('C', 50) . "<br>";