<?php

$recepient = "dimasherstuyk@gmail.com";
$sitename = "MARROW свяжитесь с нами";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$comment = trim($_POST["comment"]);
$message = "Имя: $name \nТелефон: $phone \nСообщение: $comment";

$pagetitle = "Свяжитесь с нами MARROW\"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");