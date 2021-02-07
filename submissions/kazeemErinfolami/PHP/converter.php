<?php
function Converter($converter, $value)
{
    $pounds = 2.20462;
    $yard = 1.09361;
    $fahrenheit =  32;

    if (getType($value) === "integer") {

        switch ($converter) {
            case "kilo";
                $result = $value * $pounds . " pounds";
                break;
            case "meter";
                $result = $value * $yard  . " yard";
                break;
            case "celsius";
                $result = ($value * 1.8) + $fahrenheit . " fahrenheit";
                break;
            default:
                $result = "unit undefine for value:" . $value;
        }
    } else {
        $result = "<h3> invalid input </h3>";;
    }
    return $result;
}

echo Converter("kilo", 10);
echo Converter("meter", 7);
echo Converter("celsius", 0);
