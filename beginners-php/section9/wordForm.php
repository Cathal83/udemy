<?php
if (isset($_POST['submit'])) {
    $sentence = strlen($_POST['words']);

    echo "The string is " . $sentence . " characters long";
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
        <input type="text" name="words" id="">
        <input type="submit" value="Submit" name="submit">
    </form>
</body>

</html>