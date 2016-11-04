<?php
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods:POST,GET');
header('Access-Control-Max-Age:60');
header('Access-Control-Allow-Headers:x-requested-with,content-type');
header('Content-Type:application/json;charset=utf-8');

//set names utf8;
require_once "DBConn.php";
$pdo = DBConn::makeConn();
$sql = "select * from student";

$res = $pdo -> query($sql);
$list = $res -> fetchAll(PDO::FETCH_ASSOC);
echo json_encode($list);