<?php

    if ($_SERVER["REQUEST_METHOD"] == "POST")
    {
        // get todo from post
        $todo = getClientData();
        // insert into database
        insertDB($db_handle, $todo["caption"]);
        echo json_encode(["id" => $db_handle->insert_id, "caption" => $todo["caption"],
                          "is_completed" => 0]);
        exit;
    }
?>