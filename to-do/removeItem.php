<?php

    session_start();
    array_splice($_SESSION["toDoCollection"], $_GET["index"], 1);

    header("Location: index.php");
?>