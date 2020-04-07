<?php

/**
 * ADDITION IN PHP
 */

$a = 5;
$b = 10;

$answer = $a + $b;
echo $answer . '<br/>';

/**
 * SUBTRACTION
 */

$answer = $a - $b;
echo $answer . '<br/>';

/**
 * MULTIPLICATION
 */

$answer = $a * $b;
echo $answer . '<br/>';

/**
 * DIVISION
 */

$answer = $a / $b;
echo $answer . '<br/>';

/**
 * MODULUS
 */

$a = 20;
$b = 3;
$answer = $a % $b;
echo $answer . '<br/>';

/**
 * POWER
 */

$base = 2;
$power = 3;
$answer = pow($base, $power);
echo $answer . '<br/>';

/**
 * AREA
 */

$length = 10;
$width = 6;
$answer = $length * $width;
echo $answer . '<br/>';

// Triangle
$height = 12;
$base = 3;
$answer = ($height * $base) / 2;
echo $answer . '<br/>';

// Circle
$radius = 5;
$pi = 3.14;
$circle = $pi * ($radius * $radius);
echo $circle . '<br/>';

// Trapezium
$a = 10;
$b = 8;
$height = 4;
$area = (($a + $b) / 2) * $height;
echo $area . '<br/>';
