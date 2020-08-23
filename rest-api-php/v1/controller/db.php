<?php

class DB{
    // Static so do not have to initiate class to use them

    // Makes it easier to scale in future by having two connections
    // Read from one database and write to another database
    private static $writeDBConnection;
    private static $readDBConnection;

    public static function connectWriteDB(){
        // Singleton - only want to use same connection when it is created
        if(self::$writeDBConnection === null){
            self::$writeDBConnection = new PDO('mysql:host=localhost;dbname=tasksdb_restphp;charset=utf8', 'root', 'root');
            self::$writeDBConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            self::$writeDBConnection->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
        }

        return self::$writeDBConnection;
    }

    public static function connectReadDB(){
        // Singleton - only want to use same connection when it is created
        if(self::$readDBConnection === null){
            self::$readDBConnection = new PDO('mysql:host=localhost;dbname=tasksdb_restphp;charset=utf8', 'root', 'root');
            self::$readDBConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            self::$readDBConnection->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
        }

        return self::$readDBConnection;
    }

}