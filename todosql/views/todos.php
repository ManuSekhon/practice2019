<!DOCTYPE html>

<html>

<head>
    <title>My ToDo App</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">

    <link rel="stylesheet" href="/css/styles.css">
</head>

<body>
    <div class="container">
        <h1>To Do App</h1>
        <form class="form-inline" action="addTodo.php" method="POST">
            <div class="form-group">
                <input class="form-control" name="item" type="text" placeholder="" autofocus required>
            </div>
            <button type="submit" class="btn btn-primary ml-4">Submit</button>
        </form>

        <ul class="list-group">
            <?php foreach($todos as $todo): ?>
                <li class="list-group-item">
                    <input type="text" class="data" value="<?= $todo['caption'] ?>">
                    <a href="deleteToDo.php?id=<?= $todo['id'] ?>">
                        <button class="btn btn-dark">Delete</button>
                    </a>
                </li>
            <?php endforeach ?>
        </ul>
    </div>
</body>

</html>