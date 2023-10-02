<?php

namespace App\Http\Controllers;

use App\Http\Requests\ResetPasswordRequest;
use App\Mail\ResetPasswordEmail;
use App\Models\User;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;

class PasswordController extends Controller
{
    /**
     * @OA\Post(
     *     path="/forgot-password",
     *     operationId="sendResetLinkEmail",
     *     tags={"Password"},
     *     summary="Send a password reset email",
     *     description="Sends a password reset email to the user's registered email address.",
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"email"},
     *             @OA\Property(property="email", type="string", format="email", example="johndoe@example.com", description="User's email address")
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Password reset email sent successfully",
     *         @OA\JsonContent(
     *             @OA\Property(property="msg", type="string", example="If you've provided a registered e-mail, you should get a recovery e-mail shortly."),
     *             @OA\Property(property="token", type="string", example="string")
     *         )
     *     ),
     *     @OA\Response(
     *         response=422,
     *         description="Validation error",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="The given data was invalid."),
     *             @OA\Property(property="errors", type="object", example={"email":"The email field is required."})
     *         )
     *     )
     * )
     */
    public function sendResetLinkEmail(Request $request): JsonResponse
    {
        $request->validate(['email' => ['required', 'email', 'exists:users,email']]);

        $email = $request->input('email');

        $token = Password::createToken(User::where('email', $email)->first());

        $resetLink = env('APP_URL') . '/reset-password?token=' . $token;

        Mail::to($email)->send(new ResetPasswordEmail($resetLink));

        return response()->json([
            'msg' => "If you've provided registered e-mail, you should get recovery e-mail shortly.",
            'token' => $token,
        ]);
    }

    /**
     * @OA\Post(
     *     path="/reset-password",
     *     operationId="resetPassword",
     *     tags={"Password"},
     *     summary="Reset the user's password",
     *     description="Resets the user's password with a valid token.",
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"email", "password", "password_confirmation", "token"},
     *             @OA\Property(property="email", type="string", format="email", example="johndoe@example.com", description="User's email address"),
     *             @OA\Property(property="password", type="string", format="password", description="New password"),
     *             @OA\Property(property="password_confirmation", type="string", format="password", description="Password confirmation"),
     *             @OA\Property(property="token", type="string", description="Reset token received in the email")
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="New password set successfully",
     *         @OA\JsonContent(
     *             @OA\Property(property="msg", type="string", example="New password successfully set")
     *         )
     *     ),
     *     @OA\Response(
     *         response=422,
     *         description="Validation error",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="The given data was invalid."),
     *             @OA\Property(property="errors", type="object", example={"email":"The email field is required."})
     *         )
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="Internal server error",
     *         @OA\JsonContent(
     *             @OA\Property(property="msg", type="string", example="An internal server error occurred.")
     *         )
     *     )
     * )
     */
    public function resetPassword(ResetPasswordRequest $request)
    {
        $request->validated();

        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function (User $user, string $password) {
                $user->forceFill([
                    'password' => Hash::make($password)
                ])->setRememberToken(Str::random(60));

                $user->save();

                event(new PasswordReset($user));
            }
        );

        if ($status == Password::PASSWORD_RESET) {
            return response([
                'msg' => 'New password successfully set',
            ]);
        }

        return response([
            'msg' => $status
        ], 500);
    }
}
