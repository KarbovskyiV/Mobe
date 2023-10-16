<?php

return [
    'google' => [
        'client_it' => env('OAUTH_GOOGLE_CLIENT_ID'),
        'client_secret' => env('OAUTH_GOOGLE_CLIENT_SECRET'),
        'redirect_uri' => env('OAUTH_GOOGLE_REDIRECT_URI'),
        'scopes' => [
            'https://www.googleapis.com/auth/userinfo.email', // доступ до адреси електронної пошти
            'https://www.googleapis.com/auth/userinfo.profile', // доступ до інформації профілю
        ],
        'auth_api' => 'https://accounts.google.com/o/oauth2/auth', // Посилання на аутентифікацію
        'token_api' => 'https://accounts.google.com/o/oauth2/token', // Посилання на отримання токена
        'user_info_uri' => 'https://www.googleapis.com/oauth2/v1/userinfo', // Посилання на отримання інформації про користувача
    ]
];

