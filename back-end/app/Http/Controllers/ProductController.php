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
     *      path="/api/products",
     *      summary="Get a list of all products and category information",
     *      tags={"Products"},
     *      description="Get a list of products with category.",
     *      @OA\Response(
     *          response=200,
     *          description="Success",
     *          @OA\JsonContent(
     *              type="array",
     *              @OA\Items(
     *                  @OA\Property(property="id", type="integer"),
     *                  @OA\Property(property="category_id", type="integer"),
     *                  @OA\Property(property="name", type="string"),
     *                  @OA\Property(property="display_diagonal", type="string"),
     *                  @OA\Property(property="display_resolution", type="string"),
     *                  @OA\Property(property="matrix_type", type="string"),
     *                  @OA\Property(property="screen_refresh_rate", type="string"),
     *                  @OA\Property(property="screen_material", type="string"),
     *                  @OA\Property(property="communication_standard", type="string"),
     *                  @OA\Property(property="sim_card_dimensions", type="string"),
     *                  @OA\Property(property="category", type="object",
     *                      @OA\Property(property="id", type="integer"),
     *                      @OA\Property(property="name", type="string"),
     *                  )
     *              )
     *          )
     *      )
     *  )
     */
    public function index(): JsonResponse
    {
        $products = Product::with('category')->get();

        $products->makeHidden(['created_at', 'updated_at']);
        $products->each(function ($product) {
            $product->category->makeHidden(['created_at', 'updated_at']);
        });

        return response()->json($products);
        // TODO: do resource
    }

    /**
     * @OA\Get(
     *      path="/api/products/{product}",
     *      operationId="showProduct",
     *      tags={"Products"},
     *      summary="Show product details with category",
     *      description="Retrieve details of a product along with its associated category",
     *      @OA\Parameter(
     *          name="product",
     *          in="path",
     *          description="Product ID",
     *          required=true,
     *          @OA\Schema(type="integer"),
     *      ),
     *          @OA\Response(
     *          response=200,
     *          description="Success",
     *          @OA\JsonContent(
     *              type="array",
     *              @OA\Items(
     *                  @OA\Property(property="id", type="integer"),
     *                  @OA\Property(property="category_id", type="integer"),
     *                  @OA\Property(property="name", type="string"),
     *                  @OA\Property(property="display_diagonal", type="string"),
     *                  @OA\Property(property="display_resolution", type="string"),
     *                  @OA\Property(property="matrix_type", type="string"),
     *                  @OA\Property(property="screen_refresh_rate", type="string"),
     *                  @OA\Property(property="screen_material", type="string"),
     *                  @OA\Property(property="communication_standard", type="string"),
     *                  @OA\Property(property="sim_card_dimensions", type="string"),
     *                  @OA\Property(property="category", type="object",
     *                      @OA\Property(property="id", type="integer"),
     *                      @OA\Property(property="name", type="string"),
     *                  )
     *              )
     *          )
     *      )
     *  )
     */
    public function show(Product $product): JsonResponse
    {
        $product->load('category');

        $product->makeHidden(['created_at', 'updated_at']);
        $product->category->makeHidden(['created_at', 'updated_at']);

        return response()->json($product);
        // TODO: do resource same as index
    }

    public function new()
    {
        $query = Product::query()->where('is_new', '=', 1)->get();

        return response()->json([
            'data' => $query,
        ]);
    }

    public function promotion()
    {
        $query = Product::query()->where('is_promotion', '=', 1)->get();

        return response()->json([
            'data' => $query,
        ]);
    }

    public function popular()
    {
        $query = Product::query()->where('is_popular', '=', 1)->get();

        return response()->json([
            'data' => $query,
        ]);
    }

    public function hotPrice()
    {
        $query = Product::query()->where('is_hot_price', '=', 1)->get();

        return response()->json([
            'data' => $query,
        ]);
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

    /**
     * @OA\Get(
     *     path="/api/recommended/{product}",
     *     operationId="getRecommendedProducts",
     *     tags={"Products"},
     *     summary="Get recommended products",
     *     description="Get a list of recommended products based on the provided product's category.",
     *     @OA\Parameter(
     *         name="product",
     *         in="path",
     *         required=true,
     *         description="ID of the product for which recommendations are needed",
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Success",
     *         @OA\JsonContent(
     *             @OA\Property(property="data", type="array", @OA\Items(
     *                 @OA\Property(property="id", type="integer"),
     *                 @OA\Property(property="category_id", type="integer"),
     *                 @OA\Property(property="name", type="string"),
     *                 @OA\Property(property="created_at", type="string", format="date-time"),
     *                 @OA\Property(property="updated_at", type="string", format="date-time")
     *             ))
     *         )
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Not found",
     *         @OA\JsonContent(
     *             @OA\Property(property="error", type="string")
     *         )
     *     )
     * )
     */
    public function recommendedProducts($product): JsonResponse
    {
        $selectedProduct = Product::find($product);

        if (!$selectedProduct) {
            return response()->json(['error' => 'Product not found'], 404);
        }

        $category_id = $selectedProduct->category_id;

        $recommendedProducts = Product::query()
            ->where('category_id', $category_id)
            ->whereNotIn('id', [$product])
            ->inRandomOrder()
            ->get();

        return response()->json([
            'data' => $recommendedProducts,
        ]);
    }
}
