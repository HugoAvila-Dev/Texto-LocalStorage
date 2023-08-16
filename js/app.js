//Variables 
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
const textArea = document.querySelector('#tweet');
let tweets = [];

//Event Listeners
eventListeners();
function eventListeners() {
    formulario.addEventListener('submit', agregarTweet); 
}



//Funciones
function agregarTweet(e) {
    e.preventDefault();
}