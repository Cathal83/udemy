<?php

$cities = ['London', 'Paris', 'New York'];

echo '<pre>';
print_r($cities);

$students = array("Sam" => 12, "Holly" => 13, "John" => 9);
echo '
<pre>';
print_r($students);

foreach ($students as $student => $age) {
    echo "$student is $age years old. <br/>";
}
