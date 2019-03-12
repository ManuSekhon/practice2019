<?php
    /**
     * Configuration file for database
     */

    // enable all errors and warnings
    ini_set("display_errors", true);
    error_reporting(E_ALL);

    require("functions.php");

    // parameters for DB connection
    $server_name = "127.0.0.1";
    $username = "USERNAME";
    $password = "PASSWORD";
    $db_name = "todo";

    // establish connection with db
    $db_handle = new mysqli($server_name, $username, $password, $db_name);
    if ($db_handle->connect_error)
    {
        exit("Error: Unable to connect to DB:" . $db_handle->connect_error . "\n");
    }

?>