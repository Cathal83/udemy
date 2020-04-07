<?php
if (isset($_POST['submit'])) {
    $amount = $_POST['amount'];
    $scale = $_POST['temperature'];

    if ($scale == 'celsius') {
        $newTemp = ($amount * 9 / 5) + 32;
    } else {
        $newTemp = ($amount - 32) * 5 / 9;
    }
    echo $newTemp;
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
        <input type="number" name="amount" id="">
        Celsius<input type="radio" name="temperature" id="" value="celsius">
        Fahrenheit<input type="radio" name="temperature" id="" value="fahrenheit">
        <input type="submit" value="Submit" name="submit">
    </form>
</body>

</html>