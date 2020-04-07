<?php

session_start();

// If want to remove one element
unset($_SESSION['name']);


session_destroy();
