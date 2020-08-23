<?php

// Section 2 Lexture 3: https://www.udemy.com/course/object-oriented-php-mvc/learn/lecture/8283442

// Define a class
class User{
    // Properties (attributes)
    public $name;

    // Methods (functions)
    public function sayHello(){
       return $this->name ." Says Hello";
    }
}

// Create a new user Object from class
$user1 = new User();
$user1->name = 'Brad';
echo $user1->name;
echo '<br/>';
echo $user1->sayHello();

echo '<br/>';
// Create new user
$user2 = new User();
$user2->name = "Yoshi";
echo $user2->name;
echo '<br/>';
echo $user2->sayHello();