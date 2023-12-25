<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "your_email@example.com";
    $subject = "New Form Submission";
    $full_name = $_POST['full_name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = "Full Name: $full_name\nEmail: $email\nPhone: $phone";

    // Send email
    mail($to, $subject, $message);

    // Redirect to thank you page after sending the email
    header('Location: thank_you.html');
    exit;
}
?>