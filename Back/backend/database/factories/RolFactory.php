<?php

namespace Database\Factories;

use App\Models\Usuario;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Rol>
 */
class RolFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'rol' => fake()->randomElement(['admin','student','teacher']),
            'create_by'=> optional(Usuario::all()->random()),   
            'update_by'=> optional(Usuario::all()->random())
        ];
    }
}
