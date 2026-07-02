//1ero Login
function login() {
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    if (user === "admin" && pass === "1234") {
        window.location.href = "clientes.html";
    } else {
        document.getElementById("msg").innerText = "Datos incorrectos";
    }
}

// DATOS SIMPLES EN MEMORIA
let clientes = [];
let productos = [];
let total = 0;


//2do Tyron Clientes
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

//3ro
function agregarProducto() {
    let p = document.getElementById("producto").value;
    let pr = document.getElementById("precio").value;

    productos.push({ nombre: p, precio: pr });

    mostrarProductos();
}

function mostrarProductos() {
    let lista = document.getElementById("listaProductos");
    lista.innerHTML = "";

    productos.forEach(p => {
        lista.innerHTML += "<li>" + p.nombre + " - $" + p.precio + "</li>";
    });
}

//4to
function agregarFactura() {
    let precio = parseFloat(document.getElementById("precioFact").value);
    total += precio;

    document.getElementById("total").innerText = "Total: " + total;
}

//5to

function verReportes() {
    document.getElementById("reportes").innerHTML =
        "<p>Clientes: " + clientes.length + "</p>" +
        "<p>Productos: " + productos.length + "</p>" +
        "<p>Total ventas: $" + total + "</p>";
}
