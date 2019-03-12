<?php

    // load configuration
    require("../includes/config.php");

    if ($_SERVER["REQUEST_METHOD"] == "GET")
    {
        // return all todos
        if (empty($_GET["id"]))
            $todos = selectDB($db_handle);
        else
            $todos = selectDB($db_handle, $_GET["id"]);

        // return JSON
        echo json_encode($todos);
        exit;
    }
    
    else if ($_SERVER["REQUEST_METHOD"] == "POST")
    {
        // get todo from post
        $todo = getClientData();
        // insert into database
        insertDB($db_handle, $todo["caption"]);
        exit;
    }

    else if ($_SERVER["REQUEST_METHOD"] == "PUT")
    {
        if (!empty($_GET["id"]))
        {
            // get todo from put request
            $todo = getClientData();
            updateDB($db_handle, $_GET["id"], $todo);
        }
        exit;
    }

    else if ($_SERVER["REQUEST_METHOD"] == "DELETE")
    {
        if (!empty($_GET["id"]))
        {
            // delete id from table
            deleteDB($db_handle, $_GET["id"]);
        }
        exit;
    }

?>