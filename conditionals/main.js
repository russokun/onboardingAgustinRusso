//Conditionals Exercises: low level

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

let number1 = prompt(`Enter number: (from 1 to 100) `)
let number2 = prompt(`Enter number: (from 1 to 100) `)
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
