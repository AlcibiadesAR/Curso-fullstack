//practica de como guardar en LocalStorage

const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const job = document.getElementById('job');

document.getElementById('saludo').innerHTML = localStorage.getItem('username') === null ? '' : `Bienvenido ${localStorage.getItem('username')}`

const save = () => {
    localStorage.setItem('username', firstname.value + ' ' + lastname.value);
    localStorage.setItem('job',job.value)
}

const logout = () => {
    localStorage.clear();
}

/* // practica de SessionStorage 

const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const job = document.getElementById('job');

document.getElementById('saludo').innerHTML = sessionStorage.getItem('username') === null ? '' : `Bienvenido ${sessionStorage.getItem('username')}`

const save = () => {
    sessionStorage.setItem('username', firstname.value + ' ' + lastname.value);
    sessionStorage.setItem('job',job.value);
    document.getElementById('saludo').innerHTML = sessionStorage.getItem('username') === null ? '' : `Bienvenido ${sessionStorage.getItem('username')}`
}

const logout2 = sessionStorage.removeItem('username'); */