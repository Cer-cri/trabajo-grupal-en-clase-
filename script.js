function agregarCliente() {
    let nombre = document.getElementById("nombre").value;
    clientes.push(nombre);

    mostrarClientes();
}

function mostrarClientes() {
    let lista = document.getElementById("listaClientes");
    lista.innerHTML = "";

    clientes.forEach(c => {
        lista.innerHTML += "<li>" + c + "</li>";
    });
}
