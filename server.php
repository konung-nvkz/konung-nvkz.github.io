<?php
$_POST = json_decode( file_get_contents("php://input"), true );//получаем json-данные, чтобы с ними поработать
echo var_dump($_POST); //программа берёт данные, которые пришли с клиента, превращает в строку и показывает на клиенте