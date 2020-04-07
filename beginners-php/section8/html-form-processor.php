<?php

if (isset($_POST['submit'])) {
    echo "<pre>";
    print_r($_POST);

    $surname = $_POST['surname'];
    $gender = $_POST['gender'];

    echo "Your name is " . $surname . " and your gender is " . $gender;
}
