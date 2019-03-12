<?php

    // load configuration
    require("../includes/config.php");

    header("Content-Type: application/json");

    // Get raw post data
    $content = trim(file_get_contents("php://input"));

    // Decode raw data
    $data = json_decode($content, true);

    // checkbox clicked
    if ($data["toggleCheck"] == true)
    {
        // update database
        $response = $db_handle->query("UPDATE tasks SET is_completed = NOT is_completed WHERE id = {$data['id']}");
        if (!$response)
            exit("Failed to update checkbox");

        $state = query_select($db_handle, "SELECT is_completed FROM tasks WHERE id = {$data['id']}");

        // send new state to client
        echo json_encode(["state" => $state[0]["is_completed"]]);
    }

?>