function calcularEdad() {
    const fechaNacimiento = prompt("Ingresa tu fecha de nacimiento en formato 'YYYY-MM-DD':");
    const nombre = prompt("Ingresa tu nombre:");
    const fechaActual = new Date();
    const fechaNac = new Date(fechaNacimiento);
    const edad = fechaActual.getFullYear() - fechaNac.getFullYear();
    alert(`Hola ${nombre}, tienes ${edad} años!`);
}

// Función para Tirando Fruta
function tirandoFruta() {
    const frutas = ["manzana", "banana", "naranja", "uva", "pera", "kiwi", "sandía", "durazno", "fresa", "mango"];
    const frutaUsuario = prompt("Ingresa una fruta:");
    
    if (frutas.includes(frutaUsuario.toLowerCase())) {
        alert(`Sí, tenemos ${frutaUsuario}!`);
    } else {
        alert(`No, no tenemos ${frutaUsuario}!`);
    }
}

// Función para Comparando Datos y Tipos
function comparandoDatosTipos() {
    const resultadoA = 10 == '10'; // Comparación con ==
    const resultadoB = 10 === '10'; // Comparación con ===
    const tipoDato = typeof 10.6; // Tipo de dato de 10.6
    const resultadoC = true == 1; // Comparación de true con 1

    alert(`10 == '10': ${resultadoA}\n10 === '10': ${resultadoB}\nTipo de dato de 10.6: ${tipoDato}\ntrue == 1: ${resultadoC}`);
}

// Función para Yo Objeto
function objetoCiudad() {
    const ciudad = {
        nombre: "Ciudad Ejemplo",
        fechaFundacion: "01-01-1800",
        poblacion: 1000000,
        extension: 1500
    };

    for (const clave in ciudad) {
        alert(`Clave: ${clave}, Valor: ${ciudad[clave]}`);
    }
}

// Función para Doble de Elementos
function dobleElementos() {
    const numeros = [1, 2, 3, 4, 5];
    const resultado = numeros.map(numero => numero * 2);
    alert(`Array original: [${numeros.join(", ")}]\nDoble de elementos: [${resultado.join(", ")}]`);
}

// Función para Triángulo de Asteriscos
function trianguloAsteriscos() {
    const altura = prompt("Ingresa la altura del triángulo:");
    let asteriscos = '';

    for (let i = 1; i <= altura; i++) {
        asteriscos += '*'.repeat(i) + '\n';
    }

    alert(asteriscos);
}

// Función para Nombres con 'A'
function nombresConA() {
    const listaNombres = prompt("Ingresa una lista de nombres separados por coma:");
    const nombres = listaNombres.split(',').map(nombre => nombre.trim());
    const nombresConA = nombres.filter(nombre => nombre.charAt(0).toLowerCase() === 'a');
    document.body.innerHTML = `<h2>Nombres que comienzan con 'A':</h2><ul>${nombresConA.map(nombre => `<li>${nombre}</li>`).join('')}</ul>`;
}

// Función para Reemplazar Palabras
function reemplazarPalabras() {
    const texto = prompt("Ingresa un texto:");
    const palabraBuscada = prompt("Ingresa la palabra que deseas reemplazar:");
    const palabraReemplazo = prompt("Ingresa la palabra de reemplazo:");
    const nuevoTexto = texto.replace(new RegExp(palabraBuscada, 'g'), palabraReemplazo);
    document.body.innerHTML = `<h2>Texto resultante:</h2><p>${nuevoTexto}</p>`;
}

// Función para Cortar Texto
function cortarTexto() {
    const texto = prompt("Ingresa un texto:");
    const numeroCaracteres = parseInt(prompt("Ingresa el número de caracteres para cortar:"));
    const textoCortado = texto.slice(0, numeroCaracteres);
    document.body.innerHTML = `<h2>Texto cortado:</h2><p>${textoCortado}</p>`;
}

// Función para String con Separador
function stringConSeparador() {
    const elementos = prompt("Ingresa una lista de elementos separados por coma:");
    const elementosSeparados = elementos.split(',').map(elemento => elemento.trim()).join(' - ');
    document.body.innerHTML = `<h2>String con separador:</h2><p>${elementosSeparados}</p>`;
}

// Función para Calculadora de Recaudación
function calculadoraRecaudacion() {
    const pedido = prompt("Ingresa una lista de pedidos en el formato 'nombre:total' separados por coma:");
    const pedidosArray = pedido.split(',').map(pedido => pedido.trim().split(':'));
    let totalRecaudacion = 0;

    for (const pedido of pedidosArray) {
        const total = parseFloat(pedido[1]);
        if (!isNaN(total)) {
            totalRecaudacion += total;
        }
    }

    document.body.innerHTML = `<h2>Recaudación Total:</h2><p>${totalRecaudacion.toFixed(2)}</p>`;

}