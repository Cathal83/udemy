<?php

/**
 * ARRAYS
 */

$names = array("Mary", "James", 'John', 'Yoshi');

echo '<pre>';
print_r($names);

$cities = ['London', 'Paris', 'New York'];

echo '<pre>';
print_r($cities);

$mixed = array(5, 'red', TRUE);
echo '<pre>';
print_r($mixed);

// LOOP THROUGH ARRAY
echo "<ol>";
foreach ($names as $name) {
    echo "<li>$name</li>";
}
echo "</ol>";


// STRING TO ARRAY
$word = "Christmas";

$letters = str_split($word);
echo '<pre>';
print_r($letters);

// Breaking into sections of 2 letters each
$letters = str_split($word, 2);
echo '<pre>';
print_r($letters);

// SORTING AN ARRAY
sort($names);
echo "<ol>";
foreach ($names as $name) {
    echo "<li>$name</li>";
}
echo "</ol>";

rsort($names);
echo "<ol>";
foreach ($names as $name) {
    echo "<li>$name</li>";
}
echo "</ol>";

// EXPLODE AND IMPLODE
$string = "Mary, James, John, Yoshi";

$names = explode(', ', $string);
echo '<pre>';
print_r($names);

$imploded = implode("|", $names);
echo '<pre>';
print_r($imploded);

array_push($cities, "Dublin");
echo '<pre>';
print_r($cities);

array_unshift($cities, "Berlin");
echo '<pre>';
print_r($cities);

// REMOVING ELEMENTS FROM ARRAY
$lastCity = array_pop($cities);
echo $lastCity;
echo '<pre>';
print_r($cities);
$firstCity = array_shift($cities);
echo $firstCity;
echo '<pre>';
print_r($cities);

// ARRAY SLICE
$letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n'];
$result = array_slice($letters, 5);
echo '<pre>';
print_r($result);

$result = array_slice($letters, 0, 5);
echo '<pre>';
print_r($result);

$result = array_slice($letters, -5, 5);
echo '<pre>';
print_r($result);

// RANDOM ELEMENT FROM ARRAY

$city = array_rand($cities);
echo $cities[$city];
