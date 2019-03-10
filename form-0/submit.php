<?php
/**
 * Task 1
 */
?>

<!DOCTYPE html>

<html>
<head>
    <title>Final Page</title>
</head>

<body>
    <?php
        if (!empty($_POST["name"]))
            echo "Hey {$_POST["name"]}! Nice to meet you. I am PHP";
        else
            echo "Please enter some text";
    ?>
</body>

</html>