<?php

// Section 2 Lexture 4: https://www.udemy.com/course/object-oriented-php-mvc/learn/lecture/8283458

class User{
    public $name;
    public $age;

    // Runs when an object is created
    public function __construct($name, $age){
        // echo 'constructor ran...';
        echo 'Class ' .__CLASS__ . ' instantiated <br/>';
        $this->name = $name;
        $this->age = $age;
    }

    public function sayHello(){
        return $this->name . ' Say Hello';
    }

    // Clean up function - closes database connections for example
    // Called when no other references to a certain obect
    public function __destruct(){
        echo 'destructor ran';
    }
}

$user1 = new User('Brad', 36);
echo $user1->name . " is " . $user1->age . " years old";
echo '<br/>';
echo $user1->sayHello();
echo '<br/>';

$user2 = new User('Yoshi', 26);
echo $user2->name . " is " . $user2->age . " years old";
echo '<br/>';
echo $user2->sayHello();
echo '<br/>';