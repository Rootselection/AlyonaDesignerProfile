<?php
$email = $_POST['email'];
$email = htmlspecialchars($email);
$email = urldecode($email);
$email = trim($email);
//echo $fio;
//echo "<br>";
//echo $email;
if (mail("kotanovtich@gmail.com", "Заявка с сайта",". E-mail: ".$email ,"From: kotanovtich@gmail.com \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}?>