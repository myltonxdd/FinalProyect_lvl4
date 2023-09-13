<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BitacoraController;
use App\Http\Controllers\EnlaceController;
use App\Http\Controllers\PaginaController;
use App\Http\Controllers\PersonaController;
use App\Http\Controllers\RolController;
use App\Http\Controllers\UsuarioController;
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


// Otras rutas de API

Route::controller(AuthController::class)->group(function () {
    Route::post('/atuh/create',  'create');
    Route::post('/atuh/login',  'login');
    Route::post('/atuh/validation', 'me');
});

Route::controller(UsuarioController::class)->group(function () {
    Route::get('/usuario',  'index');
    Route::get('/usuario/{id}','show');
    Route::post('/login','login');
    Route::post('/usuario/create',  'create');
    Route::put('/usuario/update/{id}',  'update');
    Route::put('/usuario/delete', 'destroy');
    
});

Route::controller(PersonaController::class)->group(function () {
    Route::get('/persona',  'index');
    Route::get('/persona/{id}', 'show');
    Route::post('/persona/create', 'create');
    Route::get('/verificar', 'verificar');
});

Route::controller(RolController::class)->group(function () {
    Route::get('/rol', 'index');
    Route::get('/rol/{id}', 'show');
    Route::post('/rol/create', 'create');
    Route::post('/rol/update/{id}', 'update');
});

Route::controller(EnlaceController::class)->group(function () {
    Route::get('/enlace', 'index');
    Route::get('/enlace/{id}', 'show');
    Route::post('/enlaces/create', 'create');
});

Route::controller(BitacoraController::class)->group(function () {
    Route::get('/bitacora', 'index');
    Route::get('/bitacora/{id}', 'show');
});

Route::controller(PaginaController::class)->group(function () {
    Route::get('/pagina', 'index');
    Route::get('/pagina/{id}', 'show');
});



