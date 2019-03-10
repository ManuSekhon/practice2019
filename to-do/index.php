<?php
    session_start();

    if (!isset($_SESSION["toDoCollection"]))
        $_SESSION["toDoCollection"] = [];
?>

<!DOCTYPE html>

<html>
    <head>
        <title>My ToDo App</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">

        <style>
            .container {
                padding: 10px;
            }

            h1 {
                text-align: center;
            }

            .form-inline {
                justify-content: center;
            }

            .form-inline .form-group {
                width: 40%;
            }

            .form-inline .form-control {
                width: 100%;
            }

            ul {
                margin-top: 30px;
            }

            li {
                align-items: center;
            }

            li .data {
                margin-left: 30px;
                margin-right: 30px;
                font-size: 24px;
                border: none;
                width: calc(100% - 200px);
            }

            li button {
                float: right;
                margin-left: 20px;
                width: 100px;
            }

            .checkedItem {
                text-decoration: line-through;
                color: rgba(0, 0, 0, 0.525);
            }
        </style>
    </head>

    <body>
        <div class="container">
            <h1>To Do App</h1>
            <form class="form-inline" action="storeitem.php" method="POST">
                <div class="form-group">
                    <input class="form-control" name="item" type="text" placeholder="" autofocus>
                </div>
                <button type="submit" class="btn btn-primary ml-4">Submit</button>
            </form>
    
            <ul class="list-group">
                <?php foreach($_SESSION["toDoCollection"] as $key => $item): ?>
                    <li class="list-group-item"">
                        <input type="checkbox" <?php if ($item["isCompleted"]): ?> checked <?php endif ?>
                            onchange="location.href = 'checkItem.php?index=<?= $key ?>'">
                        <input type="text" class="data <?php if ($item['isCompleted']): ?>checkedItem<?php endif ?>" 
                            value="<?= $item['caption'] ?>" onfocusout="editItem(this.value, <?= $key ?>)">
                        <button class="btn btn-dark" type="button" onclick="location.href = 'removeItem.php?index=<?= $key ?>'">Remove</button>
                    </li>
                <?php endforeach ?>
            </ul>
        </div>

        <script>
            const editItem = (data, key) => {
               location.href = `editItem.php?key=${key}&data=${data}`
            }
        </script>
    </body>
</html>