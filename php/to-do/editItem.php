<?php
    session_start();

    $key = $_GET["key"];
    $data = $_GET["data"];

    if (empty($data)) 
    {
        header("Location: removeItem.php?index={$key}");
    }
    else
    {
        $_SESSION["toDoCollection"][$key]["caption"] = $data;
        $_SESSION["toDoCollection"][$key]["isCompleted"] = false;
        header("Location: index.php");
    }
?>