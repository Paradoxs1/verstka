<?php

$recepient = "dimasherstuyk@gmail.com";
$sitename = "Студия Мебели заявка на консультацию";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$message = "Имя: $name \nТелефон: $phone";

$pagetitle = "Заявка на консультацию с сайта Студия Мебели \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");