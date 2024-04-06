document.addEventListener("DOMContentLoaded", function(){
  const formulario = document.getElementById("form")
  const wall = document.getElementById("wall")
  formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe
    var clases = document.getElementsByName("clase");
    var claseSeleccionada = "";
    // Busca la clase seleccionada
  for (var i = 0; i < clases.length; i++){
    if (clases[i].checked) {
      claseSeleccionada = clases[i].value;
      break;
    }
  }
    const colorSeleccionado = document.getElementById("colorInput").value
    const textoIngresado = document.getElementById("textoInput").value
    // Crear un nuevo div
    const nuevoDiv = document.createElement("div")
    nuevoDiv.classList.add("graffiti")
    nuevoDiv.style.width = "300px"
    nuevoDiv.style.height = "300px"
    nuevoDiv.style.backgroundColor = colorSeleccionado
    nuevoDiv.textContent = textoIngresado
    if (claseSeleccionada === "graffiti"){
      nuevoDiv.classList.add("italic");
  } else {
      nuevoDiv.classList.add("font-normal");
  }
    const closeButton = document.createElement("span")
    closeButton.classList.add("cerrar","text-lg", "font-bold")
    closeButton.textContent = "X"
    closeButton.addEventListener("click", function() {
      wall.removeChild(nuevoDiv)
    })
    // Agregar el nuevo div al div con id "wall"
    nuevoDiv.appendChild(closeButton)
    wall.appendChild(nuevoDiv)
  })
})
