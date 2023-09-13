import React from "react";
import NavDash from "@/components/NavDash";
import Link from "next/link";


function page() {
  return (

    <div className="flex flex-col w-screen h-full bg-[#f5f6fa]">
        <NavDash/>
        <div id="miElemento" className="flex flex-col bg-white fixed right-1 top-11 gap-3 rounded-xl drop-shadow-lg border p-3 w-36">
            <Link href="./perfil" className="flex flex-row gap-2">
                <img src="../recursos/icons/myprofile.svg" alt="" />
                <div className="font-medium text-sm">Perfil</div>
            </Link>
            <Link href="./edit" className="flex flex-row gap-2">
                <img src="../recursos/icons/myprofile.svg" alt="" />
                <div className="font-medium text-sm">Edit Perfil</div>
            </Link>
            <hr />
            <Link href="../controler/logout.php" className="flex flex-row gap-2">
                <img src="./logout.svg" alt="" />
                <div className="text-red-600 font-medium text-sm">Logout</div>
            </Link>

        </div>
        <div className="flex flex-row items-center justify-between w-full px-5 py-3">
            <h2 className="text-2xl">Dashboard</h2>
            <div className="flex flex-row items-center text-sm">
            <a href="./alumno_dash.php">Home</a>
            <p>/</p>
            <div>Perfil</div>
            </div>
        </div>
        <div className="flex flex-col md:w-3/4 md:border md:rounded-lg md:m-3    bg-white">
            <div className="p-3 text-[#828282]">
            <div className="text-base font-medium">Bienvenido</div>
            <p className=" text-sm">
                Seleciona la accion que quieras realizar en las pestañas del
                menu de la izquierda
            </p>
            </div>
        </div>
    </div>
      

  );
}

export default page;
