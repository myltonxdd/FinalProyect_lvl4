<?php

namespace App\Http\Controllers;

use App\Models\Persona;
use App\Models\Usuario;
use Illuminate\Http\Request;

class UsuarioController extends Controller
{
    /* public function __construct()
    {
        $this->middleware('auth:api');
    } */

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $usuario = Usuario::where('state', 1)->get();
        $usuario->load('persona');
        $usuario->load('rol');
        $usuario->load('bitacora');
        return $usuario;
    }

    /**
     * Show the form for creating a new resource.
     */
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
        $nuevoUsuario->clave = $request->clave;
        $nuevoUsuario->state = 1;
        $nuevoUsuario->fecha = now();
        $nuevoUsuario->create_by = NULL;
        $nuevoUsuario->update_by = NULL;
        $nuevoUsuario->save();

        return redirect("http://localhost:3000/dashboard");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        if (Usuario::find($id) == null) {
            return "No existe un Usuario con el id N° " . $id;
        }
        if (Usuario::find($id)->state == 0) {
            return "El Usuario N° " . $id . " esta desactivado.";
        }
        $usuario = Usuario::find($id);
        $usuario->load('persona');
        $usuario->load('rol');
        return $usuario;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Usuario $usuario)
    {
        //
    }

    public function login(Request $request){
        
        $user = Usuario::where('usuario',$request->usuario)->where('clave',$request->clave)->get();
        if(count($user) == 0){
            return "Clave o Usuario erroneo " . redirect("http://localhost:3000/login");
        }else{
            return redirect("http://localhost:3000/dashboard");
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Usuario $usuario)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $usuarioInactivar = Usuario::find($request->id_inactivar);
        if ($usuarioInactivar->habilitado == 0) {
            $usuarioInactivar->habilitado = 1;
        } else {
            $usuarioInactivar->habilitado = 0;
        }
        $usuarioInactivar->save();
        return redirect("http://localhost:5173/usuarios");
    }
}
