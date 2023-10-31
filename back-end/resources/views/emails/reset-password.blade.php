<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet">
    <title>Password Reset</title>
</head>
<body>

<div class="container">
    <div class="header">
        <img src="{{ asset('images/logo_mobe.svg') }}" alt="Logo" class="logo">
        <h2 class="title">Password Reset</h2>
    </div>
    <div class="password-description">
        <p>You've requested to reset your password. Click the button below to reset it:</p>
    </div>
    <div class="button-container">
        <a href="{{ $resetLink }}" class="reset-button">Reset Password</a>
    </div>
    <div class="disclaimer">
        <p>If you didn't request this, please ignore this email.</p>
    </div>
    <div class="signature">
        <p>Regards,<br>Your Mobe Team</p>
    </div>
</div>

</body>
</html>
