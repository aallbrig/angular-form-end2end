<?php 
  $name = $_GET["name"];
  if($name == "Andy")
  {
    $file = fopen("welcome.txt", "w");
    $current = file_get_contents($file);
    $current .= "John Smith\n";
    file_put_contents($file, $current);
  }
?>
