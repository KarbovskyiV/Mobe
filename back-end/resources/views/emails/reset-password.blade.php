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
    <style>
        body {
            font-family: "Inter", sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }

        p {
            font-weight: 400;
            font-size: 16px;
            margin: 0;
        }

        .container {
            width: 600px;
            height: 688px;
            margin: 0 auto;
            background-color: #ffffff;
        }

        .header {
            text-align: center;
        }

        .logo {
            margin-top: 100px;
        }

        .title {
            font-family: 'Inter', sans-serif;
            font-weight: 500;
            color: #28003e;
            font-size: 32px;
            margin: 60px 0 0 0;
        }

        .password-description {
            margin: 40px 40px 0 40px;
        }

        .button-container {
            text-align: center;
            margin-top: 60px;
        }

        .reset-button {
            font-weight: 400;
            background-color: #8732C9;
            width: 170px;
            height: 44px;
            text-decoration: none;
            padding: 12px 24px;
            border-radius: 3px;
            font-size: 16px;
            margin-top: 60px;
        }

        .disclaimer {
            margin: 60px 40px 0 40px;
        }

        .signature {
            margin: 40px 40px 0 40px;
        }

        @media (max-width: 375px) {
            p {
                font-size: 14px;
            }

            .container {
                width: 280px;
            }

            .title {
                font-size: 24px;
            }

            .password-description {
                margin: 40px 20px 0 20px;
            }

            .button-container {
                margin-top: 40px;
            }

            .disclaimer {
                margin: 40px 20px 0 20px;
            }

            .signature {
                margin: 40px 20px 0 20px;
            }
        }


    </style>

</head>
<body>

<div class="container">
    <div class="header">
        <img src="https://i.imgur.com/FTolg3p.png" alt="Logo" class="logo">
        <h2 class="title">Password Reset</h2>
    </div>
    <div class="password-description">
        <p>You've requested to reset your password. Click the button below to reset it:</p>
    </div>
    <div class="button-container">
        <a href="{{ $resetLink }}" class="reset-button" style="color: #FDFDFD">Reset Password</a>
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
