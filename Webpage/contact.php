<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $phone = htmlspecialchars($_POST["phone"]);
    $country = htmlspecialchars($_POST["country"]);
    $message = htmlspecialchars($_POST["message"]);

    // Captcha Validation
    session_start();
    if (!isset($_SESSION["captcha_code"]) || $_POST["captcha"] !== $_SESSION["captcha_code"]) {
        echo "<script>alert('Invalid Captcha. Please try again.'); window.history.back();</script>";
        exit();
    }

    $to = "dineshmapsystems14@gmail.com"; // Change this to your desired email
    $subject = "New Contact Form Submission from $name";
    $body = "Name: $name\nEmail: $email\nPhone: $phone\nCountry: $country\nMessage:\n$message";
    $headers = "From: $email\r\nReply-To: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Message sent successfully!'); window.location.href='index.html';</script>";
    } else {
        echo "<script>alert('Failed to send message. Please try again.'); window.history.back();</script>";
    }
}
?>
