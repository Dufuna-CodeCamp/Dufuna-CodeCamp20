<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   <form action="submit.php" method="post">
 <h2>UNIT CONVERTER</h2>
   <!-- ALLOWS USER INPUT ANY VALUE -->
    <label for="units">Units: Kindly Choose Unit of conversion</label><br><br>
    <select name="units" id="units">
        <option value="kilograms">Kilograms</option>
        <option value="meters">Meters</option>
        <option value="celsius">Celsius</option>
    </select>
    <br>
    <br>
    <label for="given_value">Input your value of interest</label><br>
    <input type="number" name="given_value" id="given_value">
    <br>
    <br>

    <input type="submit" value="Submit">
   </form> 
</body>
</html>
