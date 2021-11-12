<!DOCTYPE html>
<html lang="en">

<?php
session_start();
if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== True){
    echo "<script>alert(\"You have to log in to access this page!\")</script>";
    header("location: login.php");
    exit;
}

?>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Villager Hunt - Admin (Mods Only)</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
        integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
    <link rel="stylesheet" href="../villagerhunt.css">
</head>

<body class="bg-dark text-light">
    <div class="container">
            <div class="form-group">
                <label class="form-control-lg" for="villagerEntry">Enter Villager Name: </label>
            <select class="form-control-lg" name="villagerEntry" id="villagerEntry">
            </select>
            <button class="btn-lg btn-primary" id="addVillager">Add</button>
            <button class="btn-lg btn-danger"><a class="text-light" href="logout.php">Logout</a></button>
            </div>
    </div>
    <hr>
    <table class="table text-light table-striped">
        <thead>
            <tr>
                <th scope="col">Island #</th>
                <th scope="col">Image</th>
                <th scope="col">Villager Name</th>
                <th scope="col">Date/Time</th>
                <th scope="col">Personality</th>
                <th scope="col">Species</th>
                <th scope="col">Birthday</th>
                <th scope="col">Catchphrase</th>
                <th scope="col">Hobbies</th>
                <th scope="col">Delete</th>
            </tr>
        </thead>
        <tbody id="trackerData">

        </tbody>
    </table>

    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
        integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.min.js"
        integrity="sha384-VHvPCCyXqtD5DqJeNxl2dtTyhF78xXNXdkwX1CZeRusQfRKp+tA7hAShOK/B/fQ2"
        crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-1.9.1.min.js"></script>
    <script src="admin.js"></script>
</body>

</html>