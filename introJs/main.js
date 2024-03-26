//Low level Js Basic exercises
//1,2,3,4,5,6,7
let myName = 'Agustin'
//console.log(myName)
let myLastName = 'Russo'
let myAge = 20
let myPet = 'Doge'
let petAge = 5
const nombreCompleto = myName+" "+myLastName
//console.log(nombreCompleto)
let presentationText = "Hola mi nombre es: "+nombreCompleto+` tengo ${myAge} years y mi perro se llama ${myPet} y el tiene ${petAge} years.`
console.log(presentationText)
//Medium level Js Basic exercises
//1.
let sumAges = myAge+petAge
console.log(sumAges)
let subractAges = myAge-petAge
console.log(subractAges)
let productAges = myAge*petAge
console.log(productAges)
let divisionAges = myAge/petAge
console.log(divisionAges)
//2.
let student = {
  nombre:'Agustin',
  apellido:'Russo',
  edad:20,
  altura:1.90,
  peso:68,
}
console.table(student)
console.log(student.nombre)
console.log(student.apellido)
console.log(student.edad)
console.log(student.altura)
console.log(student.peso)
//3.
let pet = {
  nombre:'Doge',
  color:'white',
  edad:5,
  raza:'akita inu',
  peso:30,
}
console.table(pet)
console.log(pet.nombre)
console.log(pet.color)
console.log(pet.edad)
console.log(pet.raza)
console.log(pet.peso)
//4.
const fruits = ['apple', 'banana', 'orange', 'kiwi', 'mango'];
console.log('frutas:', fruits);
for (let i = 0; i < fruits.length; i++) {
  console.log(`Elemento ${i}: ${fruits[i]}`);
}
//High Level JS Basic exercises 
//1.
let edad = prompt('ingresa tu edad: ')
iAmAdult = null
if (edad>=18){
  iAmAdult = true
  console.log(`I am an adult: ${iAmAdult}`)
}
else{
  iAmAdult = false
  console.log(`I am an adult: ${iAmAdult}`)
}
//2.
let numbers = [5, 10, 15,  20, 25];
for (let i = 0; i < numbers.length; i++) {
  console.log(`Elemento ${i}: ${numbers[i]}`);
}
//3.
let family = [`Lorena, Isidora, Nicolas, Javier, Agustin,`]
// Obtener la cadena de texto del primer elemento del array
let nombres = family[0];
// Inicializar variables para rastrear la posición de los nombres
let inicioNombre = 0;
// Iterar sobre la cadena de texto
for (let i = 0; i < nombres.length; i++) {
  // Si encontramos una coma, un espacio en blanco o es el final de la cadena
  if (nombres[i] === ',' || nombres[i] === ' ' || i === nombres.length - 1) {
    // Extraer el nombre desde la posición inicial hasta la posición actual
    let nombre = nombres.substring(inicioNombre, i).trim();
    console.log(nombre); // Imprimir el nombre
    // Actualizar la posición inicial para el próximo nombre
    inicioNombre = i + 1;
  }
}
//4.
let randomText = console.log(`${student.nombre} a subido a ${student.peso} kg ya que a comido mas de ${numbers[3]} ${fruits[1]}s`)