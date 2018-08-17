<?php

$address = "dimasherstuyk@gmail.com";
$from = 'No-reply@urka.com.ua';
$sitename = "Site юредических услуг (заказать звонок)";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$message = "Имя: $name \nТелефон: $phone";

mail ($address, $sitename, $message,"Content-type:text/plain; charset = charset=utf-8\r\nFrom:$from");
?>