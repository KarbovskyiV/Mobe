<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\JsonResponse;

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
}
