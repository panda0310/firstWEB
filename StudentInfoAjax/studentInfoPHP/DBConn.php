<?php

class DBConn{
	private static $DBConn = null;

	public static function makeConn(){
		if (self::$DBConn == null) {
			try{
				$pdo = new PDO("mysql:host=localhost;dbname=day1102","root","");
				self::$DBConn = $pdo;
			}catch(PDOException $e){
				echo $e ->getMessage();
			}
		}
		return self::$DBConn;
	}
}