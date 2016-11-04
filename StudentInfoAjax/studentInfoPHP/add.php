<?php
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods:POST,POST');
header('Access-Control-Max-Age:60');
header('Access-Control-Allow-Headers:x-requested-with,content-type');
header('Content-Type:application/json;charset=utf-8');


require_once "DBConn.php";
$pdo = DBConn::makeConn();
//添加数据
$uname = $_POST["uname"];
$age = $_POST["age"];
$sex = $_POST["sex"];
$num = $_POST["num"];
// echo $uname;
$sql = "insert into student values(null,'$uname',$age,'$sex',$num)";

$rel = $pdo -> exec($sql);

if ($rel>0) {
	echo "success";
}else{
	echo "error";
}
