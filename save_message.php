<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = htmlspecialchars($_POST['email']);
    $pseudo = htmlspecialchars($_POST['pseudo']);
    $message = htmlspecialchars($_POST['message']);
    $data = "[".date('Y-m-d H:i:s')."] $pseudo <$email>: $message\n";
    file_put_contents(__DIR__.'/message.txt', $data, FILE_APPEND);
    echo "Message enregistré";
}
?>
