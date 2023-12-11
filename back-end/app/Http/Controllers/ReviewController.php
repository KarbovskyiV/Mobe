<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Review;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

/**
 * @OA\Post(
 *     path="/api/products/{product}/reviews",
 *     operationId="storeProductReview",
 *     tags={"Reviews"},
 *     summary="Create a new review for a product",
 *     description="Create a new review for the specified product.",
 *     security={{ "bearerAuth":{} }},
 *     @OA\Parameter(
 *         name="product",
 *         in="path",
 *         required=true,
 *         description="ID of the product for which the review is being added",
 *         @OA\Schema(type="integer")
 *     ),
 *     @OA\RequestBody(
 *         required=true,
 *         description="Review details",
 *         @OA\JsonContent(
 *             required={"content"},
 *             @OA\Property(property="rate", type="integer", nullable=true),
 *             @OA\Property(property="content", type="string"),
 *             @OA\Property(property="advantages", type="string", nullable=true),
 *             @OA\Property(property="disadvantages", type="string", nullable=true),
 *         )
 *     ),
 *     @OA\Response(
 *         response=200,
 *         description="Review added successfully",
 *         @OA\JsonContent(
 *              @OA\Property(property="data", type="array", @OA\Items(
 *                 @OA\Property(property="user_id", type="integer"),
 *                 @OA\Property(property="product_id", type="integer"),
 *                 @OA\Property(property="rate", type="integer", nullable=true),
 *                 @OA\Property(property="content", type="string"),
 *                 @OA\Property(property="advantages", type="string", nullable=true),
 *                 @OA\Property(property="disadvantages", type="string", nullable=true),
 *                 @OA\Property(property="updated_at", type="string", format="date-time"),
 *                 @OA\Property(property="created_at", type="string", format="date-time"),
 *                 @OA\Property(property="id", type="integer"),
 *             ))
 *         )
 *     ),
 *     @OA\Response(
 *         response=401,
 *         description="Unauthorized",
 *         @OA\JsonContent(
 *             @OA\Property(property="message", type="string")
 *         )
 *     ),
 *     @OA\Response(
 *         response=404,
 *         description="Product not found",
 *         @OA\JsonContent(
 *             @OA\Property(property="error", type="string")
 *         )
 *     )
 * )
 */
class ReviewController extends Controller
{
    public function store(Request $request, Product $product)
    {
        $user = Auth::user();

        if (!$user) {
            return response()->json('Only authorized user can send review', 401);
        }
        $data = Review::query()->create([
            'user_id' => $user->id,
            'product_id' => $product->id,
            'rate' => $request->input('rate'),
            'content' => $request->input('content'),
            'advantages' => $request->input('advantages'),
            'disadvantages' => $request->input('disadvantages'),
        ]);

        return response()->json([
            'message' => "Review from $user->name on $product->name added!",
            'data' => $data
        ], 201);
    }
}
