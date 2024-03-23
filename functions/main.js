var add = function(num1, num2){
    let resultado = num1*num2;
    return resultado
}
let num1=100
let num2=20
let resultado = add (num1,num2);
console.log(resultado)

//FUNCTIONS MID LEVELS

function greet(name){
    let saludo = `Hola ! ${name}, que gusto verte :D`
    return saludo
}
let name = 'Agustin'
let saludo = greet()
console.log(saludo)

var product = function(n1, n2){
    let result = n1*n2;
    return result
}
n2=4
n1=20
let producto = product(n1,n2);
console.log(producto)

function area(base, altura){
    baseAltura = base*altura
    resultadi = baseAltura/2
    return resultadi
}

function perimetro(lado1,lado2,lado3){
    sumaLados = lado1+lado2+lado3
    return sumaLados
}

function market(precio, cantidad){
    total=precio*cantidad
    if(cantidad>9){
    descuento = total*0,1
    totalFinal = total-descuento
    return totalFinal
    }
    else if(cantidad>19){
    descuento=total*0,2
    totalFinal = total-descuento
    return totalFinal
    }
    else{
        return total
    }
}

function isAnAdult(edad) {
    if (edad >= 18) {
      return "Eres mayor de edad";
    } 
    else {
      return "No eres adulto";
    }
}

//high level functions excercises
function calcularImpuesto(ingresoAnual) {
    if (ingresoAnual <= 10000) {
        return ingresoAnual * 0.10; // Impuesto del 10% para ingresos menores o iguales a $10,000
    } else if (ingresoAnual <= 20000) {
        return ingresoAnual * 0.15; // Impuesto del 15% para ingresos mayores a $10,000 y menores o iguales a $20,000
    } else {
        return ingresoAnual * 0.20; // Impuesto del 20% para ingresos mayores a $20,000
    }
}

// Ejemplo de uso de la función:
var ingreso = 15000; // Ingreso anual de la persona
var impuesto = calcularImpuesto(ingreso);
console.log("El impuesto a pagar es: $" + impuesto);

function verificarDia(numero) {
    switch (numero) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            return "Es un día hábil";
        case 6:
        case 7:
            return "Es fin de semana";
        default:
            return "Número de día inválido";
    }
}

// Ejemplo de uso de la función:
var dia = 3; // Número de día a verificar
var mensaje = verificarDia(dia);
console.log(mensaje);

// Función para obtener la información personal del usuario
function obtenerInformacionPersonal() {
    // Solicitar nombre al usuario
    var nombre = prompt("Ingrese su nombre:");

    // Validar si el nombre está vacío
    if (!nombre) {
        console.error("El nombre no puede estar vacío");
        return; // Detener la ejecución de la función si el nombre está vacío
    }

    // Solicitar apellido al usuario
    var apellido = prompt("Ingrese su apellido:");

    // Validar si el apellido está vacío
    if (!apellido) {
        console.error("El apellido no puede estar vacío");
        return; // Detener la ejecución de la función si el apellido está vacío
    }

    // Solicitar edad al usuario
    var edad = prompt("Ingrese su edad:");

    // Convertir la edad a un número entero
    edad = parseInt(edad);

    // Validar si la edad es un número válido
    if (isNaN(edad) || edad <= 0) {
        console.error("La edad ingresada no es válida");
        return; // Detener la ejecución de la función si la edad no es válida
    }

    // Crear un objeto con la información personal
    var informacionPersonal = {
        nombre: nombre,
        apellido: apellido,
        edad: edad
    };

    // Mostrar la información personal por consola
    console.log("Información personal:");
    console.log(informacionPersonal);
}

// Llamar a la función para obtener la información personal del usuario
obtenerInformacionPersonal();

// Función de saludo
function saludo(nombre) {
    return "Hola, mi nombre es " + nombre;
}

// Función para calcular la edad
function calcularAge(yearOfBirth, currentYear) {
    return currentYear - yearOfBirth;
}

// Función para presentar al usuario
function presentacion() {
    // Solicitar nombre al usuario
    var nombre = prompt("Ingrese su nombre:");
    // Solicitar año de nacimiento al usuario
    var yearOfBirth = prompt("Ingrese su año de nacimiento:");
    // Obtener el año actual
    var currentYear = new Date().getFullYear();

    // Calcular la edad del usuario
    var edad = calcularAge(parseInt(yearOfBirth), currentYear);

    // Generar el saludo con el nombre del usuario
    var mensajeSaludo = saludo(nombre);
    // Generar el mensaje de presentación con la edad del usuario
    var mensajePresentacion = mensajeSaludo + ". Tengo " + edad + " años.";

    // Mostrar el mensaje de presentación en una alerta
    alert(mensajePresentacion);
}

// Llamar a la función para presentar al usuario
presentacion();
