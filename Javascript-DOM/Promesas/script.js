// opcion 1

/*const number = prompt("Ingrese un número del 1 al 10");

const myPromise = new Promise((resolve, reject) => {
  const random = Math.round(Math.random() * 10);
  setTimeout(() => {
    if (random == number) {
        resolve('¡Felicidades has ganado el juego')
    } else if( random < number){
        reject(`¡El número ${number} es mas pequeño que ${random}`)
    } else{
        reject(`¡El número ${number} es mas grande que ${random}`)
    }
  }, 2000);
});

document.getElementById('loading').innerHTML = 'Cargando...'

myPromise.then((result) => {
    document.getElementById('loading').innerHTML = ''
    document.getElementById('response').innerHTML = result
}).catch((err) => {
    document.getElementById('loading').innerHTML = ''
    document.getElementById('response').innerHTML = err
});*/

//opcion 2

/*const MyPromise2 = new Promise((resolve, reject) => {
    const random = Math.round(Math.random()*10);
    setTimeout( ()=>{
        resolve(random);
    }, 2000)
});

const isEven = (number) => {
   const even = number % 2 == 1 ? 'es un impar' : 'es par';
   document.getElementById('loading').innerHTML = ''
   document.getElementById('response').innerHTML = `El número ${number} ${even}`
}

document.getElementById('loading').innerHTML = 'cargando...'

MyPromise2.then(isEven).catch(err => {
    document.getElementById('loading').innerHTML = ''
    document.getElementById('response').innerHTML = err;
});*/

//0pcion 3

const promise1 = new Promise((res, rej) => {
  setTimeout(() => {
    res(`La promesa 1 fue un exito`);
  }, 5000);
});

const promise2 = new Promise((res, rej) => {
  setTimeout(() => {
    res(`La promesa 2 fue un exito`);
  }, 3000);
});

const promise3 = new Promise((res, rej) => {
  setTimeout(() => {
    res(`La promesa 3 fue un exito`);
  }, 2000);
});

Promise.all([promise1, promise2, promise3])
  .then((res) => {
    document.getElementById("loading").innerHTML = "";
    document.getElementById(
      "response"
    ).innerHTML = `${res[0]} <br> ${res[1]} <br> ${res[2]}`;
  })
  .catch((err) => {
    console.log(err);
  });
