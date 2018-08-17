<?php

$recepient = "ever-sts@yandex.ru";
$sitename = "BrickStanok оставить заявку";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$comment = trim($_POST["comment"]);

$message = "Имя: $name \nТелефон: $phone \nПочта: $email \nКомментарий $comment";

$pagetitle = "Заявка на консультацию с сайта Студия Мебели \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");