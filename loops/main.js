//Loops Low levels

// Solicitar al usuario que ingrese un número entre 0 y 100
var numero = parseInt(prompt("Por favor, ingresa un número entre 0 y 100:"));

// Verificar si el número está dentro del rango válido
if (numero >= 0 && numero <= 100) {
    // Utilizar un bucle for para imprimir en orden descendente desde el número ingresado hasta 0
    for (var i = numero; i >= 0; i--) {
        console.log(i);
    }
} else {
    console.error("El número ingresado está fuera del rango válido.");
}

var tabla = parseInt(prompt("Introducir el numero a sacarle tabla del 1 al 10:"));

if(tabla>=1 && tabla <=10){
    for(var i = 1; i<=10; i++ ){
        let resultado = tabla*i
        console.log(`${i} x ${tabla} = ${resultado}`)
    }
}
var suma=0
while(true){
    var n = parseInt(prompt("introducir numero: (0 para salir)"));
    if(n===0){
        break
    }
    if(n>0){
        suma += n
    }
    else{
        console.error("Error! debes ingresar un numero valido.")
    }
}
console.log("La suma total es: "+ suma)

var suma = 0
do {
    var n = parseInt(prompt("Introduce un número (0 para salir):"));
    // Verificamos si n es un número
    if (typeof n === 'number') {
        if (n > 0) {
            suma += n;
        }
    } 
    else {
        console.error("¡Error! Debes ingresar un número válido.");
    }
}
while (n !== 0);
console.log("La suma total es: " + suma);

let personaje={
    nombre: "Agustin",
    apellido: "Russo",
    origen: "Chile",
    estudios: "Ingeniería",
    edad: 20
}

//Loops Mid levels
var numeroSecreto = suma; // Utilizamos la variable suma del ejercicio anterior como número secreto
var intentos = 0; // Inicializamos el contador de intentos en 0

do {
    var numeroIngresado = parseInt(prompt("Adivina el número secreto (0 para salir):"));
    
    // Verificar si el usuario quiere salir
    if (numeroIngresado === 0) {
        console.log("Has salido del juego.");
        break;
    }
    
    // Incrementar el contador de intentos
    intentos++;

    // Verificar si el número ingresado es igual al número secreto
    if (numeroIngresado === numeroSecreto) {
        console.log("¡Has acertado! El número secreto era " + numeroSecreto + " y has hecho " + intentos + " intentos.");
        break;
    } 
    else if (numeroIngresado > numeroSecreto) {
        console.log("El número ingresado es mayor que el secreto.");
    } 
    else {
        console.log("El número ingresado es menor que el secreto.");
    }
} while (true);
