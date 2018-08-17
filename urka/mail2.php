<?php

$address = "dimasherstuyk@gmail.com";
$from = 'No-reply@urka.com.ua';
$sitename = "Site юредических услуг (Получите консультацию)";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$comment = trim($_POST["comment"]);
$message = "Имя: $name \nТелефон: $phone \nКомментарий $comment";

mail ($address, $sitename, $message,"Content-type:text/plain; charset = charset=utf-8\r\nFrom:$from");
?>