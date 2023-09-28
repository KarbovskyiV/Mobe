<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginUserRequest;
use App\Http\Requests\RegisterUserRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    /**
     * @OA\Post(
     *      path="/api/register",
     *      operationId="registerUser",
     *      tags={"Authentication"},
     *      summary="Register a new user",
     *      description="Registers a new user and returns user data",
     *      @OA\RequestBody(
     *          required=true,
     *          @OA\JsonContent(
     *              @OA\Property(property="name", type="string", example="John Doe"),
     *              @OA\Property(property="email", type="string", format="email", example="johndoe@example.com"),
     *              @OA\Property(property="password", type="string", format="password", example="secret123"),
     *          )
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="User successfully created",
     *          @OA\JsonContent(
     *              @OA\Property(property="message", type="string", example="User successfully created"),
     *              @OA\Property(property="data", type="object"),
     *          ),
     *      ),
     *      @OA\Response(
     *          response=422,
     *          description="Validation error",
     *          @OA\JsonContent(
     *              @OA\Property(property="message", type="string", example="The given data was invalid."),
     *              @OA\Property(property="errors", type="object"),
     *          ),
     *      ),
     * )
     */
    public function register(RegisterUserRequest $request): JsonResponse
    {
        $validated = $request->validated();

        $data = User::query()->create($validated);

        return response()->json([
            'message' => 'User successfully created',
            'data' => $data,
        ]);
    }

    /**
     * @OA\Post(
     *     path="/api/login",
     *     operationId="loginUser",
     *     tags={"Authentication"},
     *     summary="Authenticate a user",
     *     description="Authenticate a user and return an authorization token if successful",
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             @OA\Property(property="email", type="string", format="email", example="johndoe@example.com"),
     *             @OA\Property(property="password", type="string", format="password", example="secret123"),
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Login successful",
     *         @OA\JsonContent(
     *             @OA\Property(property="user", type="object"),
     *             @OA\Property(property="authorization", type="object",
     *                 @OA\Property(property="token", type="string", example="your_access_token"),
     *                 @OA\Property(property="type", type="string", example="bearer"),
     *             ),
     *         ),
     *     ),
     *     @OA\Response(
     *         response=401,
     *         description="Invalid credentials",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Invalid credentials"),
     *         ),
     *     ),
     * )
     */
    public function login(LoginUserRequest $request): JsonResponse
    {
        $request->validated();

        $credentials = $request->only('email', 'password');
        if (Auth::attempt($credentials, $request->has('remember'))) {
            $user = Auth::user();

            if ($user) {
                return response()->json([
                    'user' => $user,
                    'authorization' => [
                        'token' => $user->createToken('ApiToken')->plainTextToken,
                        'type' => 'bearer',
                    ]
                ]);
            }
        }

        return response()->json([
            'message' => 'Invalid credentials',
        ], 401);
    }

    /**
     * @OA\Post(
     *     path="/api/logout",
     *     operationId="logoutUser",
     *     tags={"Authentication"},
     *     summary="Logout the currently authenticated user",
     *     description="Logout the currently authenticated user and revoke their access tokens",
     *     security={{ "bearerAuth":{} }},
     *     @OA\Response(
     *         response=200,
     *         description="Logout successful",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Successfully logged out"),
     *         ),
     *     ),
     *     @OA\Response(
     *         response=401,
     *         description="Unauthenticated",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Unauthenticated"),
     *         ),
     *     ),
     * )
     */
    public function logout(): JsonResponse
    {
        $user = Auth::user();

        if ($user) {
            $user->tokens()->delete();
            return response()->json([
                'message' => 'Successfully logged out',
            ]);
        }

        return response()->json([
            'message' => 'Unauthenticated',
        ], 401);
    }
}
