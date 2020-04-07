<?php

/**
 * FUNCTIONS
 */

function hello()
{
    echo "Hello, world" . '<br/>';
}

hello();

// VARIABLES
function add()
{
    // Have to pass in external function with global keyword
    global $c;
    $a = 1;
    $b = 2;
    $sum = $a + $c;
    echo $sum . '<br/>';
}
$c = 5;
add();

// PASSING ARGUMENTS
function multiply($number1, $number2)
{
    $result = $number1 * $number2;
    echo $result . '<br/>';
}

multiply(12, 5);
multiply(3, 9);

// RETURN A VALUE
function uppercase($name)
{
    $result = strtoupper($name);
    return $result;
}

echo uppercase("Yoshi");

// RETURNING MULTIPLE VALUES
function calculate($number1, $number2)
{
    $add = $number1 + $number2;
    $subtract = $number1 = $number2;
    return array($add, $subtract);
}

$results = calculate(10, 3);
echo '<pre>';
print_r($results);
