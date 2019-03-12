<?php

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
?>