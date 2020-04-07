<?php
if (isset($_POST['submit'])) {
    $word = $_POST['word'];
    $reverseWord = strrev($word);

    if ($word == $reverseWord) {
        echo 'This is a palindrome';
    } else {
        echo 'This is not a palindrome';
    }
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Palindrome</title>
</head>

<body>
    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
        <input type="text" name="word" id="" required placeholder="Enter a word">
        <input type="submit" name="submit" value="Submit">
    </form>

</body>

</html>