<?php

namespace App\Http\Controllers;

use App\Models\Pagina;
use Illuminate\Http\Request;

class PaginaController extends Controller
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
        $Pagina = Pagina::where('state', 1)->get();
        return $Pagina;
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
        if (Pagina::find($id) == null) {
            return "No existe un Pagina con el id N° " . $id;
        }
        if (Pagina::find($id)->state == 0) {
            return "El Pagina N° " . $id . " esta desactivado.";
        }
        $Pagina = Pagina::find($id);
        return $Pagina;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Pagina $pagina)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Pagina $pagina)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pagina $pagina)
    {
        //
    }
}
