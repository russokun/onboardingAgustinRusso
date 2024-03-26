//Loops Low levels
//1. y 2.
// Solicitar al usuario que ingrese un número entre 0 y 100
var numero = parseInt(prompt("Por favor, ingresa un número entre 0 y 100:"))
// Verificar si el número está dentro del rango válido
if (numero >= 0 && numero <= 100) {
// Utilizar un bucle for para imprimir en orden descendente desde el número ingresado hasta 0
	for (var i = numero; i >= 0; i--) {
		console.log(i)
}} 
else {
console.error("El número ingresado está fuera del rango válido.")
}
//3.
var tabla = parseInt(prompt("Introducir el numero a sacarle tabla del 1 al 10:"))
if(tabla>=1 && tabla <=10){
	for(var i = 1; i<=10; i++ ){
		let resultado = tabla*i
		console.log(`${i} x ${tabla} = ${resultado}`)
	}
}
var suma=0
while(true){
	var n = parseInt(prompt("introducir numero: (0 para salir)"))
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
//4.
var sumaa = 0
do {
	var n = parseInt(prompt("Introduce un número (0 para salir):"))
	// Verificamos si n es un número
	if (typeof n === 'number') {
		if (n > 0) {
			sumaa += n
		}
	} 
	else {
		console.error("¡Error! Debes ingresar un número válido.")
	}
}
while (n !== 0)
console.log("La suma total es: " + sumaa)
//5. y 6.
let personaje={
	nombre: "Agustin",
	apellido: "Russo",
	origen: "Chile",
	estudios: "Ingeniería Electronica",
	edad: 20
}
for (keys in personaje){
	console.log(keys)
}
for (values in personaje){
	console.log(personaje[values])
}
//Loops Mid levels
//1.
var numeroSecreto = suma; // Utilizamos la variable suma del ejercicio anterior como número secreto
var intentos = 0; // Inicializamos el contador de intentos en 0
do {
	var numeroIngresado = parseInt(prompt("Adivina el número secreto (0 para salir):"))
	// Verificar si el usuario quiere salir
	if (numeroIngresado === 0) {
		console.log("Has salido del juego.")
		break
	}
	// Incrementar el contador de intentos
	intentos++
	// Verificar si el número ingresado es igual al número secreto
	if (numeroIngresado === numeroSecreto) {
		console.log("¡Has acertado! El número secreto era " + numeroSecreto + " y has hecho " + intentos + " intentos.")
		break
	} 
	else if (numeroIngresado > numeroSecreto) {
		console.log("El número ingresado es mayor que el secreto.")
	} 
	else {
		console.log("El número ingresado es menor que el secreto.")
	}
} while (true)
//2.
function obtenerDivisores(x) {
	const divisores = []
	for (let i = 1; i <= x; i++) {
		if (x % i === 0) {
			divisores.push(i)
		}
	}
	return divisores
}
let num = parseInt(prompt("Ingresa un numero para saber sus todos sus divisores:"))
let divisoresDeNum = obtenerDivisores(num)
console.log(`los divisores de ${num} son: ${divisoresDeNum}`)
//3.
function timbre() {
	console.log("Ding Dong")
	return "Ding Dong"
}
function repetirTimbre(veces) {
	let cadena = ""
	for (let i = 0; i < veces; i++) {
		if (i > 0) {
			cadena += ", "
		}
		cadena += timbre();
	}
	return cadena
}
// Solicitar al usuario que ingrese un número
let veces = parseInt(prompt("Ingrese el número de veces que desea que suene el timbre:"))
// Verificar si el valor ingresado es un número válido
if (!isNaN(veces) && veces > 0) {
	const resultado = repetirTimbre(veces)
	console.log(resultado)
} else {
	console.log("Por favor, ingrese un número válido mayor que cero.")
}
//4.
const dateLimit = new Date("1997-08-03");
const fechas = ["1984-02-18", "1998-02-03", "1973-07-15", "2024-10-31", "2081-09-01"]
for (let i = 0; i < fechas.length; i++) {
  const fecha = new Date(fechas[i])
    if (fecha >= dateLimit) {
      console.log(fechas[i])
    }
}
//5.
const colores = ["Rojo", "Verde", "Azul", "Violeta", "Marrón", "Negro", "Blanco"]
for (const color of colores) {
  console.log(color)
}
//6.
function imprimirColores(array) {
	for (const color of array) {
		console.log(color)
	}
}
// Ejemplo de uso
const colors = ["Rojo", "Verde", "Azul", "Violeta", "Marrón", "Negro", "Blanco"]
imprimirColores(colors)
//7.
const numeros = [5, 7, 1, 3, 50]
for (const numero of numeros) {
  const doble = numero * 2
  console.log(`el número es ${numero} y su doble es ${doble}`)
}
//8.
const familia = [
	{ nombre: 'María', apellido: 'López', edad: 40, miembro: 'madre' },
	{ nombre: 'Juan', apellido: 'Perez', edad: 38, miembro: 'padre' },
	{ nombre: 'Romina', apellido: 'Perez', edad: 13, miembro: 'hija' },
	{ nombre: 'Tomás', apellido: 'Perez', edad: 10, miembro: 'hijo' }
]
function presentarFamilia(array) {
	for (const miembro of array) {
		console.log(`Hola, soy ${miembro.nombre} ${miembro.apellido} (${miembro.miembro}) y tengo ${miembro.edad} años.`)
	}
}
presentarFamilia(familia)
//Loops High levels.
//1.
let numero
let sumaPares = 0
let sumaImpares = 0
while (true) {
  numero = parseInt(prompt("Ingrese un número (ingrese 0 para terminar):"))
  if (numero === 0) {
    break;
  }
  else if (numero % 2 === 0) {
    sumaPares += numero;
  } 
	else {
    sumaImpares += numero;
	}
}
console.log(`Suma de números pares: ${sumaPares}`);
console.log(`Suma de números impares: ${sumaImpares}`);
