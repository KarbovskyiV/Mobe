<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class RegisterUserRequest extends FormRequest
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
            'name' => ['required', 'string', 'min:2', 'max:255'],
            'surname' => ['string', 'min:2', 'max:255'],
            'email' => ['required', 'string', 'email', 'min:2', 'max:255', 'unique:users'],
            'phone' => ['nullable', 'regex:/^\+?\d{1,3}[-\s]?\d{1,15}$/', 'min:10', 'max:15'],
            'password' => [
                'required',
                'regex:/^[^\p{Cyrillic}]+$/u',
                Password::min(8)->mixedCase()->numbers()
            ],
        ];
    }
}
