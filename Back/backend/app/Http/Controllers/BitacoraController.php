<?php

namespace App\Http\Controllers;

use App\Models\Bitacora;
use Illuminate\Http\Request;

class BitacoraController extends Controller
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
          // $Bitacora = Bitacora::where('habilitado', 1)->get();
          $Bitacora = Bitacora::all();
          $Bitacora->load('usuario');
          return $Bitacora;
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
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
        if (Bitacora::find($id) == null) {
            return "No existe un Bitacora con el id N° " . $id;
        }
        // if (Bitacora::find($id)->state == 0) {
        //     return "El Bitacora N° " . $id . " esta desactivado.";
        // }
        $Bitacora = Bitacora::find($id);
        return $Bitacora;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Bitacora $bitacora)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Bitacora $bitacora)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Bitacora $bitacora)
    {
        //
    }
}
