<?php

    session_start();

    if (!empty($_POST["item"]))
        $_SESSION["toDoCollection"][] = ["caption" => $_POST["item"], "isCompleted" => false];

    // Redirect to homepage
    header("Location: index.php");

?>