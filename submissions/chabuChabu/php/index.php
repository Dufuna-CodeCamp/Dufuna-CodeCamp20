<!doctype html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Document</title>
</head>
<body>
  <h1>Please choose the prefeared conversion!!</h1>
  <form action="convert.php" method="post">
    <label for="value">Initial value</label><br/>
    <input type="text" name="value"><br/><br/>
    <label for="kilogram">Kilogram to Pounds</label>
    <input type="radio" name="unit" value="kilogram"><br/>
    <label for="meters">Meters to Yards</label>
    <input type="radio" name="unit" value="meters"><br/>
    <label for="celsius">Celsius to Fahrenheit </label>
    <input type="radio" name="unit" value="celsius"><br/><br>
    <input type="submit">
  </form>
</body>
</html>