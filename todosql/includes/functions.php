<?php
    /**
     * Helper functions for project
     */

    // Render view. Also pass values
    function render($view, $data = [])
    {
        // check if view exists
        if (file_exists("../views/{$view}"))
        {
            // extract values into local scope
            extract($data);

            // render view
            require("../views/${view}");
            exit;
        }
    }

    // Redirect user to location
    function redirect($location)
    {
        header("Location: {$location}");
        exit;
    }

    // Return associative array of rows returned by select statement
    function query_select($handle, $sql)
    {
        // Get data from table
        if ($result = $handle->query($sql))
        {
            $array = [];
            while ($row = $result->fetch_assoc())
            {
                $array[] = $row;
            }

            // Free result set
            $result->close();

            return $array;
        }
    }
?>