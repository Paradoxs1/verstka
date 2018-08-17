<?php

$address = "dimasherstuyk@gmail.com";
$from = 'No-reply@site.ru';
$sitename = "Контекст Плюс заказать звонок";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$tarif = trim($_POST["tarif"]);
$message = "Имя: $name \nТелефон: $phone \nТариф: $tarif";

mail ($address, $sitename, $message,"Content-type:text/plain; charset = charset=utf-8\r\nFrom:$from");
?>