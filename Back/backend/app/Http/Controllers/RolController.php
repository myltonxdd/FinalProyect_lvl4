<?php

namespace App\Http\Controllers;

use App\Models\Rol;
use Exception;
use Illuminate\Http\Request;

class RolController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api');
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $RolPage = Rol::where('state', 1)->get();
        return $RolPage;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        try {
            $newRol = new Rol();

            $newRol->rol = $request->rol;
            $newRol->state = $request->state;
            $newRol->usuario_creacion = NULL;
            $newRol->usuario_modificacion = NULL;
            $newRol->save();
            return  "rol creador";
        } catch (Exception $e) {
            return  $e->getMessage();
        }



        // return  redirect("http://localhost:5173/info")->with(['id' => $newUsuario->id]);
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
        if (Rol::find($id) == null) {
            return "No existe un Rol con el id N° " . $id;
        }
        // if (Rol::find($id)->state == 0) {
        //     return "El Rol N° " . $id . " esta desactivado.";
        // }
        $rol = Rol::find($id);
        return $rol;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Rol $rol)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update($id, Request $request)
    {
        try {
            if (Rol::find($id) == null) {
                return "No existe un Rol con el id N° " . $id;
            }
            // if (Rol::find($id)->state == 0) {
            //     return "El Rol N° " . $id . " esta desactivado.";
            // }
            $updateRol = Rol::find($id);
            if ($request->rol == null) {
                $updateRol->rol = $updateRol->rol;
            } else {
                $updateRol->rol = $request->rol;
            }

            if ($request->habilitado == null) {
                $updateRol->habilitado = 0;
            } else {
                $updateRol->habilitado = $request->habilitado;
            }

            // $updateRol->usuario_creacion = NULL;
            // $updateRol->usuario_modificacion = NULL;
            $updateRol->save();
            // return $updateRol;
            return redirect("http://localhost:5173/roles");
            // return  "rol actualizado";
        } catch (Exception $e) {
            return  $e->getMessage();
        }
        // return  redirect("http://localhost:5173/info")->with(['id' => $newUsuario->id]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Rol $rol)
    {
        //
    }
}
