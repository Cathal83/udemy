<?php

session_start();

// if session is set
if (isset($_SESSION['hits'])) {
    // increase by 1
    $_SESSION['hits']++;
    // echo message
    echo "You have visited this page " . $_SESSION['hits'] . " times.";
} else {
    // if not set then set session
    $_SESSION['hits'] = 1;
    // echo message
    echo "You have visited this page for the first time";
}
