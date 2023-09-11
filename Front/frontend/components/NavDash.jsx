import React from 'react'
import Link from 'next/link'

function NavDash() {
    
    const boton = document.getElementById('miBoton');

  return (

    
    <div className="flex flex-row w-full justify-between bg-white border-b-2 p-2 text-[#afb1b7]">
        
        <div id="miBoton2" className="flex flex-row items-center gap-3 cursor-pointer">
            <div>
                <img src="../recursos/icons/menulineas.svg" alt="" />
            </div>
            <div className="font-medium text-sm">Home</div>
        </div>
        <div id="miBoton" className="flex flex-row gap-3 ">
            <div className="flex-row items-center hidden md:flex cursor-pointer ">
                <div className="font-medium text-sm">Milton</div>
                <img src="../recursos/icons/flechIzq.svg" alt="" />
            </div>
        </div>
        <div id="miElemento" className="flex flex-col bg-white fixed right-1 top-11 gap-3 rounded-xl drop-shadow-lg border p-3 w-36 hidden">
            <Link href="./alumno_editPerfil.php" className="flex flex-row gap-2">
                <img src="../recursos/icons/myprofile.svg" alt="" />
                <div className="font-medium text-sm">Perfil</div>
            </Link>
            <hr />
            <Link href="../controler/logout.php" className="flex flex-row gap-2">
                <img src="./logout.svg" alt="" />
                <div className="text-red-600 font-medium text-sm">Logout</div>
            </Link>

        </div>
    </div>

  )
}

export default NavDash