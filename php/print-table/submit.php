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
        $num1 = $_GET["num1"];
        $num2 = $_GET["num2"];

        if (is_numeric($num1) && is_numeric($num2)) {
            for ($i = 1; $i <= $num2; $i++) {
                $result = $num1 * $i;
                printf("{$num1} * {$i} = {$result} <br>");
            }
        }
        else {
            print("Please enter valid integers");
        }
    ?>
</body>

</html>