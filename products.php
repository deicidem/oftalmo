<?php
$link = mysqli_connect("localhost", "mysql", "mysql");
// mysqli_query($link, "SET NAMES 'utf8';");
// mysqli_query($link, "SET CHARACTER SET 'utf8';");
// mysqli_query($link, "SET SESSION collation_connection = 'utf8_general_ci';");
$sql = 'SELECT * FROM `продукты`';
$db = mysqli_select_db($link, 'oftalmo');
$result = mysqli_query($link, $sql);
$data = array(); // в этот массив запишем то, что выберем из базы
while($row = mysqli_fetch_assoc($result)){ // оформим каждую строку результата
    $data[] = $row; // допишем строку из выборки как новый элемент результирующего массива
}
// $fp = fopen('database.json', 'a');
// $test = fwrite($fp, json_encode($data, JSON_UNESCAPED_UNICODE)); // Запись в файл
// fclose($fp);
echo json_encode($data, JSON_UNESCAPED_UNICODE); // и отдаём как json