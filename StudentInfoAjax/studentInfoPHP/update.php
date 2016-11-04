<?php
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods:POST,POST');
header('Access-Control-Max-Age:60');
header('Access-Control-Allow-Headers:x-requested-with,content-type');
header('Content-Type:application/json;charset=utf-8');

require_once "DBConn.php";
$pdo = DBConn::makeConn();
//更新数据
$id = $_POST["id"];
$uname = $_POST["uname"];
$age = $_POST["age"];
$sex = $_POST["sex"];
$num = $_POST["num"];

$sql = "update student set uname = '$uname',age = $age,sex = '$sex',num = $num where id = $id ";
//$sql = "update student set uname = 'TTTTTTT',age = 12,sex = 'N',num = 1234 where id = 37 ";

$rel = $pdo -> exec($sql);

if ($rel) {
	echo "success";
}else{
	echo "error";
}
