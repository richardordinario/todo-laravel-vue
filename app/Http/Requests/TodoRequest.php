<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TodoRequest extends FormRequest
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
          'user_id' => 'sometimes',
          'title' => 'required'
        ];
    }

    protected function prepareForValidation()
    {
      return $this->merge([
        'user_id' => auth()->guard('sanctum')->user()->id
      ]);
    }
}
