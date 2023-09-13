import React from 'react'
import Link from 'next/link'

function BarLeft() {
  return (
    <div>
        <div id="miElemento2" className="bg-[#353a40] h-full flex flex-col text-[#afb1b7] w-60 gap-2 shadow-2xl">
          <div className="flex flex-raw pt-2 gap-3 justify-center items-center">
            <p className='text-xl font-semibold'>SISTEM LOG</p>
          </div>
          <hr className=" border-[#afb1b7]" />
          <div className="flex flex-col px-3 gap-2">
            <h2>Usuario:</h2>
            <div className="text-sm">Milton </div>
          </div>
          <hr className=" border-[#afb1b7]" />
          <div className="flex flex-col px-2 gap-2">
            <h2 className="text-sm font-semibold pl-6">TABLAS</h2>
            <Link href="http://localhost:3000/dashboard/showUsers" className="flex flex-row gap-1 text-sm">
                <img src="../task.svg" alt="" />
                <p>Usuarios</p>
            </Link>
            <Link href="http://localhost:3000/dashboard/showRols" className="flex flex-row gap-1 text-sm">
                <img src="../task.svg" alt="" />
              <p>Roles</p>
            </Link>
            <Link href="http://localhost:3000/dashboard/showBitacors" className="flex flex-row gap-1 text-sm">
                <img src="../task.svg" alt="" />
              <p>Bitacoras</p>
            </Link>
            <Link href="http://localhost:3000/dashboard/showPersons" className="flex flex-row gap-1 text-sm">
                <img src="../task.svg" alt="" />
              <p>Personas</p>
            </Link>
            <Link href="http://localhost:3000/dashboard/showEnlaces" className="flex flex-row gap-1 text-sm">
                <img src="../task.svg" alt="" />
              <p>Enlaces</p>
            </Link>

          </div>
        </div>

    </div>
  )
}

export default BarLeft