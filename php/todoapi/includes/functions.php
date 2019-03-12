<?php

    // Return associative array of database rows
    function selectDB($handle, $id = 0)
    {
        $sql = "SELECT * FROM tasks";

        // only one row requested
        if ($id != 0)
            $sql .= " WHERE id = {$id}";

        // request database
        if ($result = $handle->query($sql))
        {
            $array = [];
            while ($row = $result->fetch_assoc())
                $array[] = $row;

            // Free result set
            $result->close();

            return $array;
        }
    }

    // Insert into table
    function insertDB($handle, $caption)
    {
        if (!empty($caption))
        {
            $response = $handle->query("INSERT INTO tasks (caption, is_completed) VALUES ('{$caption}', 0)");
            if (!$response)
                exit("Error: Failed to insert todo");
        }
    }

    // Delete row from table
    function deleteDB($handle, $id)
    {
        $response = $handle->query("DELETE FROM tasks WHERE id = {$id}");
        if (!$response)
            exit("Error: Failed to delete row");
    }

    // Update caption or is_completed state of todo
    function updateDB($handle, $id, $todo)
    {
        if (array_key_exists("caption", $todo))
        {
            // caption is empty
            if (empty($todo["caption"]))
            {
                deleteDB($handle, $id);
            }
            else
            {
                $caption = $todo["caption"];
                $response = $handle->query("UPDATE tasks SET caption = '{$caption}' WHERE id = {$id}");
                if (!$response)
                    exit("Error: Failed to update");
            }
        }
        else if (array_key_exists("toggleCheck", $todo) && $todo["toggleCheck"] == true)
        {
            $response = $handle->query("UPDATE tasks SET is_completed = NOT is_completed WHERE id = {$id}");
            if (!$response)
                exit("Error: Failed to update");
        }
    }

    // Get values from json received from client request
    function getClientData()
    {
        // Get raw post json data
        $content = trim(file_get_contents("php://input"));
        // Decode raw data
        return json_decode($content, true);
    }

?>