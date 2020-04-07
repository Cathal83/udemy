<?php
// Check if form submitted
if (isset($_POST['submit'])) {

    // assign variables
    $number = $_POST['creditCard'];
    $total = 0;
    $i = 1;
    // get last four digits
    $last4 = substr($number, -4, 4);
    // split string into array
    $number = str_split($number);
    // reverse array
    $number = array_reverse($number);
    // loop through the array and calculate
    foreach ($number as $digit) {
        // if even number
        if ($i % 2 == 0) {
            // multiply by 2 
            $digit *= 2;
            // if>9
            if ($digit > 9) {
                //subtract 9
                $digit -= 9;
            }
        }
        // total = total + digit
        $total += $digit;
        // increase incrementor by 1
        $i++;
    }
    // Check if fivisible by 10
    if ($total % 10 == 0) {
        echo "your credit card number ending in " . $last4 . " is valid.";
    } else {
        echo "your credit card number ending in " . $last4 . " is invalid.";
    }
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
        <input type="number" name="creditCard" id="">
        <input type="submit" value="Submit" name="submit">
    </form>
</body>

</html>