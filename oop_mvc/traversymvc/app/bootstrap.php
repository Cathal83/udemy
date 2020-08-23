<?php
// Load config
require_once 'config/config.php';

/** 
 * This was replaced by the autoload below
 */
// Load Libraries
// require_once "libraries/Core.php";
// require_once "libraries/Controller.php";
// require_once "libraries/Database.php";

//Autoload Core Libraries
spl_autoload_register(function($className){
    require_once 'libraries/'.$className.'.php';
});