// 1. BubbleSort
function ordenarDeMenorAMayor(numero) {
  for (let i = 0; i < numero.length; i++) {
    for (let j = 0; j < numero.length; j++) {
      if (numero[j] > numero[j + 1]) {
        let temp = numero[j];
        numero[j] = numero[j + 1];
        numero[j + 1] = temp;
      }
    }
  }
  return numero;
}

let numeros = [50, 70, 30, 40, 20, 80, 60, 10];
let ordenar = ordenarDeMenorAMayor(numeros);
console.log(ordenar);

// 2. Indicar ordenamiento
function verificarOrdenDeUnArray(numero) {
  let orden = true;
  for (let i = 0; i < numero.length; i++) {
    for (let j = 0; j < numero.length; j++) {
      if (numero[j] > numero[j + 1]) {
        orden = false;
      }
    }
  }
  return orden;
}

let verificar = verificarOrdenDeUnArray(numeros);
console.log(verificar)

// 3. Contar la cantidad de veces que aparece un número en un array

function contarCantidadDeVeces(numero, array) {
  let contador = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === numero) {
      contador++;
    }
  }
  return console.log(`El número ${numero} aparece ${contador} veces.`);
}

let arrayDeNumeros = [1, 2, 3, 4, 5, 6, 2, 5, 2];
contarCantidadDeVeces(5, arrayDeNumeros);


// Obtener votos

// búsqueda lineal
const temasMusicales = [
  { nombre: "Blinding Lights", votos: 1200000 },
  { nombre: "Shape of You", votos: 1050000 },
  { nombre: "Dance Monkey", votos: 950000 },
  { nombre: "Despacito", votos: 890000 },
  { nombre: "Uptown Funk", votos: 870000 },
];

function busquedaLineal(tema, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].nombre === tema) {
      return `El ${tema} obtuvo ${array[i].votos} votos.`;
    }
  }
  return "Tema musical no encontrado";
}

let resultado = busquedaLineal("Uptown Funk", temasMusicales);
console.log(resultado);

//búsqueda binaria

function busquedaBinaria(array, temaABuscar) {
  let indiceDeBusqueda = 0;
  let indiceFinal = array.length - 1;

  while (indiceDeBusqueda <= indiceFinal) {
    const INDICEDELAMITAD = Math.round((indiceDeBusqueda + indiceFinal) / 2);
    const ELEMENTODELMEDIO = array[INDICEDELAMITAD];

    if (ELEMENTODELMEDIO.nombre === temaABuscar) {
      return ELEMENTODELMEDIO.votos;
    }
    if (ELEMENTODELMEDIO.nombre > temaABuscar) {
      indiceFinal = INDICEDELAMITAD - 1;
    } else {
      indiceDeBusqueda = INDICEDELAMITAD + 1;
    }
  }
  return null;
}

let resultado2 = busquedaBinaria(temasMusicales, "Uptown Funk");
console.log(resultado2);


