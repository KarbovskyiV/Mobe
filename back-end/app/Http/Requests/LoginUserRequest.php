<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class LoginUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'email' => ['required', 'string', 'email', 'min:2', 'max:255'],
            'password' => [
                'required',
                'regex:/^[^\p{Cyrillic}]+$/u',
                Password::min(8)->mixedCase()->numbers()
            ],
            'rememberMe' => 'boolean'
        ];
    }
}
