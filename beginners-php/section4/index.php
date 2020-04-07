<?php

/**
 * CONCATENATION
 */

$first = "John";
$last = "Smith";

echo $first . ' ' . $last . '<br/>';

$length = 10;
$height = 5;
$rectangle = $length * $height;
echo 'The area of the rectangle is ' . $rectangle . ' units squared' . '<br/>';


$firstName = 'John';
$middleName = 'Henry';
$lastName = 'Green';
$age = 42;

echo $firstName . ' ' . $middleName . ' ' . $lastName . ' is ' . $age . ' years old.' . '<br/>';

/**
 * SENTENCES
 */
$sentence = "The quick brown fox jumped over the lazy dog but the dog was not at all happy about it and started to bark at the fox.";

$sentence2 = "The quick brown fox ";
$sentence2 .= "jumped over the lazy dog ";
$sentence2 .= "but the dog was not at all happy";
$sentence2 .= "about it and started to bark at the fox.";

echo $sentence;
echo "<br>";
echo $sentence2;

/**
 * INCREMENT and DECREMENT
 */

$i = 0;
echo $i . '<br/>';
$i++;
echo $i . '<br/>';
