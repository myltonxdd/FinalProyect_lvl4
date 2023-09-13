"use client";
import React from "react";
import NavBar from "@/components/navBar";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";

function page() {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    lastname: "",
    usuario: "",
    password: "",
    rol_id: "",
    state: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = `http://127.0.0.1:8000/api/usuario/update/${formData.id}`;
    const data = {
      name: formData.name,
      lastname: formData.lastname,
      usuario: formData.usuario,
      password: formData.password,
      rol_id: formData.rol_id,
      state: formData.state,
    };

    axios
      .put(url, data)
      .then((response) => {
        // Maneja la respuesta exitosa aquí
        console.log("Respuesta exitosa:", response.data);
        window.location.href = 'http://localhost:3000/perfil';
      })
      .catch((error) => {
        // Maneja los errores aquí
        console.error("Error:", error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="bg-white">
      <div className="flex flex-col px-6 pt-6 gap-3">
        <NavBar />

        <Link href="./perfil" className="pt-8">
          <div className="flex flex-raw">
            <img src="../flechIzq.svg" alt="" />
            <span>Back</span>
          </div>
        </Link>

        <div className="flex flex-col w-full justify-center items-center pt-3 ">
          <div className="flex flex-col gap-6 md:w-4/6 md:border md:rounded-lg md:p-6">
            <div className="flex flex-col gap-1">
              <div className="text-2xl font-normal">Change Info</div>
              <div className="text-[#828282] text-sm font-medium">
                Change will be reflected to every services
              </div>
            </div>
            <form
              onSubmit={handleSubmit}
              encType="multipart/form-data"
              className="flex flex-col gap-3"
            >
              <div className="flex flex-col">
                <label htmlFor="id">ID</label>
                <input
                  type="text"
                  id="id"
                  name="id"
                  placeholder="Enter your ID..."
                  value={formData.id}
                  onChange={handleChange}
                  className="border border-stone-400 rounded-lg h-9 p-1 w-3/5"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name..."
                  value={formData.name}
                  onChange={handleChange}
                  className="border border-stone-400 rounded-lg h-9 p-1 w-3/5"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="lastname">Apellido</label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Enter your lastname..."
                  value={formData.lastname}
                  onChange={handleChange}
                  className="border border-stone-400 rounded-lg h-9 p-1 w-3/5"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="usuario">Usuario</label>
                <input
                  type="text"
                  id="usuario"
                  name="usuario"
                  placeholder="Enter your username..."
                  value={formData.usuario}
                  onChange={handleChange}
                  className="border border-stone-400 rounded-lg h-9 p-1 w-3/5"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password..."
                  value={formData.password}
                  onChange={handleChange}
                  className="border border-stone-400 rounded-lg h-9 p-1 w-3/5"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="rol_id">Rol</label>
                <input
                  type="numeric"
                  id="rol_id"
                  name="rol_id"
                  placeholder="Enter your rol..."
                  value={formData.rol_id}
                  onChange={handleChange}
                  className="border border-stone-400 rounded-lg h-9 p-1 w-3/5"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="state">Estado</label>
                <input
                  type="numeric"
                  id="state"
                  name="state"
                  placeholder="Enter your state..."
                  value={formData.state}
                  onChange={handleChange}
                  className="border border-stone-400 rounded-lg h-9 p-1 w-3/5"
                />
              </div>
              <input
                type="submit"
                defaultValue="Save"
                className="bg-blue-600 cursor-pointer rounded-lg text-white h-9 w-24"
              />
            </form>
          </div>
          <div className="flex flex-row justify-between font-normal text-sm w-full text-[#BDBDBD] py-4">
            <div>Milton Procel</div>
            <div>devchallenges.io</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
