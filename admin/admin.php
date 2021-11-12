<?php

require('../secure/database.php');
$conn = createConnection();

function getTracker($conn){
    $sql = "SELECT VILLAGER_NAME, date_format(DISCOVER_DATETIME, '%m/%d/%Y %l:%i %p') as Date, Personality, Species, Birthday, Catchphrase, Hobbies FROM villager_tracker vt, villagers v where vt.VILLAGER_NAME = v.Name ORDER BY Date Desc";
    $countSql = "SELECT COUNT(VILLAGER_NAME) FROM villager_tracker";
    
    $output = '';
    $result = $conn->query($countSql);
    $count = mysqli_fetch_row($result)[0];
    foreach($conn->query($sql) as $row) {
        $output = $output . '<tr class="villagerRow"><td>' . $count . '</td><td><img src="villager_img/NH-' . $row['VILLAGER_NAME'] . '_poster.png" width="100" height="100"></td><td class="villagerName font-weight-bold border-right">' . $row['VILLAGER_NAME'] . '</td><td>' . $row['Date'] . '</td><td>' . $row['Personality'] . '</td><td>' . $row['Species'] . '</td><td>' . $row['Birthday'] . '</td><td>' . $row['Catchphrase'] . '</td><td>' . $row['Hobbies'] . '</td></tr>';
        $count--;
    }

    echo $output;
}

function getTrackerAdmin($conn){
    $sql = 'SELECT VILLAGER_NAME, date_format(DISCOVER_DATETIME, "%m/%d/%Y %l:%i %p") as Date, Personality, Species, Birthday, Catchphrase, Hobbies, ID FROM villager_tracker vt, villagers v where vt.VILLAGER_NAME = v.Name ORDER BY Date Desc';
    $countSql = "SELECT COUNT(VILLAGER_NAME) FROM villager_tracker";

    $output = '';
    $result = $conn->query($countSql);
    $count = mysqli_fetch_row($result)[0];
    foreach($conn->query($sql) as $row) {
        $output = $output . '<tr class="villagerRow"><td>' . $count . '</td><td><img src="villager_img/NH-' . $row['VILLAGER_NAME'] . '_poster.png" width="100" height="100"></td><td class="villagerName">' . $row['VILLAGER_NAME'] . '</td><td>' . $row['Date'] . '</td><td>' . $row['Personality'] . '</td><td>' . $row['Species'] . '</td><td>' . $row['Birthday'] . '</td><td>' . $row['Catchphrase'] . '</td><td>' . $row['Hobbies'] . '</td><td><button class="btn btn-danger text-light deleteBtn" value="' . $row['ID'] . '">X</button></td></tr>';
        $count--;
    }

    echo $output;
}

function addVillager($conn) {
    $value = $_GET['villager'];
    $sql = 'INSERT INTO villager_tracker (VILLAGER_NAME) values ("' . $value . '")';
    $conn->query($sql);
    echo 'Success';
}

function deleteVillager($conn){
    $value = $_GET['villager'];
    $sql = 'DELETE FROM villager_tracker WHERE ID = ' . $value;
    $conn->query($sql);
    echo 'Success';

}


function sortData($conn) {
    $data = $_GET['data'];

    switch($data) {
        case 'tracker':
            getTracker($conn);
            break;
        case 'trackerAdmin':
            getTrackerAdmin($conn);
            break;
        case 'addVillager':
            addVillager($conn);
            break;
        case 'deleteVillager':
            deleteVillager($conn);
            break;
    }
}

sortData($conn);