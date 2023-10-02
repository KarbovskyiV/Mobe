<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Reset</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0;">
<table role="presentation" cellspacing="0" cellpadding="0" width="100%"
       style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 20px;">
    <tr>
        <td style="text-align: center; padding: 10px 0;">
            <h2 style="color: #333;">Password Reset</h2>
        </td>
    </tr>
    <tr>
        <td style="padding: 20px 0;">
            <p style="font-size: 16px; line-height: 1.6; color: #333;">
                You've requested to reset your password. Click the button below to reset it:
            </p>
        </td>
    </tr>
    <tr>
        <td style="text-align: center; padding: 20px 0;">
            <a href="{{ $resetLink }}"
               style="display: inline-block; background-color: #007BFF; color: #fff; text-decoration: none; padding: 10px 20px; border-radius: 5px; font-weight: bold; font-size: 16px;">Reset
                Password</a>
        </td>
    </tr>
    <tr>
        <td style="padding: 20px 0;">
            <p style="font-size: 16px; line-height: 1.6; color: #333;">
                If you didn't request this, please ignore this email.
            </p>
        </td>
    </tr>
    <tr>
        <td style="padding: 20px 0;">
            <p style="font-size: 16px; line-height: 1.6; color: #333;">
                Regards,<br>
                Your Mobe Team
            </p>
        </td>
    </tr>
</table>
</body>
</html>
