<?php
$connect = mysqli_connect('fdb27.biz.nf','3512074_cardtrick','8660845087@Ajay');
$db = mysqli_select_db($connect,'3512074_cardtrick');
date_default_timezone_set("Asia/Kolkata");
$date = date("Y-m-d");
//whether ip is from share internet
if (!empty($_SERVER['HTTP_CLIENT_IP']))   
  {
    $ip_address = $_SERVER['HTTP_CLIENT_IP'];
  }
//whether ip is from proxy
elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR']))  
  {
    $ip_address = $_SERVER['HTTP_X_FORWARDED_FOR'];
  }
//whether ip is from remote address
else
  {
    $ip_address = $_SERVER['REMOTE_ADDR'];
  }

$query = "SELECT * FROM visitors WHERE ip = '$ip_address'";
$result = mysqli_query($connect,$query);
if(mysqli_num_rows($result)==1){
    $query = "SELECT visited FROM visitors WHERE ip = '$ip_address'";
    $result = mysqli_query($connect,$query);
    $visit = mysqli_fetch_array($result);
    $visited = $visit['visited'];
    $visited++;
    $query = "UPDATE visitors SET `visited`='$visited' WHERE ip = '$ip_address'";
    $result = mysqli_query($connect,$query);
    echo "1";
}
else{
    $query = "INSERT INTO visitors(ip,visited, dates) VALUES ('$ip_address','1','$date')";
    $result = mysqli_query($connect,$query);
    echo "1";
}


?>