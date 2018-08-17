<?php

$recepient = "dimasherstuyk@gmail.com";
$sitename = "Студия Мебели заявка на консультацию (модальное окно)";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$comment = trim($_POST["comment"]);
$message = "Имя: $name \nТелефон: $phone \nСообщение: $comment";

$pagetitle = "Заявка на консультацию с сайта Студия Мебели \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");