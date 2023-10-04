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
     *              required={"name", "email", "password"},
     *              @OA\Property(property="name", type="string"),
     *              @OA\Property(property="surname", type="string"),
     *              @OA\Property(property="email", type="string", format="email"),
     *              @OA\Property(property="phone", type="string", format=""),
     *              @OA\Property(property="password", type="string", format="password"),
     *          )
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Success",
     *          @OA\JsonContent(
     *              required={"message"},
     *              @OA\Property(property="message", type="string"),
     *              @OA\Property(property="data", type="object",
     *                  @OA\Property(property="name", type="string"),
     *                  @OA\Property(property="surname", type="string"),
     *                  @OA\Property(property="email", type="string"),
     *                  @OA\Property(property="phone", type="string"),
     *                  @OA\Property(property="created_at", type="string", format="date-time"),
     *                  @OA\Property(property="updated_at", type="string", format="date-time"),
     *                  @OA\Property(property="id", type="integer"),
     *              ),
     *          ),
     *      ),
     *      @OA\Response(
     *          response=422,
     *          description="Validation error",
     *          @OA\JsonContent(
     *              required={"message"},
     *              @OA\Property(property="message", type="string"),
     *              @OA\Property(property="errors", type="object",
     *                  @OA\Property(property="field_name", type="array",
     *                      @OA\Items(type="string")
     *                  ),
     *              ),
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
     *             required={"email", "password"},
     *             @OA\Property(property="email", type="string", format="email"),
     *             @OA\Property(property="password", type="string", format="password"),
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Success",
     *         @OA\JsonContent(
     *             @OA\Property(property="user", type="object",
     *                 required={"id", "name", "email", "created_at", "updated_at"},
     *                 @OA\Property(property="id", type="integer"),
     *                 @OA\Property(property="name", type="string"),
     *                 @OA\Property(property="email", type="string"),
     *                 @OA\Property(property="email_verified_at", type="string", format="date-time"),
     *                 @OA\Property(property="created_at", type="string", format="date-time"),
     *                 @OA\Property(property="updated_at", type="string", format="date-time"),
     *             ),
     *             @OA\Property(property="authorization", type="object",
     *                 required={"token", "type"},
     *                 @OA\Property(property="token", type="string"),
     *                 @OA\Property(property="type", type="string"),
     *             ),
     *         ),
     *     ),
     *     @OA\Response(
     *         response=401,
     *         description="Unauthorized",
     *         @OA\JsonContent(
     *             required={"message"},
     *             @OA\Property(property="message", type="string"),
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
     *         description="Success",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string"),
     *         ),
     *     ),
     *     @OA\Response(
     *         response=401,
     *         description="Unauthorized",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string"),
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
