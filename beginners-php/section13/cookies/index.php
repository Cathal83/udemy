<?php

/**
 * COOKIES
 */

setcookie('fruit', 'orange', time() + 600);

// READ COOKIE
if (isset($_COOKIE['fruit'])) {
    echo $_COOKIE['fruit'];
} else {
    echo "Cookie has not been set";
}

// UPDATE COOKIE
setcookie('fruit', 'apple', time() + 600);

// DELETE COOKIE
setcookie('fruit', NULL, time() - 3600);
