<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        $this->call(PersonaSeeder::class);
        $this->call(RolSeeder::class);
        $this->call(UsuarioSeeder::class);
        
        $this->call(PaginaSeeder::class);
        $this->call(EnlaceSeeder::class);
        $this->call(BitacoraSeeder::class);
    }
}
