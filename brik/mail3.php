<?php

$address = "ever-sts@yandex.ru";
$from = 'No-reply@stollerukraine.com.ua';
$sitename = "BrickStanok Запросить условия и сроки поставки";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$message = "Имя: $name \nТелефон: $phone";

mail ($address, $sitename, $message,"Content-type:text/plain; charset = charset=utf-8\r\nFrom:$from");
?>