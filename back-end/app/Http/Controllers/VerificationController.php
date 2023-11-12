<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;

class VerificationController extends Controller
{
    public function verify($id)
    {
        $user = User::find($id);
        $token = $user->createToken('email-verification', ['expires_in' => 5])->plainTextToken;

        if ($user->hasVerifiedEmail()) {
            return redirect('http://localhost:3000/')->with(['message' => 'Email already verified.', 'user' => $user,
                'token' => $token,], 400);
        }

        /** @var User $user */
        $user->markEmailAsVerified();

        $token = $user->createToken('email-verification', ['expires_in' => 5])->plainTextToken;

        Auth::login($user);

        // force login if token true on frontend

        return redirect('http://localhost:3000/')->with([
            'message' => 'Email successfully verified.',
            'user' => $user,
            'token' => $token,
        ]);
    }
}
