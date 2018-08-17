<?php

$address = "dimasherstuyk@gmail.com";
$from = 'No-reply@site.ru';
$sitename = "Контекст Плюс Заполните заявку (внизу)";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$message = "Имя: $name \nТелефон: $phone \nПочта: $email";

mail ($address, $sitename, $message,"Content-type:text/plain; charset = charset=utf-8\r\nFrom:$from");
?>