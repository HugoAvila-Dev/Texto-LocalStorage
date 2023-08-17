//Variables 
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

//Event Listeners
eventListeners();
function eventListeners() {
    formulario.addEventListener('submit', agregarTweet); 
}



//Funciones
function agregarTweet(e) {
    e.preventDefault();
    
    //Textarea donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;

    //validación
    if(tweet === ''){
        mostrarError('Un mensaje no puede ir vacío');
        return;
    }
    tweets = [...tweets, tweet];
    cargarLista();
}  

//Mostrar mensaje de error
function mostrarError(error) {
    const mensajeError = document.createElement('P');
    mensajeError.classList.add('error');
    mensajeError.textContent = error;
    
    //Insertarlo en el Contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    //Elimina la alerta después de 3 segundos
    setTimeout(() => {
        mensajeError.remove();
    }, 3000)
}

function cargarLista() {
    limpiarHTML();
    tweets.forEach( tweet => {
        const lista = document.createElement('P');
        lista.classList.add()
        lista.innerHTML = `
        <div>
        <p>${tweet}</p>
        <a class="borrar-tweet">X</a>
        </div>
        
        `;
        listaTweets.appendChild(lista);
    })
}

function limpiarHTML(){ 
    while(listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}