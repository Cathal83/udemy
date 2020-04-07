<?php

/**
 * FORMS
 */
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
    <form action="html-form-processor.php" method="post">
        <input type="text" name="surname">
        Male<input type="radio" name="gender" id="Male" value="Male">
        Female<input type="radio" name="gender" id="Female" value="Female">
        <input type="submit" name="submit" value="Submit">
    </form>
</body>

</html>