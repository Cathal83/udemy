<?php

/**
 * STRINGS
 */

$sentence = "This is a sentence.";
// String Length
$length = strlen($sentence);
echo "The length of the string is " . $length . '<br/>';
// Word Count
echo str_word_count($sentence) . '<br/>';

// Character replaecement
$string = "John|Sam|Billy|Karen|Ben|Jane|Bob";

$newString = str_replace('|', ', ', $string);
echo $newString . '<br/>';

// Randomise String
$string = "basketball";
$newString = str_shuffle($string);
echo $newString . '<br/>';

// SINGLE and DOUBLE QUOTES
$name = "Tom";
$age = 21;

echo "Hello " . $name . " your age is " . $age . " years old" . '<br/>';
echo "Hello $name your age is $age years old" . '<br/>';
echo 'Hello ' . $name . ' your age is ' . $age . ' years old' . '<br/>';

// ESCAPING STRINGS

echo "Tom's got a great book called \"Hello World!\"";
echo 'Tom\'s got a great book called "Hello World!"';
