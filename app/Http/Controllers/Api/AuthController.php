<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
  public function register(RegisterRequest $request)
  {
    $user = User::create($request->validated());
    $user['access_token'] = $user->createToken('appToken', [])->plainTextToken;

    return $this->response($user, 'Account Created.', 201);
  }

  public function user()
  {
    return $this->response(request()->user(), 'User Details', 200);
  }

  public function login(LoginRequest $request)
  {
    $user = User::firstWhere('email', $request->email);
    $user['access_token'] = $user->createToken('appToken', [])->plainTextToken;

    return $this->response($user, 'Successfully Login', 201);
  }

  public function logout() {
    request()->user()->currentAccessToken()->delete();
    return $this->response([], 'Successfully Logout', 200);

  }
}
