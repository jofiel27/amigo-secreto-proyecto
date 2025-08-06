// Lista donde se almacenarán los amigos
const listaAmigos = [];

const lista = document.getElementById("listaAmigos");
lista.innerHTML = ""; // Limpiar la lista al iniciar
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    const lista = document.getElementById("listaAmigos");

    // Validar que no esté vacío y que contenga solo letras
    if (nombre === "" || !/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) {
        alert("Añada un nombre válido y escribe solo letras");
        return;
    }

    // Agregar a la lista y mostrar en pantalla
    listaAmigos.push(nombre);
    
    const item = document.createElement("li");
    item.textContent = nombre;
    lista.appendChild(item);

    input.value = ""; // Limpiar input
}

function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar resultado anterior

    if (listaAmigos.length === 0) {
        alert("Añada al menos un amigo antes de sortear");
        return;
    }

    const indice = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[indice];

    const resultadoItem = document.createElement("li");
    resultadoItem.textContent = `Tu amigo secreto es: ${amigoSecreto}`;
    resultado.appendChild(resultadoItem);
}
