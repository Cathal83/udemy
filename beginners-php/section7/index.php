<?php

/**
 * FUNCTIONS
 */

// Random and Power
$random = rand(1, 100);
echo $random;

$heads = 0;
$tails = 0;

for ($i = 1; $i <= 10; $i++) {
    $number = rand(1, 2);
    if ($number == 1) {
        echo 'heads, I win <br/>';
        $heads++;
    } else {
        echo 'tails, you win <br/>';
        $tails++;
    }
}
echo 'Heads: ' . $heads;
echo 'Tails: ' . $tails . '<br/>';

$radius = 5;

$answer = pi() * pow($radius, 2);
echo round($answer) . '<br/>';

// DATE

date_default_timezone_set('Europe/Dublin');

echo 'The year is ' . date('Y') . '<br/>';
echo 'The day is ' . date('l') . '<br/>';
echo 'The time is ' . date('g:i:s a');

// Day Date Month Year
echo date('l jS F Y');
echo '<br>';

// Day
echo date('l');
echo '<br>';

// Day Number Month Year
echo date('l d F, Y');
echo '<br>';

// Year/Month/Day
echo date('Y/m/d');
echo '<br>';

// Date and Time
echo date('l jS F Y, g:i A');
echo '<br>';

// Current year a leap year?
if (date('L') == 1) {
    echo "leap year";
} else {
    echo "not leap year" . '<br/>';
}


// TIME
$date = strtotime('1st January 2020');
$seconds = $date - time();

$minutes = $seconds / 60;
$hours = $minutes / 60;
$days = $hours / 24;
echo $days . '<br/>';

$days = ($date - time()) / 60 / 60 / 24;
echo ceil($days) . '<br/>';

$date = strtotime('25th December 2019');

$days = ($date - time()) / 60 / 60 / 24;
echo ceil($days) . '<br/>';
