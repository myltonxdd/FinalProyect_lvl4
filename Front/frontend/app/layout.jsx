"use client"
import "./globals.css";
import { Inter } from "next/font/google";
/* import axios from "axios";
import { useState, useEffect } from "react"; */

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {

  /////////// B ////////////////
  /* sessionStorage.setItem("myToken", response.data.access_token);
  axios.defaults.headers.common["Authorization"] =
    "Bearer" + response.data.access_token;
  axios.defaults.headers.post["Content-Type"] = "application/json";

  axios.interceptors.request.use(
    (config) => {
      config.headers.Authorization =
        `Bearer ` + sessionStorage.getItem("myToken");
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const [data, setData] = useState({});
  const [aprove, setAprove] = useState(false);
  const navigatetoUrl = useNavigate();
  const autentificacion = Autentification();

  useEffect(() => {
    autentificacion
      .validationtoken()
      .then((data) => {
        setAprove(true);
        setData(data);
      })
      .catch((error) => {
        console.error(error);
        navigatetoUrl("/");
      });
  }, []);

  if (!aprove) {
    return <h1>Cargando ...</h1>;
  } */
 
  ////////////////////////////////////
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
