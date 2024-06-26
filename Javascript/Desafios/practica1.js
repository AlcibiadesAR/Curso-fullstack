/*1. validador de contraseña: Crea una variable llamada ‘contraseña’ donde guardes un valor específico. Luego, crea una función que reciba por parámetro un dato y utilizando operadores lógicos y condicionales, verifica si dicho parámetro coincide con la variable llamada ‘contraseña’. La función deberá mostrar por consola si la contraseña recibida es válida o no.*/

let contraseña = "Acosta21";

function validador(dato) {
  if (dato === contraseña) {
    console.log("La contraseña recibida es válida");
  } else {
    console.log("La contraseña recibida no es válida");
  }
}

validador("Acosta21");

/* 2. Calculadora de Índice de Masa Corporal (IMC): Crea una función que calcule el IMC utilizando los parámetros de peso y altura. Usa operadores aritméticos y condicionales para evaluar diferentes rangos de IMC (bajo peso, peso normal, sobrepeso, etc.).*/

function IMC(peso, altura) {
  let resultado = peso / altura ** 2;
  if (resultado < 18.5) {
    console.log(
      `Su IMC es: ${resultado.toFixed(1)}, por lo tanto tienes un bajo peso`
    );
  } else if (resultado < 24.9) {
    console.log(
      `Su IMC es: ${resultado.toFixed(1)}, por lo tanto tienes un peso normal`
    );
  } else if (resultado < 29.9) {
    console.log(
      `Su IMC es: ${resultado.toFixed(1)}, por lo tanto tienes sobrepeso`
    );
  } else if (resultado < 34.9) {
    console.log(
      `Su IMC es: ${resultado.toFixed(1)}, por lo tanto tienes obesidad I`
    );
  } else if (resultado < 39.9) {
    console.log(
      `Su IMC es: ${resultado.toFixed(1)}, por lo tanto tienes obesidad II`
    );
  } else if (resultado < 40) {
    console.log(
      `Su IMC es: ${resultado.toFixed(1)}, por lo tanto tienes obesidad III`
    );
  } else {
    console.log("los datos proporcionados son incorrectos!!");
  }
}

IMC(68, 1.6);

/* 3. Conversor de Monedas: Crea una función que convierta una cantidad de dinero de una moneda a otra. Usa variables para almacenar tasas de cambio y condicionales para manejar diferentes tipos de monedas.*/

function ConversorDeMonedas(cantidad, monedaSolicitada) {
  let tasaDeCambio = 0;
  switch (monedaSolicitada) {
    case "dólar":
      tasaDeCambio = 1.00;
      break;
      case "real":
      tasaDeCambio = 5.45;
      break;
      case "euro":
      tasaDeCambio = 0.94;
      break;
    default:
      console.log("los datos proporcionados no son correctos");
      return -1;
      break;
  }

  let resultado = cantidad * tasaDeCambio;
  console.log(`Su cantidad fue convertida a ${monedaSolicitada}: ${resultado.toFixed(2)}`);
}

ConversorDeMonedas(10, "euro")


/* 4. Evaluador de Rango de Edad: Escribe una función que determine en qué categoría de edad se encuentra una persona. Utiliza las estructuras que consideres necesarias para clasificar a las personas en rangos como niño, adolescente, adulto joven, adulto, etc., según su edad.*/

function RangoDeEdad(edad) {
  if( edad < 12 ){
    console.log("tu rango de edad es: Niñez");
  } else if(edad < 18){
    console.log("tu rango de edad es: Adolescente");
  } else if(edad < 30){
    console.log("tu rango de edad es: Adulto joven");
  } else if(edad < 60){
    console.log("tu rango de edad es: Adulto");
  } else {
    console.log("tu rango de edad es: vejez");
  }
}

RangoDeEdad(61)

/* 5. Generador de Mensajes Personalizados: Crea una función que genere un mensaje personalizado para un usuario según su nombre y el momento del día (solo tendremos en consideración si es de mañana, o es de tarde). Utiliza concatenación e interpolación para construir el mensaje, y condicionales (if ternario) para incluir diferentes saludos.*/

function generadorDeMensajes(usuario, horario) {
  let saludos = horario === "dia" ? "Hola, Buenos dias estimado" : "¡Buenas tardes! estimado";
  let mensaje = `${saludos} ${usuario} un gusto saber de usted`
  return mensaje
}

console.log(generadorDeMensajes("Juan Vargas", "tarde"))


