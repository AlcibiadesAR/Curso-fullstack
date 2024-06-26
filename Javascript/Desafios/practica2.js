// 1. Unir dos arrays: Crea una función llamada ‘unirArrays’ que tome dos arrays como parámetros y los una en uno solo. La función debe devolver el nuevo array.Para esto, averiguar qué hace el método .concat().

function unirArrays(array1, array2) {
  let nuevoArray = array1.concat(array2);
  return nuevoArray;
}

console.log(unirArrays([1, 2, 3], [4, 5, 6]));

// 2. Eliminar primer elemento: Crea una función llamada ‘eliminarPrimerElemento’ que tome un array como parámetro y elimine el primer elemento. La función debe devolver el elemento eliminado.

function eliminarPrimerElemento(frutas) {
  let frutaEliminada = frutas.shift();
  return frutaEliminada;
}

let arrayNew = ["Manzana", "Pera", "Uva"];
let eliminar = eliminarPrimerElemento(arrayNew);
console.log(arrayNew);
console.log(eliminar);

// 3. Convertir texto: Crea una función que reciba un string por parámetro y lo convierta a mayúsculas y minúsculas respectivamente. La función deberá mostrar los resultados por consola. Para esto, averiguar qué hacen los métodos de Strings: toUpperCase() y toLowerCase().

function convertirTexto(texto) {
  let textoEnMayuscula = texto.toUpperCase();
  console.log(textoEnMayuscula);
  let textoEnMinuscula = texto.toLowerCase();
  console.log(textoEnMinuscula);
}

convertirTexto("Hola Mundo");

// 4. Manipulación de objeto: Crea un objeto llamado ‘persona’ que contenga como propiedades: nombre, edad y ocupación. Crea una función que muestre cada propiedad de dicho objeto por consola, e invocala para ver sus valores. Luego, modifica el valor de ‘ocupación’ y agrega la propiedad ‘habilidad’. Llama nuevamente a la función creada para visualizar el cambio efectuado.

let persona = {
  nombre: "Emanuel",
  edad: 24,
  ocupacion: "cajero",
};

function objetoPersona(objeto) {
  console.log(objeto.nombre);
  console.log(objeto.edad);
  console.log(objeto.ocupacion);
  console.log(objeto.habilidad);
}

persona.ocupacion = "ayudante general";
persona.habilidad = "Organizado";
objetoPersona(persona);

// 5. objeto anidados: Agrega una nueva propiedad al objeto creado en el ejercicio anterior llamada ‘ubicacion’, donde deberás guardar un objeto interno con las propiedades: codigoPostal, ciudad, calle y número. Luego, crea una función que reciba dicho objeto por parámetro y le permita al usuario eliminar solo una de las propiedades del objeto.

persona.ubicacion = {
  codigoPostal: 3102,
  calle: "Calle del Sol",
  numero: 34,
  ciudad: "Penonomé",
};

function eliminarPropiedades(objeto, propiedades) {
  switch (propiedades) {
    case "nombre":
      delete objeto.nombre;
      break;
    case "edad":
      delete objeto.edad;
      break;
    case "ocupacion":
      delete objeto.ocupacion;
      break;
    case "habilidad":
      delete objeto.habilidad;
      break;
      case "ubicacion":
      delete objeto.ubicacion;
      break;
    default:
        console.log("Propiedad no válida")
      break;
  }
}

eliminarPropiedades(persona, "ubicacion");
console.log(persona)