"use client"
import React from "react";
import Link from "next/link";
import { useState } from "react";

function page() {

  const [formData, setFormData] = useState({
    usuario: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://127.0.0.1:8000/api/atuh/login", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.json())
    .then((data) => {
    if (data.token) {
        // Guarda el token en el almacenamiento local del navegador
        localStorage.setItem("jwt_token", data.token);
        window.location.href = '/dashboard';
    
    } else {
        console.log("NO valio guardar el Token")
        // Maneja el caso de autenticación fallida
    }
    })
    .catch((error) => {
    console.error("Error de red:", error);
    });
  };

  return (
    <div className="bg-white">
      <div className="flex flex-col w-screen h-screen pt-6 px-6 gap-5 items-center">
        <div className="sm:border sm:rounded-xl sm:w-[27rem] sm:h-[33.5rem] sm:flex sm:justify-between sm:flex-col sm:px-8 sm:py-6 sm:mt-14">
          <div className="flex flex-col gap-4 justify-start w-full">
            <div>
              <img src="./devcha.svg" alt="" />
            </div>
            <h3 className="text-lg font-semibold">Login</h3>
          </div>

          <form className="flex flex-col w-full gap-3 pt-5" method="post" onSubmit={handleSubmit}>
            <div className="flex flex-raw border rounded-md h-11 focus-within:border-2">
              <img src="./sobre.svg" alt="" />
              <input type="text" id="usuario"
                name="usuario"
                placeholder="usuario"
                value={formData.usuario}
                onChange={handleInputChange}
                className="border-none outline-none w-full"
              />
            </div>
            <div className="flex flex-raw border rounded-md h-11 focus-within:border-2">
              <img src="./candado.svg" alt="" />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="border-none outline-none w-full"
              />
            </div>
            <input
              type="submit"
              defaultValue="Start coding now"
              className=" cursor-pointer bg-blue-600 font-semibold text-lg rounded-md text-white mt-4 h-11"
            />
          </form>

          <div className="flex flex-col items-center gap-6 pt-3 w-full">
            <span className="text-[#828282] text-sm font-normal">
              or continue with these social profile
            </span>
            <div className="flex flex-row gap-2 justify-center">
              <Link
                href="https://www.google.com"
                className="border-zinc-500 border rounded-full p-2"
              >
                <img src="./google.svg" alt="" />
              </Link>
              <Link
                href="https://www.facebook.com"
                className="border-zinc-500 border rounded-full p-2"
              >
                <img src="./face.svg" alt="" />
              </Link>
              <Link
                href="https://www.twiter.com"
                className="border-zinc-500 border rounded-full p-2"
              >
                <img src="./twit.svg" alt="" />
              </Link>
              <Link
                href="https://github.com/myltonxdd/sistmlog_php"
                className="border-zinc-500 border rounded-full p-2"
              >
                <img src="./github.svg" alt="" />
              </Link>
            </div>
            <span className="text-[#828282] text-sm font-normal">
              Don't have an account yet?
              <Link href="/" className="text-blue-600">
                Register
              </Link>
            </span>
          </div>
        </div>
        <div className="flex flex-row justify-between font-normal text-sm w-full text-[#BDBDBD] pt-10 sm:pt-0 sm:w-2/6">
          <div>Milton Procel</div>
          <div>devchallenges.io</div>
        </div>
      </div>
    </div>
  );
}

export default page;
