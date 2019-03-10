<?php

    // load configuration
    require("../includes/config.php");

    // get id of todo item
    if (!empty($_GET["id"]))
    {
        $id = $_GET["id"];
        $response = $db_handle->query("DELETE FROM tasks WHERE id = {$id}");

        if (!$response)
        {
            exit("Error: Failed to delete");
        }
    }

    redirect("/");

?>