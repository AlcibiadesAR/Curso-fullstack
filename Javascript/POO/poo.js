//Clases
/*class animal {

    constructor(nombre, sonido){
    this.nombre = nombre;
    this.sonido = sonido;
    }

    saludar(nombre){
        console.log(`Me llamo ${nombre} y mi mascota se llama ${this.nombre} y hace ${this.sonido}`)
    }
}

let mascota = new animal('Thayson', 'Guau, Guau');

mascota.saludar('Alcibiades');*/


// POO en el DOM

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludarConMascota(mascota) {
        return `Me llamo ${this.nombre}, tengo ${this.edad} años y mi mascota se llama ${mascota}.`;
    }
}

class Frutas extends Persona {
    constructor(nombre, edad, fruta) {
        super(nombre, edad);
        this.fruta = fruta;
    }

    decirMiFruta() {
        return `Me llamo ${this.nombre}, tengo ${this.edad} años, y mi fruta favorita es la ${this.fruta}.`;
    }
}

function saludarYDecirEdad() {
    const nombre = document.getElementById('name').value;
    const edad = document.getElementById('edad').value;
    const mascota = document.getElementById('mascota').value;
    const fruta = document.getElementById('fruta').value;

    let persona1 = new Persona(nombre, edad);
    let saludo = persona1.saludarConMascota(mascota);

    let personaConFruta = new Frutas(nombre, edad, fruta);
    let frutasMensaje = personaConFruta.decirMiFruta();

    const resultado = document.getElementById('res');
    resultado.innerHTML = `<p>${saludo}</p><p>${frutasMensaje}</p>`;
}

