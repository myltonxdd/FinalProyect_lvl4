"use client"
import React from "react";
import NavBar from "@/components/navBar";
import Link from "next/link";
import {useState, useEffect } from "react";

function page() {

  const [datos, setDatos] = useState(null);
    
  ////// JSON ////////

  async function getData() {
  
  try {
      
          /* let num = $id.params.id */
          let num = 1;
          const parameter = await fetch(`http://127.0.0.1:8000/api/usuario/${num}`);
          const data = await parameter.json();

          return data;

          
      } catch (error) {
          console.log(error);
      }
  }

  useEffect(() => {
      const fetchData = async () => {
        const data = await getData(1);
        setDatos(data);
      };
  
      fetchData();
    }, [1]);

    console.log(datos);

    if (datos === null) {
      // Puedes mostrar un mensaje de carga mientras se obtienen los datos
      return <div>Cargando...</div>;
    }

  return (
    <div className="bg-white h-screen flex flex-col px-6 pt-6 gap-3">
      <NavBar /> 
      <div className="flex flex-col w-full justify-center items-center pt-3 ">
        <div className="flex flex-col gap-6 md:w-4/6 md:border md:rounded-lg md:p-6 mt-14">
          <div className="flex flex-col gap-1 items-center pt-5">
            <div className="text-2xl font-normal">Personal Info</div>
            <div className="text-[#828282] text-sm font-medium">
              Basic Info, like your name and photo
            </div>
          </div>
          <div className="flex flex-raw w-full justify-between items-center">
            <div className="flex flex-col w-3/5">
              <div className="text-2xl font-normal">Profile</div>
              <div className="text-[#828282] text-sm font-medium">
                Some info may be visible to other people
              </div>
            </div>
            <Link href="./edit">
              <div className="border rounded-lg w-24 flex justify-center items-center text-[#828282] h-9">
                Edit
              </div>
            </Link>
          </div>
          <div className="flex flex-col gap-4 pt-3">
            <div className="flex flex-raw justify-between w-full">
              <div className="flex  items-center text-sm text-[#BDBDBD] font-medium w-1/3">
                PHOTO
              </div>
              <div className="flex w-2/3 justify-end ">
                <img src="../fotovacia.jpg" alt="" className="object-cover w-16"/>
              </div>
            </div>
            <hr />
            <div className="flex flex-raw justify-between w-full">
              <div className="flex  items-center text-sm text-[#BDBDBD] font-medium w-1/3">
                ID
              </div>
              <div> {datos.id}</div>
            </div>
            <hr />
            <div className="flex flex-raw justify-between w-full">
              <div className="flex  items-center text-sm text-[#BDBDBD] font-medium w-1/3">
                NAME
              </div>
              <div> {datos.persona.name}</div>
            </div>
            <hr />
            <div className="flex flex-raw justify-between w-full">
              <div className="flex  items-center text-sm text-[#BDBDBD] font-medium w-1/3">
                USUARIO
              </div>
              <div> {datos.usuario}</div>
            </div>
            <hr />
            <div className="flex flex-raw justify-between w-full">
              <div className="flex  items-center text-sm text-[#BDBDBD] font-medium w-1/3">
                ROL
              </div>
              <div> {datos.rol.rol}</div>
            </div>
            <hr />
            <div className="flex flex-raw justify-between w-full">
              <div className="flex  items-center text-sm text-[#BDBDBD] font-medium w-1/3">
                FECHA
              </div>
              <div> {datos.fecha}</div>
            </div>
            <hr />
            <div className="flex flex-raw justify-between w-full">
              <div className="flex  items-center text-sm text-[#BDBDBD] font-medium w-1/3">
                PASSWORD
              </div>
              <div>**********</div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
