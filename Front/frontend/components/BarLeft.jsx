import React from 'react'
import Link from 'next/link'

function BarLeft() {
  return (
    <div>
        <div id="miElemento2" className="bg-[#353a40] h-full flex flex-col text-[#afb1b7] w-60 gap-2 shadow-2xl">
          <div className="flex flex-raw pt-2 gap-3 justify-center items-center">
            <img src="../recursos/assets/logo.jpg" alt="" className="rounded-full h-8 w-8"/>
            <p>Universidad</p>
          </div>
          <hr className=" border-[#afb1b7]" />
          <div className="flex flex-col px-3 gap-2">
            <h2>Alumno</h2>
            <div className="text-sm">Milton </div>
          </div>
          <hr className=" border-[#afb1b7]" />
          <div className="flex flex-col px-2 gap-2">
            <h2 className="text-sm font-semibold pl-6">MENU ALUMNOS</h2>
            <Link href="./alumno_calf.php" className="flex flex-row gap-1 text-sm">
                <img src="../recursos/icons/task.svg" alt="" />
                <p>Usuarios</p>
            </Link>
            <Link href="./alumno_EsqueCla.php" className="flex flex-row gap-1 text-sm">
                <img src="../recursos/icons/easel.svg" alt="" />
              <p>Roles</p>
            </Link>
            <Link href="./alumno_EsqueCla.php" className="flex flex-row gap-1 text-sm">
                <img src="../recursos/icons/easel.svg" alt="" />
              <p>Bitacoras</p>
            </Link>
            <Link href="./alumno_EsqueCla.php" className="flex flex-row gap-1 text-sm">
                <img src="../recursos/icons/easel.svg" alt="" />
              <p>Administra tus clases</p>
            </Link>
          </div>
        </div>

    </div>
  )
}

export default BarLeft