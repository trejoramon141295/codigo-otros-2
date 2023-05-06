/**
 * Formulario bienvenidos a mi fiesta
 * 
 * Este Ejercicio fue para revisar de código de otros
 * Basicamente se ingresan tres campos en un formulario de HTML y
 * con los datos obtenidos se genera una Lista de Invitados con una ficha de cada participante,
 * con sus datos ya validados y la opcion de eliminarlos.  
 */

/**
 * Se fueron realizando varios cambios al Código para que funcionara; se mencionaran con forme fueron hechos.
 */
/** Se cambiaron los tipos de variable var por let */ 
/** Se Modifico el selector del formulario que era incorrecto de # a . */
let formulario = document.querySelector(".formulario");
/**
 * Obtiene los datos del Formulario
 * @param {*} event 
 * @readonly
 */
formulario.onsubmit = function (event) {
/** Se corrige que estaba mal escrito event.preventDefault();*/
  event.preventDefault();
/**
 * Aqui me quede en documentar la funcion
 */
  let n = formulario.elements[0];
  let e = formulario.elements[1];
  let na = formulario.elements[2];

  let nombre = n.value;
  let edad = e.value;

  let i = na.selectedIndex;
  let nacionalidad = na.options[i].value;
  console.log(nombre, edad);
  console.log(nacionalidad);

  if (nombre.length === 0) {
    n.classList.add("error");
    console.log("Nombre no valido");
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error");
    console.log("Edad fuera de rango");
  }

  if (nombre.length > 0 && (edad > 18 && edad < 120)) {
    console.log(nombre, edad, nacionalidad);
    agregarInvitado(nombre, edad, nacionalidad);
  }
}//formulario

// let botonBorrar = document.createElement("button")
// botonBorrar.textContent = "Eliminar invitado"
// botonBorrar.id = "boton-borrar";
// document.body.appendChild(botonBorrar);
let corteLinea = document.createElement("br");
document.body.appendChild(corteLinea);

/** 
 * Funcion para agregar un invitado
 * @param {String} nombre 
 * @param {Number} edad 
 * @param {String} nacionalidad 
 * @returns {HTMLDivElement}
 */
function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }

  let lista = document.getElementById("lista-de-invitados");
/** */
  let elementoLista = document.createElement("div");
/** Se corrige una siintaxis equivocada */
  elementoLista.classList.add("elemento-lista");
  lista.appendChild(elementoLista);
/** 
  *Se comentó el siguiente código: 
  * let spanNombre = document.createElement("span")
  * spanNombre.textContent = "Nombre: ";
  * let inputNombre = document.createElement("input")
  * inputNombre.value = nombre;
  * let espacio = document.createElement("br");
  * elementoLista.appendChild(spanNombre)
  * elementoLista.appendChild(inputNombre)
  * elementoLista.appendChild(espacio)
  * 
  * Ya que duplicaba informacion que otra función ya hace
  */
/**
 * Función para crear los Elementos de l ficha de incitado
 * @param {String} descripcion 
 * @param {String} valor 
 * @returns {appendChild}
 */
  function crearElemento(descripcion, valor) {
    let spanNombre = document.createElement("span")
    let inputNombre = document.createElement("input")
    let espacio = document.createElement("br")
    spanNombre.textContent = descripcion + ": "
    inputNombre.value = valor
    elementoLista.appendChild(spanNombre)
    elementoLista.appendChild(inputNombre)
    elementoLista.appendChild(espacio)
  }//crearElemento
/**
 * Se llama a la funcion crearElemento de los tres parametro de la ficha de invitad
 */
  crearElemento("Nombre", nombre);
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidad);


  let botonBorrar = document.createElement("button")
  botonBorrar.textContent = "Eliminar invitado"
  botonBorrar.id = "boton-borrar";
  let corteLinea = document.createElement("br");
  elementoLista.appendChild(corteLinea);
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function () {
    // this.parentNode.style.display = 'none';
    botonBorrar.parentNode.remove();
  }//botonBorrar
}//agregarInvitado