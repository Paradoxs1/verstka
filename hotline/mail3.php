<?php

$address = "dimasherstuyk@gmail.com";
$from = 'No-reply@stollerukraine.com.ua';
$sitename = "Гарячая линия (обратный звонок)";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$message = "Имя: $name \nТелефон: $phone";

mail ($address, $sitename, $message,"Content-type:text/plain; charset = charset=utf-8\r\nFrom:$from");
?>