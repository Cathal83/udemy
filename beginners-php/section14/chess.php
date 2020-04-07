<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css">
    <title>Chessboard</title>
</head>

<body>
    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
        <input type="number" name="gridSize" id="" min="2" max="15" step="1">
        <input type="submit" name="submit" value="submit">
    </form>

    <?php
    if (isset($_POST['submit'])) {
        $gridsize = $_POST['gridSize'];

        echo "<table>";
        for ($row = 1; $row <= $gridsize; $row++) {
            echo "<tr>";
            for ($col = 1; $col <= $gridsize; $col++) {
                if (($row + $col) % 2 == 0) {
                    echo "<td class='black'></td>";
                } else {
                    echo "<td class='white'></td>";
                }
            }
            echo "</tr>";
        }
        echo "</table>";
    }
    ?>
</body>

</html>