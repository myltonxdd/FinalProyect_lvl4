<?php

namespace App\Http\Controllers;

use App\Models\Bitacora;
use App\Models\Persona;
use App\Models\Usuario;
use Exception;
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
        $nuevoUsuario->password = $request->password;
        $nuevoUsuario->state = 1;
        $nuevoUsuario->fecha = now();
        $nuevoUsuario->create_by = $newPersona->id;
        $nuevoUsuario->update_by = $newPersona->id;
        $nuevoUsuario->save();

        $id = $nuevoUsuario->id;

        $creador = Usuario::find($id);

        $newBitacora = new Bitacora();

        $newBitacora->bitacora = "Create Usuario: " .$id;
        $newBitacora->user_id = $id;
        $newBitacora->updated_at = now();
        $newBitacora->so = "PHP_OS";
        $newBitacora->ip = "192.168.100.1";
        $newBitacora->navegador = "Buscador de Google";
        $newBitacora->usuario_nombre = $creador->usuario;
        $newBitacora->state = 1;
        $newBitacora->save();

        return "usuario creado";
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
        
        $user = Usuario::where('usuario',$request->usuario)->where('password',$request->password)->get();
        if(count($user) == 0){
            return "password o Usuario erroneo " . redirect("http://localhost:3000/login");
        }else{
            return redirect("http://localhost:3000/dashboard");
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update($id, Request $request)
    {
        try {
            if (Usuario::find($id) == null) {
                return "No existe un Usuario con el id N° " . $id;
            }
            $updateUsuario = Usuario::find($id);

            //////////MODIFICA PERSONA /////////

            $id_person = $updateUsuario->person_id;
            $updatePersona = Persona::find($id_person);

            ($request->name == null) ? ($updatePersona->name = $updatePersona->name) : ($updatePersona->name = $request->name);
            ($request->lastname == null) ? ($updatePersona->lastname = $updatePersona->lastname) : ($updatePersona->lastname = $request->lastname);
            $updatePersona->updated_at = now();
            $updatePersona->save();


            //////////MODIFICA USARIO /////////

            ($request->person_id == null) ? ($updateUsuario->person_id = $updateUsuario->person_id) : ($updateUsuario->person_id = $request->person_id);
            ($request->usuario == null) ? ($updateUsuario->usuario = $updateUsuario->usuario) : ($updateUsuario->usuario = $request->usuario);
            ($request->password == null) ? ($updateUsuario->password = $updateUsuario->password) : ($updateUsuario->password = $request->password);
            ($request->fecha == null) ? ($updateUsuario->fecha = $updateUsuario->fecha) : ($updateUsuario->fecha = $request->fecha);
            ($request->rol_id == null) ? ($updateUsuario->rol_id = $updateUsuario->rol_id) : ($updateUsuario->rol_id = $request->rol_id);

            if ($request->state == null) {
                $updateUsuario->state = 0;
            } else {
                $updateUsuario->state = $request->state;
            }
            $updateUsuario->updated_at = now();


            $updateUsuario->save();

            $actualizador = Usuario::find($id);

            $newBitacora = new Bitacora();

            $newBitacora->bitacora = "Update Usuario: " . $id;
            $newBitacora->user_id = $actualizador->id;
            $newBitacora->updated_at = now();
            $newBitacora->so = "PHP_OS";
            $newBitacora->ip = "192.168.100.1";
            $newBitacora->navegador = "Buscador de Google";
            $newBitacora->usuario_nombre = $actualizador->usuario;
            $newBitacora->state = 1;
            $newBitacora->save();

            return "Funciona";
        } catch (Exception $e) {
            $e->getMessage();
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $usuarioInactivar = Usuario::find($request->id_inactivar);
        if ($usuarioInactivar->state == 0) {
            $usuarioInactivar->state = 1;
        } else {
            $usuarioInactivar->state = 0;
        }
        $usuarioInactivar->save();
        return redirect("http://localhost:5173/usuarios");
    }
}
