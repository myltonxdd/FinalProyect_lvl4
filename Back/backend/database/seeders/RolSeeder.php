<?php

namespace Database\Seeders;

use App\Models\Rol;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RolSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        /* Rol::factory(3)->create(); */
        Rol::create(['rol' => 'ROL_ADMINISTRADOR', 'create_by' => null, 'update_by' => null]);
        Rol::create(['rol' => 'ROL_AFILIADO', 'create_by' => null, 'update_by' => null]);
        Rol::create(['rol' => 'ROL_RRHH', 'create_by' => null, 'update_by' => null]);
    }
}
