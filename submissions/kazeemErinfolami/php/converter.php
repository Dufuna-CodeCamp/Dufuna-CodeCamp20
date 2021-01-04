<?php
function Converter($converter, $value)
{
    $pounds = 2.20462;
    $yard = 1.09361;
    $fahrenheit =  32;

    if (getType($value) === "integer") {

        switch ($converter) {
            case "kilo";
                return $value * $pounds . " pounds";
                break;
            case "meter";
                return $value * $yard  . " yard";
                break;
            case "celsius";
                return ($value * 1.8) + $fahrenheit . " fahrenheit";
                break;
            default:
                return "unit undefine for value:" . $value;
        }
    } else {
        return "<h3> Invalid Input </h3>";;
    }
}

echo Converter("kilo", 10);
echo Converter("meter", 7);
echo Converter("celsius", 0);
?>