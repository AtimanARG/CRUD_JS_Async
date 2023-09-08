/* 
CRUD Métodos HTTP
C = Create (POST)
R = Read (GET)
U = Update (PUT/PATCH)
D = Delete (DELETE)
*/

//Fetch API
const listaClientes = () => fetch("http://localhost:3000/perfil").then( (respuesta) => respuesta.json() );


export const clientServices = {
    listaClientes,
};

