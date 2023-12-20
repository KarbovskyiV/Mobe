<?php

namespace App\Http\Controllers;

use App\Models\Likeable;
use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class LikeableController extends Controller
{
    /**
     * @OA\Post(
     *     path="/api/{product}/like",
     *     operationId="likeProduct",
     *     tags={"Likeable"},
     *     summary="Like a product",
     *     description="Add a like to the specified product.",
     *     security={{ "bearerAuth":{} }},
     *     @OA\Parameter(
     *         name="product",
     *         in="path",
     *         required=true,
     *         description="ID of the product to like",
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Successful operation",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string")
     *         )
     *     ),
     *     @OA\Response(
     *         response=401,
     *         description="Unauthorized",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string")
     *         )
     *     ),
     * )
     */
    public function like(Product $product): JsonResponse
    {
        $user = Auth::user();

        if (!$user) {
            return response()->json('Only authorized user can add like', 401);
        }

        Likeable::query()->updateOrCreate([
            'user_id' => $user->id,
            'product_id' => $product->id,
        ], [
            'is_liked' => true,
        ]);

        return response()->json(['message' => 'Thanks for like!']);
    }

    /**
     * @OA\Post(
     *     path="/api/{product}/dislike",
     *     operationId="dislikeProduct",
     *     tags={"Likeable"},
     *     summary="Dislike a product",
     *     description="Add a dislike to the specified product.",
     *     security={{ "bearerAuth":{} }},
     *     @OA\Parameter(
     *         name="product",
     *         in="path",
     *         required=true,
     *         description="ID of the product to dislike",
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Successful operation",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string")
     *         )
     *     ),
     *     @OA\Response(
     *         response=401,
     *         description="Unauthorized",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string")
     *         )
     *     ),
     * )
     */
    public function dislike(Product $product): JsonResponse
    {
        $user = Auth::user();

        if (!$user) {
            return response()->json('Only authorized user can add dislike', 401);
        }

        Likeable::query()->updateOrCreate([
            'user_id' => $user->id,
            'product_id' => $product->id,
        ], [
            'is_liked' => false,
        ]);

        return response()->json(['message' => 'Thanks for dislike!']);
    }

    /**
     * @OA\Get(
     *     path="/api/{product}/likeCount",
     *     operationId="getLikeCount",
     *     tags={"Likeable"},
     *     summary="Get the like count for a product",
     *     description="Retrieve the count of likes for the specified product.",
     *     @OA\Parameter(
     *         name="product",
     *         in="path",
     *         required=true,
     *         description="ID of the product to get the like count",
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Successful operation",
     *         @OA\JsonContent(
     *             @OA\Property(property="count", type="integer", description="The number of likes for the product")
     *         )
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Product not found",
     *         @OA\JsonContent(
     *             @OA\Property(property="error", type="string", description="Product not found")
     *         )
     *     ),
     * )
     */
    public function likeCount(Product $product): int
    {
        return Likeable::query()
            ->where('product_id', $product->id)
            ->where('is_liked', '=', 1)
            ->count('is_liked');
    }

    /**
     * @OA\Get(
     *     path="/api/{product}/dislikeCount",
     *     operationId="getDislikeCount",
     *     tags={"Likeable"},
     *     summary="Get the dislike count for a product",
     *     description="Retrieve the count of dislikes for the specified product.",
     *     @OA\Parameter(
     *         name="product",
     *         in="path",
     *         required=true,
     *         description="ID of the product to get the dislike count",
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Successful operation",
     *         @OA\JsonContent(
     *             @OA\Property(property="count", type="integer", description="The number of dislikes for the product")
     *         )
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Product not found",
     *         @OA\JsonContent(
     *             @OA\Property(property="error", type="string", description="Product not found")
     *         )
     *     ),
     * )
     */
    public function dislikeCount(Product $product): int
    {
        return Likeable::query()
            ->where('product_id', $product->id)
            ->where('is_liked', '=', 0)
            ->count('is_liked');
    }
}