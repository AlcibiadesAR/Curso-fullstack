// Primer acercamiento a fetch

/*fetch('https://pokeapi.co/api/v2/pokemon/ditto')
.then(resp => resp.json())
.then(json => console.log(json))*/

//async/ await

/*const promise = async() => {

const promiseText = new Promise(resolve => {

    setTimeout(() => {
    resolve('Hola Mundo')
    }, 3000);
});

    document.getElementById('loading').innerHTML = await promiseText
}


promise();*/

// async/ await con fetch

 const comic = async () =>{
 try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
        
        if (!response.ok) {
            throw new Error('¡Hubo un problema llamando a la API')
        }
        const data = await response.json();
        document.getElementById('response').innerHTML = data[4].email

    }catch (error){
        document.getElementById('response').innerHTML = error
    }
}

comic();

