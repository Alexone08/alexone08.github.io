<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = json_decode(file_get_contents("php://input"));

    $to = $data->to;
    $subject = $data->subject;
    $message = $data->message;

    $headers = "From: webmaster@example.com\r\n";
    $headers .= "Reply-To: webmaster@example.com\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    $success = mail($to, $subject, $message, $headers);

    echo json_encode(["success" => $success]);
} else {
    echo json_encode(["success" => false]);
}