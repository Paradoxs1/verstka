<?php 
if($_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest')
{
sleep(2); // для теста на локальном компе
echo "Ваша оценка: ".$_GET["user_votes"]." за статью №".$_GET["id_arc"];
}
?>