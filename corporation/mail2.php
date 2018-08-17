<?php

$address = "dimasherstuyk@gmail.com";
$from = 'No-reply@stollerukraine.com.ua';
$sitename = "Столичная Финансовая Корпорация (назначьте встречу с нашим менеджером)";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$datevisit = trim($_POST["datevisit"]);
$message = "Имя: $name \nТелефон: $phone \nДата встречи: $datevisit";

mail ($address, $sitename, $message,"Content-type:text/plain; charset = charset=utf-8\r\nFrom:$from");
?>