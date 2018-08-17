<?php

$recepient = "stanislav.ever@gmail.com";
$sitename = "Покупка сертификата (CP)";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$certificate = trim($_POST["certificate"]);
$message = "Имя: $name \nТелефон: $phone \nСертификат: $certificate";
$from = 'No-reply@creamprofessional.com.ua';

$pagetitle = "Покупка сертификата:";
mail ($recepient,$sitename,$message,"Content-type:text/plain; charset = charset=utf-8\r\nFrom:$from");
?>