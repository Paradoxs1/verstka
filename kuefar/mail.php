<?php

$address = "dimasherstuyk@gmail.com";
$from = 'No-reply@site.com.ua';
$sitename = "Закажите пробники бесплатно!";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$phone = trim($_POST["phone"]);
$adress = trim($_POST["adress"]);
$message = "Имя: $name \nТелефон: $phone \nПочта: $email \nАдрес: $adress";

mail($address, $sitename, $message,"Content-type:text/plain; charset = charset=utf-8\r\nFrom:$from");
?>