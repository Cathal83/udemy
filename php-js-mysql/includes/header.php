<?php
require 'config/config.php';

if (isset($_SESSION['username'])) {
    $userLoggedIn = $_SESSION['username'];
    $user_details_query = mysqli_query($conn, "SELECT * FROM users WHERE username = '$userLoggedIn'");
    $user = mysqli_fetch_array($user_details_query);
} else {
    header("Location: register.php");
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://kit.fontawesome.com/72ae78b5cf.js" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src=" https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

    <link rel="stylesheet" href="assets/css/bootstrap.css">
    <link rel="stylesheet" href="assets/css/style.css">
    <title>Welcome to Swirlfeed!</title>
</head>

<body>

    <div class="top_bar">
        <div class="logo">
            <a href="index.php">Swirlfeed</a>
        </div>
        <nav>
            <a href=" <?php echo "$userLoggedIn"; ?>"><?php echo $user['first_name']; ?></a>
            <a href="index.php"><i class="fa fa-home fa-lg"></i></a>
            <a href="#"><i class="fa fa-envelope fa-lg"></i></a>
            <a href="#"><i class="fa fa-bell-o fa-lg"></i></a>
            <a href="#"><i class="fa fa-users fa-lg"></i></a>
            <a href="#"><i class="fa fa-cog fa-lg"></i></a>
            <a href="includes/handlers/logout.php"><i class="fa fa-sign-out fa-lg"></i></a>
        </nav>
    </div>

    <div class="wrapper">