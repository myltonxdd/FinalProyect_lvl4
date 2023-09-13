<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Models\Persona;
use App\Models\Usuario;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $credentials = request(['usuario', 'password']);
    
        if (! $token = auth()->attempt(['usuario' => $credentials['usuario'], 'password' => $credentials['password']])) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    
        return $this->respondWithToken($token);
    }
    



    public function create(Request $request)
    {
        $newPersona = new Persona();

        $newPersona->name = NULL;
        $newPersona->lastname = NULL;
        $newPersona->create_by = NULL;
        $newPersona->update_by = NULL;

        $newPersona->save();

        $nuevoUsuario = new Usuario();

        $nuevoUsuario->person_id = $newPersona->id;
        $nuevoUsuario->rol_id = 2;

        $nuevoUsuario->usuario = $request->usuario;
        $nuevoUsuario->password = $request->password;
        $nuevoUsuario->state = 1;
        $nuevoUsuario->fecha = now();
        $nuevoUsuario->create_by = NULL;
        $nuevoUsuario->update_by = NULL;
        $nuevoUsuario->save();

        return "Usarui creado";
        return redirect("http://localhost:3000/dashboard");
    }


    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(Auth::refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }


}