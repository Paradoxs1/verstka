<?php

$address = "dimasherstuyk@gmail.com";
$from = 'No-reply@stollerukraine.com.ua';
$sitename = "Гарячая линия (задать вопрос)";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$comment = trim($_POST["comment"]);
$message = "Имя: $name \nТелефон: $phone \nПочта: $email \nВопрос: $comment";

mail ($address, $sitename, $message,"Content-type:text/plain; charset = charset=utf-8\r\nFrom:$from");
?>