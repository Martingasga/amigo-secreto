/*
    Curso Lógica de programación: Challenge amigo secreto
    Desafío amigo secreto
    Martín Emmanuel Gasga Varela
    13/02/2025
*/
let amigos = []; // Array para almacenar los nombres de los amigos.

function agregarAmigo() {
    let input = document.getElementById("nombre");
    let nombre = input.value.trim();
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agrega al menos un nombre antes de sortear.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSeleccionado = amigos[indiceAleatorio];
    document.getElementById("resultado").textContent = `El amigo secreto es: ${amigoSeleccionado}`;
}