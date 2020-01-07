<?php

header('Content-Type: application/json');

$server = "localhost";
$username = "root";
$password = "root";
$dbname = "hoteldb";

$conn = new mysqli($server, $username, $password, $dbname);
if ($conn -> connect_errno) {

  echo json_encode(-1);
  return;
}

list($title, $description) = [
                                      $_POST['title'],
                                      $_POST['description']
                                    ];
if (!$title || !$description){
  echo json_encode(-2);
  return;
}

$sql = "

    INSERT INTO configurazioni(title, description)
    VALUES ( ? , ? )

";

$stmt = $conn-> prepare($sql);
$stmt -> bind_param("ss", $title, $description);

$res = $stmt -> execute();
echo json_encode($res);
