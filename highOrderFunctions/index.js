//1.
const imprimirMensaje= mensaje => console.log(mensaje)
//2.
const createMultplication=(number1,number2) => { 
  let resultado=number1*number2
  return resultado
}

//3.
const array = [ 1,2,3,4,5,6,7,8,9 ]
const arrayMapeado=array.map(createMultplication)
console.log(arrayMapeado)

//4.
function encontrarCervezasConMayorAlcohol(beers) {
  // Ordenar el array de cervezas por el índice de alcohol de mayor a menor
  beers.sort((a, b) => b.abv - a.abv)
  // Tomar las primeras 10 cervezas del array ordenado
  const cervezasConMayorAlcohol = beers.slice(0, 10)
  return cervezasConMayorAlcohol
}

// Llamar a la función y mostrar las 10 cervezas con mayor índice de alcohol
const cervezasConMayorAlcohol = [encontrarCervezasConMayorAlcohol(beers)]
console.log(cervezasConMayorAlcohol)
//.5

function encontrarCervezasConMenorAmargura(beers) {
  beers.sort((a, b)=> a.ibu-b.ibu)
  const cervezasConMenorAmargura = beers.slice(0, 10)
  return cervezasConMenorAmargura
}

const cervezasConMenorAmargura = [encontrarCervezasConMenorAmargura(beers)]
console.log(cervezasConMenorAmargura)
//6.

function encontrarCervezaPorNombre(beers, nombre){
  // Iterar sobre el array de cervezas
  for (let i = 0; i < beers.length; i++){
    // Verificar si el nombre de la cerveza coincide con el nombre ingresado
    if (beers[i].name == nombre) {
      // Devolver el objeto completo de la cerveza
      return beers[i]
    }
  }
  // Si no se encuentra ninguna coincidencia, devolver null
  return null
}
const cervezaBuscada = encontrarCervezaPorNombre(beers, "The End Of History")
if (cervezaBuscada) {
  console.log("Se encontró la cerveza:", cervezaBuscada)
} else {
  console.log("No se encontró ninguna cerveza con ese nombre.")
}
//7.
function buscarCervezaPorIBU(beers, ibu) {
  // Iterar sobre el array de cervezas
  for (let i = 0; i < beers.length; i++) {
    // Verificar si la propiedad ibu coincide con el valor ingresado
    if (beers[i].ibu === ibu) {
      // Devolver el primer objeto cuya propiedad ibu coincida con el valor ingresado
      return beers[i]
    }
  }
  // Si no se encuentra ninguna cerveza con el ibu especificado, mostrar un mensaje en la consola
  console.log(`No hay cerveza con un ibu de ${ibu}`)
  // Devolver null para indicar que no se encontró ninguna cerveza con el ibu especificado
  return null
}
//8.
function encontrarPosicionCerveza(nombreCerveza, beers) {
  // Iterar sobre el array de cervezas
  for (let i = 0; i < beers.length; i++) {
    // Verificar si el nombre de la cerveza coincide con el nombre ingresado
    if (beers[i].name === nombreCerveza) {
      // Devolver la posición de la cerveza en el array
      return i
    }
  }
  // Si no se encuentra la cerveza, imprimir un mensaje en la consola
  console.log(`${nombreCerveza} no existe en el array de cervezas`)
  // Devolver -1 para indicar que la cerveza no se encontró en el array
  return -1
}
//9.
function filtrarCervezasPorAlcohol(beers, nivelAlcohol) {
  // Filtrar las cervezas que no superan el nivel de alcohol
  const cervezasFiltradas = beers.filter(beers => beers.abv <= nivelAlcohol)
  // Mapear las cervezas filtradas para crear un nuevo array con las propiedades especificadas
  const nuevasCervezas = cervezasFiltradas.map(beers => {
    return {
      nombre: beers.name,
      alcohol: beers.abv,
      amargura: beers.ibu
    }
  })
  // Devolver el nuevo array con las cervezas filtradas y las propiedades requeridas
  return nuevasCervezas
}
//10.
function ordenarCervezasPorPropiedad(beers, propiedad, ascendente) {
  // Copiar el array de cervezas para no modificar el original
  const beersCopiadas = [...beers]
  // Ordenar las cervezas según la propiedad especificada y el orden (ascendente o descendente)
  beersCopiadas.sort((a, b) => {
    if (ascendente) {
      return a[propiedad] - b[propiedad]
    } else {
      return b[propiedad] - a[propiedad]
    }
  });
  // Devolver las primeras 10 cervezas del array ordenado
  return beersCopiadas.slice(0, 10)
}
//11.
function renderBeerTable(beers, tableId) {
  // Creamos un elemento de tabla en HTML
  const table = document.createElement('table')
  // Creamos una fila para el encabezado de la tabla
  const headerRow = table.insertRow()
  // Creamos celdas de encabezado para cada columna
  ['Name', 'ABV', 'IBU'].forEach(headerText => {
    const headerCell = document.createElement('th')
    headerCell.textContent = headerText
    headerRow.appendChild(headerCell)
  })
  // Creamos una fila para cada cerveza en el array
  beers.forEach(beer => {
    const row = table.insertRow()
    
    // Añadimos una celda para el nombre de la cerveza
    const nameCell = row.insertCell()
    nameCell.textContent = beer.name
    
    // Añadimos una celda para el contenido de alcohol
    const abvCell = row.insertCell()
    abvCell.textContent = beer.abv
    
    // Añadimos una celda para el índice de amargor
    const ibuCell = row.insertCell()
    ibuCell.textContent = beer.ibu
  })
  // Obtenemos el elemento HTML donde queremos insertar la tabla
  const tableContainer = document.getElementById(tableId)
  // Limpiamos cualquier contenido existente en ese elemento
  tableContainer.innerHTML = ''
  // Añadimos la tabla al elemento contenedor
  tableContainer.appendChild(table)
}

