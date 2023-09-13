import React from 'react'
import Link from 'next/link'

function MenuDash() {
  return (
    <div id="miElemento" className="flex flex-col bg-white fixed right-1 top-11 gap-3 rounded-xl drop-shadow-lg border p-3 w-36">
            <Link href="http://localhost:3000/perfil" className="flex flex-row gap-2">
                <img src="../myprofile.svg" alt="" />
                <div className="font-medium text-sm">Perfil</div>
            </Link>
            <Link href="http://localhost:3000/edit" className="flex flex-row gap-2">
                <img src="../myprofile.svg" alt="" />
                <div className="font-medium text-sm">Edit Perfil</div>
            </Link>
            <hr />
            <Link href="http://localhost:3000/controler/logout.php" className="flex flex-row gap-2">
                <img src="./logout.svg" alt="" />
                <div className="text-red-600 font-medium text-sm">Logout</div>
            </Link>

    </div>
  )
}

export default MenuDash