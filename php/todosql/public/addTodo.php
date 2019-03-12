<?php

    // load configuration
    require("../includes/config.php");    

    // if user reached via get
    if ($_SERVER["REQUEST_METHOD"] == "POST")
    {
        // check if user entered something
        if (!empty($_POST["item"]))
        {
            $todo = $_POST["item"];
            $response = $db_handle->query("INSERT INTO tasks (caption, is_completed) VALUES ('{$todo}', 0)");

            if (!$response)
            {
                exit("Error: Failed to insert todo\n");
            }
        }
    }

    // Go to homepage
    redirect("/");

?>