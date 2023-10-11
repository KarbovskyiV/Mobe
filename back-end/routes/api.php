<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PasswordController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register', [AuthController::class, 'register'])->name('register');
Route::post('/login', [AuthController::class, 'login'])->name('login');

Route::post('/logout', [AuthController::class, 'logout'])->name('logout')->middleware('auth:sanctum');

Route::get('/link/gmail', [AuthController::class, 'link'])->name('link.gmail');
Route::get('/token/gmail', [AuthController::class, 'authenticateWithGoogle'])->name('token.gmail');

Route::post('/forgot-password', [PasswordController::class, 'sendResetLinkEmail'])->name('password.email');
Route::post('/reset-password', [PasswordController::class, 'resetPassword'])->name('password.reset');

Route::get('/products', [ProductController::class, 'index'])->name('products.index');
Route::get('/products/{product}', [ProductController::class, 'show'])->name('products.show');

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/products/{product}/add-to-favourites', [ProductController::class, 'addToFavourites'])
        ->name('products.add.favourite');
    Route::post('/products/{product}/remove-from-favourites', [ProductController::class, 'removeFromFavourites'])
        ->name('products.remove.favourite');
});

Route::get('/categories', [\App\Http\Controllers\CategoryController::class, 'index'])->name('categories.index');
