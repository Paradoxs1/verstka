<?php

$recepient = "dimasherstuyk@gmail.com";
$sitename = "ИНФОРМАЦИОННЫЙ ПОРТАЛ О ХОБЛ заявка на консультацию";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$message = "Имя: $name \nТелефон: $phone";

$pagetitle = "Заявка на консультацию с сайта ИНФОРМАЦИОННЫЙ ПОРТАЛ О ХОБЛ\"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");