<?php
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods:POST,GET');
header('Access-Control-Max-Age:60');
header('Access-Control-Allow-Headers:x-requested-with,content-type');
header('Content-Type:application/json;charset=utf-8');

require_once "DBConn.php";
$pdo = DBConn::makeConn();

$id = $_POST["id"];

$sql = "delete from student where id = $id";

$rel = $pdo -> exec($sql);

if ($rel>0) {
	echo "success";
}else{
	echo "error";
}