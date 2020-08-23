<?php

// Section 2 Lexture 7: https://www.udemy.com/course/object-oriented-php-mvc/learn/lecture/8283564

class User {
    public $name;
    public $age;
    public static $minPassLength = 6;

    public static function validatePass($pass){
        // Access with self because it is static
        if(strlen($pass)>=self::$minPassLength){
            return true;
        } else {
            return false;
        }
    }
}

$password = 'hello';

if(User::validatePass($password)){
    echo 'Password valid';
} else {
    echo 'Password invalid';
}