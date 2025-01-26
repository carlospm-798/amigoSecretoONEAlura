/**
 * @author Carlos Paredes Márquez
 * @date Jan 25, 2025
 * Challenge Amigo Secreto:
 * Este reto consiste en agregar diversas funcionalidades
 * a un projecto HTML con CSS y JavaScript.
 */

let nombresAmigos = [];

function asignarTextoElemento(elemento, texto) {
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    return;
}

function escribirNombre() {
    let nombre = document.getElementById('amigo').value;
    
    if (!(nombresAmigos.includes(nombre))) {
        asignarTextoElemento('h2', 'Digite el nombre de sus amigos');
        nombresAmigos.push(nombre);
    } else if (nombre == '') {
        alert("No se pueden agregar espacios vacios");
    } else {
        asignarTextoElemento('h2', `${nombre} ya existe en la lista :)`);
    }

    return;
}