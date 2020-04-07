<?php
for ($i = 6; $i <= 60; $i += 6) {
    echo $i . '<br/>';
}

$j = 6;
while ($j <= 60) {
    echo $j . '<br/>';
    $j += 6;
}


for ($i = 1; $i <= 100; $i++) {
    if ($i % 3 == 0 && $i % 5 == 0) {
        echo "Fizz Buzz" . '<br/>';
    } elseif ($i % 3 == 0) {
        echo "Fizz" . '<br/>';
    } elseif ($i % 5 == 0) {
        echo "Buzz" . '<br/>';
    } else {
        echo $i . '<br/>';
    }
}



for ($i = 1; $i <= 5; $i++) {

    for ($j = 1; $j <= $i; $j++) {

        echo "3";
    }
}
