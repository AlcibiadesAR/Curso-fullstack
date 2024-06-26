const prompt = require("prompt-sync")({ sigint: true });

function suma(numero1, numero2) {
  return numero1 + numero2;
}

function resta(numero1, numero2) {
  return numero1 - numero2;
}

function multiplicacion(numero1, numero2) {
  return numero1 * numero2;
}

function division(numero1, numero2) {
  if (numero2 == 0) {
    return "No se puede dividir en 0, debe elegir otro numero";
  } else {
    return numero1 / numero2;
  }
}

let usuario = prompt("Indica cual es tu nombre: ");
console.log(`\n!Bienvenido a tu calculadora digital ${usuario}!`);
console.log("\nEstas son tus opciones disponibles");
console.log("1. suma");
console.log("2. resta");
console.log("3. multiplicacion");
console.log("4. division");
let opcion = parseFloat(prompt("\nIndica la opcion que desea realizar: "));
let numero1;
let numero2;
let resultado;

switch (opcion) {
  case 1:
    numero1 = parseFloat(prompt("Indica tu primer numero: "));
    numero2 = parseFloat(prompt("Indica tu segundo numero: "));
    resultado = suma(numero1, numero2);
    console.log(`Tu resultado de la suma es: ${resultado}`);
    break;
  case 2:
    numero1 = parseFloat(prompt("Indica tu primer numero: "));
    numero2 = parseFloat(prompt("Indica tu segundo numero: "));
    resultado = resta(numero1, numero2);
    console.log(`Tu resultado de la resta es: ${resultado}`);
    break;
  case 3:
    numero1 = parseFloat(prompt("Indica tu primer numero: "));
    numero2 = parseFloat(prompt("Indica tu segundo numero: "));
    resultado = multiplicacion(numero1, numero2);
    console.log(`Tu resultado de la multiplicacion es: ${resultado}`);
    break;
  case 4:
    numero1 = parseFloat(prompt("Indica tu primer numero: "));
    numero2 = parseFloat(prompt("Indica tu segundo numero: "));
    resultado = division(numero1, numero2);
    if (typeof resultado == "string") {
        console.log(resultado);
    } else {
        console.log(`Tu resultado de la division es: ${resultado}`);
    }
    break;
  default:
    console.log("Ingreso una opcion incorrecta");
    break;
}
