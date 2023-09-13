"use client"
import React from 'react'


function NavDash() {
    
    /* const boton = document.getElementById('miBoton'); */

   /*  // Agregar un escuchador de eventos al botón
    boton.addEventListener('click', function() {
        // Verificar si el elemento tiene la clase "mi-clase"
        if (elemento.classList.contains('hidden')) {
        // Si la tiene, la quitamos
        elemento.classList.remove('hidden');
        } else {
        // Si no la tiene, la agregamos
        elemento.classList.add('hidden');
        }
    }); */

  return (

    <div className="flex flex-row w-full justify-between bg-white border-b-2 p-2 text-[#afb1b7]">
        
        <div id="miBoton2" className="flex flex-row items-center gap-3 cursor-pointer">
            <div>
                <img src="../menulineas.svg" alt="" />
            </div>
            <div className="font-medium text-sm">Home</div>
        </div>
        <div id="miBoton" className="flex flex-row gap-3 ">
            <div className="flex-row items-center hidden md:flex cursor-pointer ">
                <div className="font-medium text-sm">Milton</div>
                <img src="../flechIzq.svg" alt="" />
            </div>
        </div>
        
    </div>

  )
}

export default NavDash