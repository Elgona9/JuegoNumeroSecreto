let numeroSecreto = 0;
let numeroDeIntentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;

}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `¡Felicidades! Adivinaste el número secreto en ${numeroDeIntentos} ${(numeroDeIntentos === 1 ) ? 'intento' : 'intentos'}. 🎉`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó
        if(numeroDeUsuario < numeroSecreto){
            asignarTextoElemento('p','El número secreto es mayor. 🤔');
        } else {
            asignarTextoElemento('p','El número secreto es menor. 🤔');
        }  
        numeroDeIntentos++;
        limpiarCajaTexto();
    }
    return;
}

function limpiarCajaTexto(){
    document.getElementById('valorUsuario').value='';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //En el caso de que la lista de números sorteados esté llena
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', `¡No quedan más intentos!😢`);
    }else{
    //Si el número generado está incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
        //Llamamos a la función para generar un nuevo número
        return generarNumeroSecreto();
        }else{
        //Si no está incluido, lo añadimos a la lista y lo devolvemos
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
    }
}
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto 🤫');
    asignarTextoElemento(`p`, `Estoy pensando en un número entre 1 y ${numeroMaximo}. ¿Puedes adivinarlo?`);
    numeroSecreto = generarNumeroSecreto();
    numeroDeIntentos = 1;
}

function reiniciarJuego(){
    //limpiamos el campo de texto
    limpiarCajaTexto();
    //Ponemos las condiciones iniciales
    condicionesIniciales();
    //deshabilitamos el botón nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}

condicionesIniciales();
console.log(numeroSecreto);
