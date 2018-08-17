<?php
$recepient = "stanislav.ever@gmail.com";
$sitename = "Заказ звонка (CP)";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$message = "Имя: $name \nТелефон: $phone";
$from = 'No-reply@creamprofessional.com.ua';

$pagetitle = "Заказ звонка (CP)";
mail ($recepient,$sitename,$message,"Content-type:text/plain; charset = charset=utf-8\r\nFrom:$from");
?>