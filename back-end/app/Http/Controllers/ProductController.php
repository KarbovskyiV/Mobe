<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    /**
     * @OA\Get(
     *     path="/api/products",
     *     summary="Get a list of products with pagination and category information",
     *     tags={"Products"},
     *     @OA\Response(
     *         response=200,
     *         description="List of products with pagination and category information",
     *         @OA\JsonContent(
     *             type="object",
     *             @OA\Property(
     *                 property="current_page",
     *                 type="integer",
     *                 example=1,
     *                 description="Current page number"
     *             ),
     *             @OA\Property(
     *                 property="data",
     *                 type="array",
     *                 @OA\Items(
     *                     type="object",
     *                     @OA\Property(property="id", type="integer", example=1),
     *                     @OA\Property(property="name", type="string", example="iPhone 13"),
     *                     @OA\Property(property="created_at", type="string", format="date-time", example="2023-09-19T17:45:46.000000Z"),
     *                     @OA\Property(property="updated_at", type="string", format="date-time", example="2023-09-19T17:45:47.000000Z"),
     *                     @OA\Property(
     *                         property="category",
     *                         type="object",
     *                         @OA\Property(property="id", type="integer", example=1),
     *                         @OA\Property(property="name", type="string", example="Смартфони Apple"),
     *                         @OA\Property(property="created_at", type="string", format="date-time", example="2023-09-19T17:44:33.000000Z"),
     *                         @OA\Property(property="updated_at", type="string", format="date-time", example="2023-09-19T17:44:34.000000Z"),
     *                     ),
     *                 ),
     *                 description="List of products"
     *             ),
     *             @OA\Property(
     *                 property="first_page_url",
     *                 type="string",
     *                 example="http://mobe.local/api/products?page=1",
     *                 description="URL of the first page"
     *             ),
     *             @OA\Property(
     *                 property="from",
     *                 type="integer",
     *                 example=1,
     *                 description="Starting record number"
     *             ),
     *             @OA\Property(
     *                 property="last_page",
     *                 type="integer",
     *                 example=1,
     *                 description="Last page number"
     *             ),
     *             @OA\Property(
     *                 property="last_page_url",
     *                 type="string",
     *                 example="http://mobe.local/api/products?page=1",
     *                 description="URL of the last page"
     *             ),
     *             @OA\Property(
     *                 property="links",
     *                 type="array",
     *                 @OA\Items(
     *                     type="object",
     *                     @OA\Property(property="url", type="string", example=null),
     *                     @OA\Property(property="label", type="string", example="&laquo; Previous"),
     *                     @OA\Property(property="active", type="boolean", example=false),
     *                 ),
     *                 description="Pagination links"
     *             ),
     *             @OA\Property(
     *                 property="next_page_url",
     *                 type="string",
     *                 example=null,
     *                 description="URL of the next page"
     *             ),
     *             @OA\Property(
     *                 property="path",
     *                 type="string",
     *                 example="http://mobe.local/api/products",
     *                 description="Base path of the URL"
     *             ),
     *             @OA\Property(
     *                 property="per_page",
     *                 type="integer",
     *                 example=15,
     *                 description="Number of records per page"
     *             ),
     *             @OA\Property(
     *                 property="prev_page_url",
     *                 type="string",
     *                 example=null,
     *                 description="URL of the previous page"
     *             ),
     *             @OA\Property(
     *                 property="to",
     *                 type="integer",
     *                 example=3,
     *                 description="Ending record number"
     *             ),
     *             @OA\Property(
     *                 property="total",
     *                 type="integer",
     *                 example=3,
     *                 description="Total number of records"
     *             ),
     *         ),
     *     ),
     * )
     */
    public function index(): JsonResponse
    {
        $products = Product::with('category')->paginate();

        return response()->json($products);
    }

    /**
     * @OA\Get(
     *     path="/api/products/{product}",
     *     operationId="showProduct",
     *     tags={"Products"},
     *     summary="Show product details with category",
     *     description="Retrieve details of a product along with its associated category",
     *     @OA\Parameter(
     *         name="product",
     *         in="path",
     *         description="Product ID",
     *         required=true,
     *         @OA\Schema(type="integer"),
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Product details with category",
     *         @OA\JsonContent(
     *             @OA\Property(property="id", type="integer"),
     *             @OA\Property(property="name", type="string"),
     *             @OA\Property(property="created_at", type="string", format="date-time"),
     *             @OA\Property(property="updated_at", type="string", format="date-time"),
     *             @OA\Property(property="category_id", type="integer"),
     *             @OA\Property(
     *                 property="category",
     *                 type="object",
     *                 @OA\Property(property="id", type="integer"),
     *                 @OA\Property(property="name", type="string"),
     *                 @OA\Property(property="created_at", type="string", format="date-time"),
     *                 @OA\Property(property="updated_at", type="string", format="date-time"),
     *             ),
     *         ),
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Product not found",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Product not found"),
     *         ),
     *     ),
     * )
     */
    public function show(Product $product): JsonResponse
    {
        $product->load('category');

        return response()->json($product);
    }

    /**
     * @OA\Get(
     *     path="/api/products/{product}/add-to-favourites",
     *     operationId="addToFavourites",
     *     tags={"Favourite"},
     *     summary="Add a product to favourites",
     *     description="Adds a product to the user's list of favourite products.",
     *     security={{ "bearerAuth":{} }},
     *     @OA\Parameter(
     *         name="product",
     *         in="path",
     *         required=true,
     *         description="Product ID",
     *         @OA\Schema(type="integer"),
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Success",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string"),
     *         ),
     *     ),
     *     @OA\Response(
     *         response=409,
     *         description="Conflict",
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
    public function addToFavourites(Product $product): JsonResponse
    {
        // Get authorized user
        $user = Auth::user();

        if (DB::table('product_user')
            ->where('user_id', $user->id)
            ->where('product_id', $product->id)
            ->exists()) {
            return response()->json([
                'message' => 'Product is already in favourites'
            ], 409);
        }

        /** @var User $user */
        $user->favouriteProducts()->attach($product->id);

        return response()->json([
            'message' => 'Product added to favourites'
        ]);
    }

    /**
     * @OA\Post(
     *     path="/api/products/{product}/remove-from-favourites",
     *     operationId="removeFromFavourites",
     *     tags={"Favourite"},
     *     summary="Remove a product from favourites",
     *     description="Remove a product from the user's list of favourite products.",
     *     security={{ "bearerAuth":{} }},
     *     @OA\Parameter(
     *         name="product",
     *         in="path",
     *         required=true,
     *         description="Product ID",
     *         @OA\Schema(type="integer"),
     *     ),
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
     *     @OA\Response(
     *         response=404,
     *         description="Not found",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string"),
     *         ),
     *     ),
     * )
     */
    public function removeFromFavourites(Product $product): JsonResponse
    {
        $user = Auth::user();

        if (DB::table('product_user')
            ->where('user_id', $user->id)
            ->where('product_id', $product->id)
            ->exists()) {
            /** @var User $user */
            $user->favouriteProducts()->detach($product->id);

            return response()->json([
                'message' => 'Product remove from favourites'
            ]);
        }

        return response()->json([
            'message' => 'This product is not on your favourite list'
        ], 404);
    }
}
