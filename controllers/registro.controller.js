import { clientServices } from "../service/client-service.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", async(evento) => {
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;

    try {
        await clientServices.crearCliente(nombre, email)
        window.location.href = "/screens/registro_completado.html";
    } catch(error){
        window.location.href = "/screens/error.html";
    }
});