<?php

/**
 * IF ELSE STATEMENT
 */

$a = 3;
$b = 10;
if ($a == $b) {
    echo "True" . '<br/>';
} else {
    echo "False" . '<br/>';
}

if ($a > $b) {
    echo "True" . '<br/>';
} else {
    echo "False" . '<br/>';
}

// AND
if ($a <= 5 && $b >= 10) {
    echo "True" . '<br/>';
} else {
    echo "False" . '<br/>';
}

// OR
if ($a <= 5 || $b >= 10) {
    echo "True" . '<br/>';
} else {
    echo "False" . '<br/>';
}

if ($a % 3 == 0) {
    echo "number is a multiple of 3" . '<br/>';
} elseif ($a % 4 == 0) {
    echo "number is a multiple of 4" . '<br/>';
} elseif ($a % 5 == 0) {
    echo "number is a multiple of 5" . '<br/>';
} else {
    echo "number is not a multiple of 3, 4, 5" . '<br/>';
}

/**
 * FOR LOOP
 */

for ($i = 1; $i <= 10; $i++) {
    echo $i . '<br/>';
}

/**
 * WHILE LOOP
 */

$i = 1;
while ($i <= 10) {
    echo $i . '<br/>';
    $i++;
}
