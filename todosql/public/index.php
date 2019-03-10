<?php

    // load configuration
    require("../includes/config.php");

    // Get todos from table
    $todos = query_select($db_handle, "SELECT * FROM tasks");

    // Render homepage
    render("todos.php", ["todos" => $todos]);

?>