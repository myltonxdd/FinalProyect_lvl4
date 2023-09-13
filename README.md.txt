Tenemos las 5 tablas: Bitacoras, Roles, Enlaces, Usuarios, Paginas, Personas.

Correr los seeders y ver un usuario aleatorio.
La contraseña es: 12345
O crear un usario.

-La constraseñas estan hasheadas
Cuando se crea un usuario se crea: persona->usario->bitacora

-Esta completamente implementado en el Backend los JWT
-El token es recibido en el fronted y lo guarda en el local storage.

//////////////////// OJO/////////////////////
Todo el FRONT corre en el puerto: http://localhost:3000/...
Todo el BACK corre en el puerto: http://127.0.0.1:8000/...

Si se respeta los puertos el programa corre sin problemas.