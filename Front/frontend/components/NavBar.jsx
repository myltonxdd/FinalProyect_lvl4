import React from "react";
import Link from "next/link";

function NavBar() {
  return (
    <div>
      <div className="flex flex-raw justify-between items-center bg-white">
        <div id="miBoton">
          <div className="fixed top-8">
            <img src="../devcha.svg" alt="" />
          </div>
          <div className="flex flex-row gap-3 items-center fixed top-6 right-8 ">
            <img
              src="../fotovacia.jpg"
              alt=""
              className="object-cover w-12 h-13"
            />
            <div className="flex-row hidden md:flex ">
              <div className="font-bold text-sm">MILTON </div>
              <img src="../flecha.svg" alt="" />
            </div>
          </div>
        </div>
        <div
          id="miElemento"
          className="flex flex-col bg-white fixed right-8 top-20 gap-3 rounded-xl border p-3 w-36"
        >
          <Link href="./perfil" className="flex flex-row gap-2">
            <img src="../myprofile.svg" alt="" />
            <div className="font-medium text-sm">My Profile</div>
          </Link>
          <Link href="./dashboard" className="flex flex-row gap-2">
            <img src="../groupchat.svg" alt="" />
            <div className="font-medium text-sm">DashBoard</div>
          </Link>
          <hr />
          <Link href="./logout" className="flex flex-row gap-2">
            <img src="../logout.svg" alt="" />
            <div className="text-red-600 font-medium text-sm">Logout</div>
          </Link>

        </div>
      </div>
    </div>
  );
}

export default NavBar;
