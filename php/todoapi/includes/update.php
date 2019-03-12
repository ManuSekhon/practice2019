<?php

    if ($_SERVER["REQUEST_METHOD"] == "PUT")
    {
        if (!empty($_GET["id"]))
        {
            // get todo from put request
            $todo = getClientData();
            updateDB($db_handle, $_GET["id"], $todo);
            echo json_encode(["status" => "success"]);
        }
        exit;
    }

?>