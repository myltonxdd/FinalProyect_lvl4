<?php

namespace App\Http\Controllers;

use App\Models\Enlace;
use Illuminate\Http\Request;

class EnlaceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // $Enlace = Enlace::where('habilitado', 1)->get();
        $Enlace = Enlace::all();
        $Enlace->load('rol');
        $Enlace->load('pagina');
        return $Enlace;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $nuevoEnlace = new Enlace();
        $nuevoEnlace->pagina_id = NULL;
        $nuevoEnlace->rol_id = $request->rol_id;
        $nuevoEnlace->description = $request->description;
        $nuevoEnlace->create_by = now();
        $nuevoEnlace->update_by	 = NULL;

        $nuevoEnlace->save();
        return redirect("http://localhost:5173/enlaces");
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
        if (Enlace::find($id) == null) {
            return "No existe un Enlace con el id N° " . $id;
        }
        if (Enlace::find($id)->state == 0) {
            return "El Enlace N° " . $id . " esta desactivado.";
         }
        $Enlace = Enlace::find($id);
        $Enlace->load('rol');
        $Enlace->load('pagina');
        return $Enlace;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Enlace $enlace)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Enlace $enlace)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Enlace $enlace)
    {
        //
    }
}
