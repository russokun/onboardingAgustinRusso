//Conditionals Exercises: low level
//1, 2 y 3.
num1 = 4
num2 = 5
if(num1>num2){
  console.log(num1)
  console.log("Los numeros Son Distintos.")
}
else if(num2>num1){
  console.log(num2)
  console.log("Los numeros Son Distintos.")
}
else{
  console.log("Los numeros Son iguales.")
}
//4 y 5.
let fecha1 = "2018-9-2";
let fecha2 = "2023-7-5";
// Convertir cadenas a objetos Date
let date1 = new Date(fecha1);
let date2 = new Date(fecha2);
// Obtener valores numéricos de las fechas
let valor1 = date1.getTime();
let valor2 = date2.getTime();
// Comparar las fechas
if (valor1 > valor2){
  console.log(`La fecha ${fecha1} es mayor que ${fecha2}`);
}
else if (valor1 < valor2){
  console.log(`La fecha ${fecha2} es mayor que ${fecha1}`);
}
else{
  console.log("Las fechas son iguales");
}
//6.
num3 = 7
if(num1>num2 && num1>num3){
  console.log(`el numero ${num1} es el mas grande`)
}
else if(num2>num1 && num2>num3){
  console.log(`el numero ${num2} es el mas grande`)
}
else{
  console.log(`el numero ${num3} es el mas grande`)
}
//Conditionals Exercises: mid level
//1.
let colorIngresado = prompt(`Enter color: (red(1), blue(2) or green(3)) `)
let color = parseInt(colorIngresado);
switch(color){
  case 1:
    console.log(`red: “The color of passion”`)
    break;
  case 2:
    console.log(`blue: “The color of the sea”`)
    break;
  case 3:
    console.log(`green: “The color of nature”`)
    break;
}
//2.
let number1 = parseInt(prompt(`Enter number: (from 1 to 100) `))
let number2 = parseInt(prompt(`Enter number: (from 1 to 100) `))
let operacion = prompt("Ingrese la operación (suma, resta, multiplicacion, division):").toLowerCase();
// Realizar la operación y imprimir el resultado
switch (operacion) {
  case "suma":
    let suma = number1 + number2;
    console.log(`La suma de ${number1} y ${number2} es: ${suma}`);
    break;
  case "resta":
    let resta = number1 - number2;
    console.log(`La resta de ${number1} y ${number2} es: ${resta}`);
    break;
  case "multiplicacion":
    let multiplicacion = number1 * number2;
    console.log(`La multiplicación de ${number1} y ${number2} es: ${multiplicacion}`);
    break;
  case "division":
    if (number2 === 0) {
      console.log("No se puede dividir entre cero.");
    } 
    else {
      let division = number1 / number2;
      console.log(`La división de ${number1} entre ${number2} es: ${division}`);
    }
    break;
  default:
    console.log("Operación no válida.");
}
//3.
let persona1 = {nombre:"cristian",edad:15,altura:1.69}
let persona2 = {nombre:"nicolas",edad:16,altura:1.75}
let mensajeAltura, mensajeEdad
if(persona1.altura >persona2.altura){
  mensajeAltura = `${persona1.nombre} es mas alto que ${persona2.nombre}`
}
else{
  mensajeAltura = `${persona2.nombre} es más alto que ${persona1.nombre}`
}
if(persona1.edad > persona2.edad){
  mensajeEdad = `y ${persona1.nombre} es mayor que ${persona2.nombre}`
}
else{
  mensajeEdad = `y ${persona2.nombre} es mayor que ${persona1.nombre}`
}
console.log(`${mensajeAltura} ${mensajeEdad}`)
//4.
function solicitarValor(mensaje){
  let valor = prompt(mensaje)
  return valor;
}
let persona = {}
persona.nombre = solicitarValor("Ingresa tu nombre:")
persona.edad = solicitarValor("Ingresa tu edad:")
persona.altura = solicitarValor("Ingresa tu altura (en metros):")
persona.vision = solicitarValor("Ingresa tu Nivel de vision:(1-10)")
if (persona.edad >= 18 && persona.altura > 1.10 && persona.vision > 7){
  console.log(`Estas calificado para conducir`)
}
else{
  console.log(`No calificas para conducir`)
}
//5.
promptEdad = prompt('Ingresa tu edad:')
if(promptEdad <= 12){
  console.log('eres un infante')
}
else if(promptEdad > 12 && promptEdad < 19){
  alert('Eres un adolescente')
}
else if(promptEdad>18 && promptEdad<46){
  console.log('Eres un Adulto Joven')
}
else if(promptEdad > 45 && promptEdad <=100){
  console.log('Eres un Adulto Mayor')
}
else{
  console.log('¿Es realmente tan viejo?')
}
//6.
opcion = parseInt(prompt('ingresa un numero del 1 al 3'))
datoNumerico = prompt('Ingresa cualquier numero:')
if(opcion == 1){
  alert(`El numero ingresado es: ${datoNumerico}`)
}
else if(opcion==2){
  datoNumerico = datoNumerico*2
  alert(`El doble del numero ingresado es: ${datoNumerico}`)
}
else if(opcion == 3){
  datoNumerico = datoNumerico*3
  alert(`El triple del numero ingresado es: ${datoNumerico}`)
}
else{
  alert('ese valor no esta permitido')
}
//Conditionals High Levels 
//1.
// Solicitar los datos iniciales
const nombre = prompt("Ingresa tu nombre:");
const pase = prompt("Ingresa tu pase (vip o normal):").toLowerCase();
const entrada = prompt("¿Tienes entrada? (sí o no):").toLowerCase();
// Verificar si el nombre coincide
if (nombre === "Juan") {
  alert(`¡Bienvenido ${nombre}!`);
}
else if (pase === "vip") {
  // Verificar si tiene pase VIP
  alert("¡Bienvenido, pase VIP!");
} 
else if (entrada === "sí") {
  // Verificar si tiene entrada
  const usarEntrada = prompt("¿Quieres usar tu entrada? (sí o no):").toLowerCase();
  if (usarEntrada === "sí") {
    alert("¡Bienvenido!");
  } 
  else {
    alert("Gracias por visitarnos. ¡Hasta pronto!");
  }
} 
else {
  // No tiene nombre, pase VIP ni entrada
  const comprar = prompt("¿Quieres comprar una entrada? (sí o no):").toLowerCase();
  if (comprar === "no") {
    alert("Gracias por visitarnos. ¡Hasta pronto!");
  } 
  else {
    const dineroDisponible = parseFloat(prompt("Ingresa tu dinero disponible:"));
    if (dineroDisponible >= 1000) {
      alert("¡Venta exitosa! ¡Bienvenido!");
    } 
    else {
      alert("Lo sentimos, no tienes suficiente dinero para comprar una entrada.");
    }
  }
}