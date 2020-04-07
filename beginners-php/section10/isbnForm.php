<?php
// Check if form submitted
if (isset($_POST['submit'])) {

    // Assign variables
    $isbn = $_POST['isbn'];
    // total, incrementor
    $total = 0;
    $i = 1;
    // split the string
    $digits = str_split($isbn);
    // loop through array
    foreach ($digits as $digit) {
        // update total 
        $total += $digit * $i;
        $i++;
    }
    // check if divisible by 11
    if ($total % 11 == 0) {
        // echo message 
        echo 'Valid ISBN';
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
        <input type="number" name="isbn" id="">
        <input type="submit" value="Submit" name="submit">
    </form>
</body>

</html>