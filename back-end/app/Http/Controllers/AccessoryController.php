<?php

namespace App\Http\Controllers;

use App\Models\Accessory;
use Illuminate\Http\JsonResponse;

class AccessoryController extends Controller
{
    /**
     * @OA\Get(
     *      path="/api/accessories",
     *      summary="Get a list of all accessories and category information",
     *      tags={"Accessories"},
     *      description="Get a list of accessories with category.",
     *      @OA\Response(
     *          response=200,
     *          description="Success",
     *          @OA\JsonContent(
     *              type="array",
     *              @OA\Items(
     *                  @OA\Property(property="id", type="integer"),
     *                  @OA\Property(property="name", type="string"),
     *                  @OA\Property(property="category_id", type="integer"),
     *                  @OA\Property(property="subcategory", type="string"),
     *                  @OA\Property(property="price", type="string"),
     *                  @OA\Property(property="compatible_model", type="string"),
     *                  @OA\Property(property="color", type="string"),
     *                  @OA\Property(property="form_factor", type="string"),
     *                  @OA\Property(property="material", type="string"),
     *                  @OA\Property(property="description", type="string"),
     *                  @OA\Property(property="style", type="string"),
     *                  @OA\Property(property="legal_information", type="string"),
     *                  @OA\Property(property="features", type="string"),
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
        $accessories = Accessory::with(['category'])->get();

        return response()->json($accessories);
    }
}
