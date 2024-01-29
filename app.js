let listaNumerosSorteados = [];
let numeroMaximo = 10; 
let intentos = 0;
let numeroAleatorio = 0; 


function intentoDeUsuario(){
    alert("click desde el boton")
    
}

function asignarTextoElemento(tag, texto){
    let parrafo = document.querySelector(tag);
    parrafo.innerHTML = texto;
}

function generarNumeroAleatorio(){
    let numeroAleatorio = Math.floor(Math.random()*10)+1;
    console.log(listaNumerosSorteados);
    if(listaNumerosSorteados.length != numeroMaximo){
        if(listaNumerosSorteados.includes(numeroAleatorio) == false){
            listaNumerosSorteados.push(numeroAleatorio);
            //console.log(listaNumerosSorteados);
            return numeroAleatorio;
        }else{
            numeroAleatorio = generarNumeroAleatorio();
            return numeroAleatorio;
        }
    }else{
        asignarTextoElemento("p", `Ya se sortearon todos los números posibles`);
    }
}

function promptNumero(){
    let numeroIntento = document.querySelector("#numeroPrompt").value;
    return parseInt(numeroIntento);
}

function comprobarNumeroAleatorio(){
    let valorBoolean;
    let numeroRecibido = promptNumero();
    //console.log("numero aleatorio " + numeroAleatorio);
    if(numeroAleatorio === numeroRecibido){
        valorBoolean = true;
    }else{
        valorBoolean =  false;
    }
    mostrarGanaOPierde(valorBoolean, numeroRecibido);
}

function mostrarGanaOPierde(valor, recibido){
    intentos++;
    //let valorBoolean = comprobarNumeroAleatorio();
    if(valor == true){
        asignarTextoElemento("p",`¡Has acertado! Diste con el número indicado en ${intentos} ${intentos==1 ? "intento" : "intentos"}, ¡Hurra!`);
        document.querySelector("#reiniciar").removeAttribute("disabled");
    }else{
        if(recibido>numeroAleatorio){
            asignarTextoElemento("p","¡Ups! Intenta de nuevo, ese no es el numero papu. El número secreto es menor.");
        }else{
            asignarTextoElemento("p","¡Ups! Intenta de nuevo, ese no es el numero papulince. El número secreto es mayor.");
        }
        limpiarCajaPrompt();
    }
    
    console.log("intento: " + intentos);
}

function limpiarCajaPrompt(){
    document.querySelector("#numeroPrompt").value = "";
}

function reiniciarJuego(){
    limpiarCajaPrompt();
    condicionesIniciales();
    if(document.querySelector("#reiniciar").hasAttribute("disabled")==false){
        document.querySelector("#reiniciar").setAttribute("disabled", "");
    }
}

function condicionesIniciales(){
    asignarTextoElemento("h1", "Juego del numero secreto");
    asignarTextoElemento("p", "Escribe un número del 1 al " + numeroMaximo + " papulince: ");    
    intentos = 0;
    numeroAleatorio = generarNumeroAleatorio();

}

condicionesIniciales();
console.log("numero aleatorio: " + numeroAleatorio);