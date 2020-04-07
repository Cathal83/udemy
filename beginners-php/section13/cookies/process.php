<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $age = $_POST['age'];
    $color = $_POST['color'];

    echo $name;

    setcookie('name', $name, time() + 3600);
    setcookie('age', $age, time() + 3600);
    setcookie('color', $color, time() + 3600);
}

echo "Process.php";
