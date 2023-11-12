<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Auth;

class VerificationController extends Controller
{
    public function verify($id)
    {
        $user = User::find($id);

        if ($user->hasVerifiedEmail()) {
            return redirect('http://localhost:3000/')->with([
                'message' => 'Email already verified.',
                'verification' => false,
                'email' => $user->email,
            ], 400);
        }

        /** @var User $user */
        $user->markEmailAsVerified();

        Auth::login($user);

// redirect('http://localhost:3000/')
        return response()->json([
            'message' => 'Email successfully verified.',
            'verification' => true,
            'email' => $user->email,
        ]);
        // return verification true of false
    }
}
