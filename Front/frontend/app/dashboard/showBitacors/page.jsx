import NavDash from "@/components/NavDash";
import React from "react";

function page() {
    let $i = 1;
    return (
        <div className="flex flex-col w-full items-center">
            <NavDash />

            <section className="container px-4 mx-auto">
                <div className="flex flex-col mt-10 w-11/12">
                    <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead className="bg-gray-50 dark:bg-gray-800">
                                        <tr>
                                            <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                <button className="flex items-center gap-x-3 focus:outline-none">
                                                    <span>#</span>

                                                    <svg className="h-3" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z" fill="currentColor" stroke="currentColor" stroke-width="0.1"/>
                                                        <path d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z" fill="currentColor" stroke="currentColor" stroke-width="0.1"/>
                                                        <path d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z" fill="currentColor" stroke="currentColor" stroke-width="0.3" />
                                                    </svg>
                                                </button>
                                            </th>

                                            <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                Nombre
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                Usuario
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                Rol
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                Usuario Creacion
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                Usuario Modificacion
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                        <tr>
                                            <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                <div>
                                                    <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                                                        {$i}
                                                    </p>
                                                </div>
                                            </td>
                                            <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                                                <div>
                                                    <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                                                        ".$fila['dni']."
                                                    </p>
                                                </div>
                                            </td>
                                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                <div>
                                                    <p className="text-gray-500 dark:text-gray-400">
                                                        "['nombre']"
                                                    </p>
                                                </div>
                                            </td>
                                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                <div>
                                                    <p className="text-gray-500 dark:text-gray-400">
                                                        "['email']"
                                                    </p>
                                                </div>
                                            </td>
                                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                <div>
                                                    <p className="text-gray-500 dark:text-gray-400">
                                                        "['direccion']"
                                                    </p>
                                                </div>
                                            </td>
                                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                <div>
                                                    <p className="text-gray-500 dark:text-gray-400">
                                                        "['cumpleaños']"
                                                    </p>
                                                </div>
                                            </td>
                                        </tr>


                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div id="" tabindex="-1" aria-hidden="true" className="authentication-modal hidden flex justify-center fixed top-0 left-0 right-0 z-50 w-screen h-screen p-4 bg-gray-500/50 md:inset-0">
                <div className="flex flex-col items-center relative w-full text-gray-500 max-w-md bg-white rounded-lg shadow-lg dark:bg-gray-700 p-4 lg:px-8 gap-7">
                    <button type="button" className="exitEditAlumn absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                    </button>

                    <div>
                        <h3 className="font-semibold text-black text-2xl text-center mt-2">
                            Editar
                        </h3>
                    </div>

                    <form action="../model/editMetodo.php" method="post">
                        <div className="flex flex-col w-full">
                            <label for="dni" className="font-semibold">
                                DNI
                            </label>
                            <input type="text" id="dni" name="dni" placeholder="Ingrese su DNI" value="dni" className="border border-stone-400 rounded-lg h-8 p-1"/>
                        </div>

                        <div className="flex flex-col w-full">
                            <label for="email" className="font-semibold">
                                Email
                            </label>
                            <input type="email" id="email" readonly name="email" placeholder="Ingrese su email" value="email" className="border border-stone-400 rounded-lg h-8 p-1"/>
                        </div>

                        <div className="flex flex-col w-full">
                            <label for="nombre" className="font-semibold">
                                Nombre(s)
                            </label>
                            <input type="text" id="nombre" name="nombre" placeholder="Ingrese su nombre" value="nombre" className="border border-stone-400 rounded-lg h-8 p-1"/>
                        </div>

                        <div className="flex flex-col w-full">
                            <label for="apellido" className="font-semibold">
                                Apellido(s)
                            </label>
                            <input type="text" id="apellido" name="apellido" placeholder="Ingrese su apellido" value="apellido" className="border border-stone-400 rounded-lg h-8 p-1"/>
                        </div>

                        <div className="flex flex-col w-full">
                            <label for="direction" className="font-semibold">
                                Dirección
                            </label>
                            <input type="text" id="direction" name="direction" placeholder="Ingrese su dirección" value="direccion" className="border border-stone-400 rounded-lg h-8 p-1"/>
                        </div>

                        <div className="flex flex-col w-full">
                            <label for="date" className="font-semibold">
                                Fecha de Nacimiento
                            </label>
                            <input type="date" id="date" name="date" value="cumpleaños" className="border border-stone-400 rounded-lg h-8 p-1"/>
                        </div>

                        <input type="text" id="id_rol" name="id_rol" className="hidden" value="3"/>

                        <div className="w-full flex flex-row gap-2 mt-2">
                            <div className="hidden exitEditAlumn cursor-pointer w-16 text-center py-2 bg-gray-500 rounded-lg text-sm font-semibold text-white">
                                Close
                            </div>
                            <button
                                className="w-36 py-2 bg-blue-600 rounded-lg text-sm leading-normal font-semibold text-white"
                                type="submit"
                            >
                                Guardar cambios
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default page;
