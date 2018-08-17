<?php
$pac_size = isset($_POST['pac_size'])?$_POST['pac_size']:'';
$pac_type = isset($_POST['pac_type'])?$_POST['pac_type']:'';
$pac_type_color = isset($_POST['pac_type_color'])?$_POST['pac_type_color']:'';
$print_type = isset($_POST['print_type'])?$_POST['print_type']:'';
$handle_type = isset($_POST['handle_type'])?$_POST['handle_type']:'';
$handle_type_number = isset($_POST['handle_type_number'])?$_POST['handle_type_number']:'';
$luvers = isset($_POST['luvers'])?$_POST['luvers']:'';
$lamination_type = isset($_POST['lamination_type'])?$_POST['lamination_type']:'';
$assembly_type = isset($_POST['assembly_type'])?$_POST['assembly_type']:'';
$packaging_type = isset($_POST['packaging_type'])?$_POST['packaging_type']:'';
$order_num = isset($_POST['order_num'])?$_POST['order_num']:'';
$organization_name = isset($_POST['organization_name'])?$_POST['organization_name']:'';
$email = isset($_POST['email'])?$_POST['email']:'';
$phone = isset($_POST['phone'])?$_POST['phone']:'';
$message = isset($_POST['message'])?$_POST['message']:'';
$order_summ = isset($_POST['order_summ'])?$_POST['order_summ']:'';
$order_kolv = isset($_POST['order_kolv'])?$_POST['order_kolv']:'';


$address = 'stanislav.ever@gmail.com';
$from = 'No-reply@site.ru';
$sub = "Заказ на пакеты";
$mes = "Номер заказа: $order_num \nАвтор назвался\Указал организацию: $organization_name \nУказал телефон: $phone \nE-mail: $email \nДобавил сообщение: $message \nВыбрал размер пакета: $pac_size  \nТип пакета: $pac_type \nЦвет: $pac_type_color  \nТип печати: $print_type \nТип ручки: $handle_type \nНомер ручки: $handle_type_number \nЛюверс: $luvers  \nТип ламинации: $lamination_type \nСборка: $assembly_type  \nТип упаковки: $packaging_type  \nСумма заказа: $order_summ\nКоличество выбранных конфигураций: $order_kolv";
$backurl="/";  // На какую страничку переходит после отправки письма 
$verify = mail ($address,$sub,$mes,"Content-type:text/plain; charset=UTF-8\r\nFrom:$from");
?>