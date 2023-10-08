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
     *             @OA\Property(property="email", type="string", format="email")
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Success",
     *         @OA\JsonContent(
     *             required={"message", "token"},
     *             @OA\Property(property="message", type="string"),
     *             @OA\Property(property="token", type="string")
     *         )
     *     ),
     *     @OA\Response(
     *         response=422,
     *         description="Validation error",
     *         @OA\JsonContent(
     *             required={"message"},
     *             @OA\Property(property="message", type="string"),
     *             @OA\Property(property="errors", type="object",
     *                   @OA\Property(property="field_name", type="array",
     *                       @OA\Items(type="string")
     *                   ),
     *               ),
     *         )
     *     )
     * )
     */
    public function sendResetLinkEmail(Request $request): JsonResponse
    {
        $request->validate(['email' => ['required', 'email', 'exists:users,email']]);

        $email = $request->input('email');

        $token = Password::createToken(User::where('email', $email)->first());

        $resetLink = config('app.url') . '/reset-password?token=' . $token;

        Mail::to($email)->send(new ResetPasswordEmail($resetLink));

        return response()->json([
            'message' => "If you've provided registered e-mail, you should get recovery e-mail shortly.",
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
     *             @OA\Property(property="email", type="string", format="email"),
     *             @OA\Property(property="password", type="string", format="password"),
     *             @OA\Property(property="password_confirmation", type="string", format="password"),
     *             @OA\Property(property="token", type="string")
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Success",
     *         @OA\JsonContent(
     *             required={"message"},
     *             @OA\Property(property="message", type="string")
     *         )
     *     ),
     *     @OA\Response(
     *         response=422,
     *         description="Validation error",
     *         @OA\JsonContent(
     *             required={"message"},
     *             @OA\Property(property="message", type="string"),
     *             @OA\Property(property="errors", type="object",
     *             @OA\Property(property="field_name", type="array",
     *                 @OA\Items(type="string")
     *                 ),
     *             ),
     *         )
     *     ),
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
                'message' => 'New password successfully set',
            ]);
        }

        return response([
            'message' => $status
        ], 422);
    }
}
