<?php

$address = "artem_bb@mail.ru";
$from = 'info@stollerukraine.com';
$sitename = "StollerUkraine #3 land - Рассчитать эффект (Форма 2)";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$message = "Имя: $name \nТелефон: $phone \nПочта: $email";

mail ($address, $sitename, $message,"Content-type:text/plain; charset = charset=utf-8\r\nFrom:$from");
?>