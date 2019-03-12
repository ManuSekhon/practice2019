<?php

    if ($_SERVER["REQUEST_METHOD"] == "DELETE")
    {
        if (!empty($_GET["id"]))
        {
            // delete id from table
            deleteDB($db_handle, $_GET["id"]);
            echo json_encode(["status" => "success"]);
        }
        exit;
    }

?>