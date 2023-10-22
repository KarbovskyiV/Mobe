<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginUserRequest;
use App\Http\Requests\RegisterUserRequest;
use App\Models\User;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

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
        if (Auth::attempt($credentials, $request->input('rememberMe', false))) {
            /** @var User $user */
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
        /** @var User $user */
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

    /**
     * @OA\Get(
     *     path="/api/link/gmail",
     *     operationId="linkWithGoogle",
     *     tags={"Authentication"},
     *     summary="Generate a Google OAuth link",
     *     description="Generates a Google OAuth link for linking your account.",
     *     @OA\Response(
     *         response=200,
     *         description="Success",
     *         @OA\JsonContent(
     *             @OA\Property(property="link", type="string", description="Google OAuth link"),
     *         ),
     *     ),
     * )
     */
    public function link(): string
    {
        $parameters = [
            'redirect_uri' => config('oauth.google.redirect_uri'),
            'response_type' => 'code',
            'client_id' => config('oauth.google.client_it'),
            'scope' => implode(' ', config('oauth.google.scopes')),
        ];

        return config('oauth.google.auth_api') . '?' . http_build_query($parameters);
    }

    /**
     * @throws GuzzleException
     * @throws \JsonException
     */
    public function authenticateWithGoogle(Client $client): RedirectResponse
    {
        $parameters = [
            'client_id' => config('oauth.google.client_it'),
            'client_secret' => config('oauth.google.client_secret'),
            'redirect_uri' => config('oauth.google.redirect_uri'),
            'grant_type' => 'authorization_code',
            'code' => $_GET['code'],
        ];

        $request = $client->post(config('oauth.google.token_api'), ['form_params' => $parameters]);

        $response = json_decode($request->getBody()->getContents(), true, 512, JSON_THROW_ON_ERROR);

        $token = $response['access_token'];

        $userResponse = $client->get(config('oauth.google.user_info_uri'), [
            'headers' => [
                'Authorization' => 'Bearer ' . $token
            ]
        ]);

        $data = json_decode($userResponse->getBody()->getContents(), true, 512, JSON_THROW_ON_ERROR);

        $user = User::query()->where('email', $data['email'])->first();

        if ($user === null) {
            $user = User::query()->create([
                'name' => $data['given_name'],
                'surname' => $data['family_name'] ?: null,
                'email' => $data['email'],
                'password' => 'password',
            ]);
        }

        // @todo what to do with pass next?

        Auth::login($user);

        return back();
    }
}
