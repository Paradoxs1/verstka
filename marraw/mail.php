<?php

$recepient = "dimasherstuyk@gmail.com";
$sitename = "MARROW заказать товар";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$message = "Имя: $name \nТелефон: $phone";

$pagetitle = "Заказать товар с сайта MARROW\"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");