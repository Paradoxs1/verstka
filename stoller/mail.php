<?php

$address = "artem_bb@mail.";
$from = 'info@stollerukraine.com';
$sitename = "StollerUkraine #3 land - заказать звонок";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$comment = trim($_POST["comment"]);
$message = "Имя: $name \nТелефон: $phone \nСообщение: $comment";

mail ($address, $sitename, $message,"Content-type:text/plain; charset = charset=utf-8\r\nFrom:$from");
?>