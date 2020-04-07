<?php

// Declaring variables to prevent errors
$fname = "";
$lname = "";
$email = "";
$email2 = "";
$password = "";
$password2 = "";
$date = "";
$username = "";
$error_array = array();

if (isset($_POST['register_button'])) {
    // Registration form values

    // First Name
    $fname = strip_tags($_POST['reg_fname']); // Remove html tags
    $fname = str_replace(' ', '', $fname);  // Remove spaces
    $fname = ucfirst(strtolower($fname)); // Converts all to lowercase and then first one is uppercase
    $_SESSION['reg_fname'] = $fname; // Stores first name into session variable

    // Last name
    $lname = strip_tags($_POST['reg_lname']); // Remove html tags
    $lname = str_replace(' ', '', $lname);  // Remove spaces
    $lname = ucfirst(strtolower($lname)); // Converts all to lowercase and then first one is uppercase
    $_SESSION['reg_lname'] = $lname; // Stores last name into session variable

    // Email
    $email = strip_tags($_POST['reg_email']); // Remove html tags
    $email = str_replace(' ', '', $email);  // Remove spaces
    $_SESSION['reg_email'] = $email; // Stores first email into session variable

    // Email 2
    $email2 = strip_tags($_POST['reg_email2']); // Remove html tags
    $email2 = str_replace(' ', '', $email2);  // Remove spaces
    $_SESSION['reg_email2'] = $email2; // Stores second email into session variable

    // Password
    $password = strip_tags($_POST['reg_password']); // Remove html tags

    // Password 2
    $password2 = strip_tags($_POST['reg_password2']); // Remove html tags

    $date = date("Y-m-d"); // This gets current date

    // Check if emails match
    if ($email == $email2) {
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $email = filter_var($email, FILTER_VALIDATE_EMAIL);

            // Check if email alrady exists
            $em_check = mysqli_query($conn, "SELECT email FROM users WHERE email = '$email'");
            //Count the number of rows returned
            $num_rows = mysqli_num_rows($em_check);
            if ($num_rows > 0) {
                array_push($error_array, "Email already in use<br/>");
            }
        } else {
            array_push($error_array, "Invalid email format<br/>");
        }
    } else {
        array_push($error_array, "Emails do not match<br/>");
    }

    if (strlen($fname) > 25 || strlen($fname) < 2) {
        array_push($error_array, "Your first name must be between 2 and 25 characters<br/>");
    }

    if (strlen($lname) > 25 || strlen($lname) < 2) {
        array_push($error_array, "Your last name must be between 2 and 25 characters<br/>");
    }

    if ($password != $password2) {
        array_push($error_array, "Your passwords do not match<br/>");
    } else {
        if (preg_match('/[^A-Za-z0-9]/', $password)) {
            array_push($error_array, "Your password can only contain English characters or numbers<br/>");
        }
    }
    if (strlen($password) > 30 || strlen($password) < 5) {
        array_push($error_array, "Password must be between 5 and 30 characters<br/>");
    }

    if (empty($error_array)) {
        $password = md5($password); // Encrypt password before sending to database
        // Generate username by concatenating first name and last name
        $username = strtolower($fname . '_' . $lname);
        $check_username_query = mysqli_query($conn, "SELECT username FROM users WHERE username = '$username'");
        $i = 0;
        // If username exists, add number to username
        while (mysqli_num_rows($check_username_query) != 0) {
            $i++; // Add 1 to i
            $username = $username . "_" . $i;
            $check_username_query = mysqli_query($conn, "SELECT username FROM users WHERE username = '$username'");
        }

        // Profile picture assignment
        $rand = rand(1, 2);
        if ($rand == 1) {
            $profile_pic = "assets/images/profile_pics/defaults/head_deep_blue.png";
        } else {
            $profile_pic = "assets/images/profile_pics/defaults/head_emerald.png";
        }

        $query = mysqli_query($conn, "INSERT INTO users VALUES (NULL, '$fname', '$lname', '$username', '$email', '$password', '$date', '$profile_pic', '0', '0', 'no', ',')");
        array_push($error_array, "<span style='color:#14c800'>You're all set. Go ahead and log in.</span><br/>");
        // Clear Session Varaibales
        $_SESSION['reg_fname'] = "";
        $_SESSION['reg_lname'] = "";
        $_SESSION['reg_email'] = "";
        $_SESSION['reg_email2'] = "";
    }
}
