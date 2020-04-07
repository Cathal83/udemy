<?php

$string = "I love this website but feel that the stupid badword1comments are detracting from the user
experience. The person who wrote this is a badword2";

$badwords = array('badword1', 'badword2');

foreach ($badwords as $badword) {
    $string = str_replace($badword, "****", $string);
}

echo $string;
