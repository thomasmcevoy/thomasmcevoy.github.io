<?php

  header('Content-type: application/json; charset=utf-8');

  $data = file_get_contents('php://input');
  $my_file = 'shows.json';
  $handle = fopen($my_file, 'w') or die('Cannot open file: '.$my_file);
  fwrite($handle, $data);
  fclose($my_file);

  $return["json"] = json_encode($return);
  echo json_encode($return);
?>
