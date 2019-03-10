<?php

    session_start();

    if ($_SESSION["toDoCollection"][$_GET["index"]]["isCompleted"] == false)
        $_SESSION["toDoCollection"][$_GET["index"]]["isCompleted"] = true;
    else
        $_SESSION["toDoCollection"][$_GET["index"]]["isCompleted"] = false;

    header("Location: index.php");

?>