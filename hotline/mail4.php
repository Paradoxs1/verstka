<?php

$address = "dimasherstuyk@gmail.com";
$from = 'No-reply@stollerukraine.com.ua';
$sitename = "Гарячая линия (пишите нам)";

$name = trim($_POST["name"]);
$comment = trim($_POST["comment"]);
$message = "Имя: $name \nВопрос: $comment";

mail ($address, $sitename, $message,"Content-type:text/plain; charset = charset=utf-8\r\nFrom:$from");
?>