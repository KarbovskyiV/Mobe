<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Auth;

class VerificationController extends Controller
{
    public function verify($id)
    {
        /** @var User $user */
        $user = User::find($id);

        // TODO: refactor return
        if ($user->hasVerifiedEmail()) {
            return redirect(config('app.frontend_url'))->with([
                'message' => 'Email already verified.',
                'email_verified_at' => $user->email_verified_at,
            ]);
        }

        $user->markEmailAsVerified();
        Auth::login($user);

        return redirect(config('app.frontend_url') . '/login');
    }
}
