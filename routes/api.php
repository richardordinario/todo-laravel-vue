<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\SubTodoController;
use App\Http\Controllers\Api\TodoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::group(['middleware' => ['auth:sanctum']], function () {

  Route::get('/logout', [AuthController::class, 'logout']);
  Route::get('/user', [AuthController::class, 'user']);

  //factory route
  Route::resource('/todos', TodoController::class);
  Route::resource('/sub-todos', SubTodoController::class);


});
