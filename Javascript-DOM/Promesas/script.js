const number = prompt("Ingrese un número del 1 al 10");

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
});
