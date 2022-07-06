<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Hash;

class LoginRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
          'email' => 'required|email',
          'password' => 'required',
        ];
    }

    public function withValidator($validator)
    {
      $validator->after(function ($validator) {
        $user = User::firstWhere('email',$this->email);
        if ($user) {
          if (!Hash::check($this->password, $user->password)) {
            $validator->errors()->add('password', 'The password you entered is incorrect. Please try again.');
          }
        } else {
          if (!empty($this->email)) {
            $validator->errors()->add('email', 'These credentials do not match on our records.');
          }
        }
      });
    }
}
