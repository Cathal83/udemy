<?php
require 'config/config.php';
require 'includes/form_handlers/register_handler.php';
require 'includes/form_handlers/login_handler.php';
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="assets/css/register_style.css">
    <script src="https://code.jquery.com/jquery-2.2.4.js"></script>
    <script src="assets/js/register.js"></script>
    <title>Welcome to Swirlfeed</title>
</head>

<body>
    <?php if (isset($_POST['register_button'])) {
        echo '
        <script>
            $(document).ready(function(){
                $("#first").hide();
                $("#second").show();
            });
        </script>       
        ';
    }; ?>
    <div class="wrapper">

        <div class="login_box">
            <div class="login_header">
                <h1>Swirlfeed!</h1>
                Login or sign up below
            </div>
            <div id="first">
                <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
                    <input type="email" name="log_email" placeholder="Please enter your email" value="<?php if (isset($_SESSION['log_lname'])) {
                                                                                                            echo $_SESSION['log_lname'];
                                                                                                        } ?>" required>
                    <br />
                    <input type="password" name="log_password" placeholder="Please enter your password">
                    <br />
                    <?php if (in_array("Email or password was incorrect<br/>", $error_array))
                        echo "Email or password was incorrect<br/>";
                    ?>
                    <input type="submit" value="Log In" name="login_button">
                    <br />
                    <a href="#" id="signup" ckass="signup">Need an account? Register here!</a>
                </form>
            </div>

            <div id="second">
                <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
                    <input type="text" name="reg_fname" id="" placeholder="First Name" value="<?php if (isset($_SESSION['reg_fname'])) {
                                                                                                    echo $_SESSION['reg_fname'];
                                                                                                } ?>" required>
                    <br />
                    <?php if (in_array("Your first name must be between 2 and 25 characters<br/>", $error_array))
                        echo "Your first name must be between 2 and 25 characters<br/>";
                    ?>
                    <input type="text" name="reg_lname" id="" placeholder="Last Name" value="<?php if (isset($_SESSION['reg_lname'])) {
                                                                                                    echo $_SESSION['reg_lname'];
                                                                                                } ?>" required>
                    <br />
                    <?php if (in_array("Your last name must be between 2 and 25 characters<br/>", $error_array))
                        echo "Your last name must be between 2 and 25 characters<br/>";
                    ?>
                    <input type="email" name="reg_email" id="" placeholder="Email" value="<?php if (isset($_SESSION['reg_email'])) {
                                                                                                echo $_SESSION['reg_email'];
                                                                                            } ?>" required>
                    <br />
                    <input type="email" name="reg_email2" id="" placeholder="Confirm Email" value="<?php if (isset($_SESSION['reg_email2'])) {
                                                                                                        echo $_SESSION['reg_email2'];
                                                                                                    } ?>" required>
                    <br />
                    <?php if (in_array("Email already in use<br/>", $error_array))
                        echo "Email already in use<br/>";
                    else if (in_array("Invalid email format<br/>", $error_array))
                        echo "Invalid email format<br/>";
                    else if (in_array("Emails do not match<br/>", $error_array))
                        echo "Emails do not match<br/>";
                    ?>
                    <input type="password" name="reg_password" id="" placeholder="Password" required>
                    <br />
                    <input type="password" name="reg_password2" id="" placeholder="Confirm Password" required>
                    <br />
                    <?php if (in_array("Your passwords do not match<br/>", $error_array))
                        echo "Your passwords do not match<br/>";
                    else if (in_array("Your password can only contain English characters or numbers<br/>", $error_array))
                        echo "Invalid email format<br/>";
                    else if (in_array("Password must be between 5 and 30 characters<br/>", $error_array))
                        echo "Password must be between 5 and 30 characters<br/>";
                    ?>
                    <input type="submit" value="Register" name="register_button">
                    <br />
                    <?php if (in_array("<span style='color:#14c800'>You're all set. Go ahead and log in.</span><br/>", $error_array)) echo "<span style='color:#14c800'>You're all set. Go ahead and log in.</span><br/>"; ?>
                    <a href="#" id="signin" ckass="signin">Already have an account? Sign in here!</a>
                </form>
            </div>
        </div>
    </div>
</body>

</html>