<?php
$address = "stanislav.ever@gmail.com";
$sitename = "OzonBag";

$mail = trim($_POST["mail"]);
$text = trim($_POST["text"]);
$message = "Почта: $mail \nТекст: $text";
$from = 'No-reply@site.ru';

$sub = "Задали вопрос с сайта OzonBag";
mail($address, $sub, $message,"Content-type:text/plain; charset=UTF-8\r\nFrom:$from");