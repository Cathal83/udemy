<?php

$suits = ['hearts', 'clubs', 'diamonds', 'spades'];
$values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

$suitPos = array_rand($suits);
$suit = $suits[$suitPos];

$value = $values[array_rand($values)];

echo "$value of $suit";
