
// Spread Operator en Arrays
let number = [90,75,90,85];

const sum = (a,b,c,d) =>{
  return a + b + c + d;
}

const promedio = () =>{
  let notaFinal = sum(...number)
     
  return notaFinal / number.length
}

console.log(promedio())

// Spread Operator en objetos

const persona = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 24
}

const newPersona = {
  ...persona,
  email: "Juanperez@gmail.com"
}


console.log(persona);
console.log(newPersona)

// set 

let array = [1, 4, 5, 6, 6, 7, 8, 1, 4];

let set = new Set(array); // se elimina los duplicados
console.log(set);

let newArray = Array.from(set) // convertir set en array
console.log(newArray)

const pares = () =>{            // funcion para sacar los numeros pares
  newArray.forEach( par => {
    if (par % 2 == 0 ) {
      console.log(par);
    }
  })
}

pares();

// regex

// modficadores
//i: ignora mayúsculas y minúsculas
//g: busca globalmente
//m: busqueda multilinea
//d: que coincida al comienzo y al final 


//utilizando el modificador i
//buscar-search
console.log('\n')
let text1 = 'Estudio Javascript, ReactJS, HTML y CSS';
let resultado1 = text1.search(/Javascript/i);
console.log(resultado1)

// reemplazar -replace
let text2 = 'Estudio Programación con videos de youtube';
let resultado2 = text2.replace(/videos de youtube/i, 'DigitalHouse');
console.log(resultado2);


// buscar -match
let texto = 'Hola Mundo 2024';
let result = texto.match(/[0-9]/g);
console.log(result)

// true y false 
let patter = /[A-Z]/
let res = patter.test('hola mundo 2024')
console.log(res)

//validar con regex
function validar(text) {
  let pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,4}$/;
  if (pattern.test(text)){
    console.log('Correo Válido')
  } else{
    console.log('Correo inválido')
  }
}

validar('Acosta_21@gmail.com')




