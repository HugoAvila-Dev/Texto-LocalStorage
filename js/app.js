//Variables 
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

//Event Listeners
eventListeners();
function eventListeners() {
    //Cuando el ususario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet);
    
    //Cuando el documento está listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
        crearHTML();
    })

    listaTweets.addEventListener('click', borrarTweet);
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

    const tweetObj = {
        id: Date.now(),
        tweet //es lo mismo que tweet: tweet
    }

    tweets = [...tweets, tweetObj];

    crearHTML();

    //Reiniciar el formulario 
    formulario.reset();
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
//Muestra el listado de los tweet
function crearHTML() {
    limpiarHTML();
    if(tweets.length > 0) {
        tweets.forEach( tweet => {
            //Agregar un botón de eliminar
            const btnEliminar = document.createElement('A');
            btnEliminar.innerText = 'X';
            btnEliminar.classList.add('borrar-tweet');

            //Añadir la función de eliminar
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }

            //Crear el HTML
            const li = document.createElement('li');
            
            //Añadir el texto
            li.innerText = tweet.tweet;

            //Asignar el botón
            li.appendChild(btnEliminar);

            //Insetarlo en el final
            listaTweets.appendChild(li);
        });
    }

    sincronizarStorage();

}

//Agrega los Tweets actuales a localStorage
function sincronizarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

//Elimina un tweet
function borrarTweet(id){
    tweets = tweets.filter( tweet => tweet.id !== id);
    // const id = e.target.getAttribute('id');
    // tweets = JSON.parse(localStorage.getItem('Tweets'));
    // tweets = tweets.filter( tweet => tweet.id !== id);
    // localStorage.setItem('Tweets', JSON.stringify(tweets));
    // console.log(tweets
    crearHTML(); 
}


//Limpiar el HTML
function limpiarHTML(){ 
    while(listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}