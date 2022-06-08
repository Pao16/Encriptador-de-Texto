//Conectamos el input.texto (el mensaje entrante) con JAVASCRIPT
let textoEntrante = document.querySelector('#input-texto');
//console.log(TextoEntrante);

//Para saber que se escribe en el input y saber si esta bien escrito lo de arriba :P
/*textoEntrante.addEventListener("input",function(){

   console.log("Escribieron en el input");
   console.log(this.value);   
})*/

//Conectamos la cajita del mensaje encriptado con JS
let resultado = document.querySelector("#msg");

//Conectamos los botones a JS
let btnEncriptar = document.querySelector("#btn-encriptar"); //Encriptar
let btnDesencriptar = document.querySelector("#btn-desencriptar"); //Desencriptar
let btnCopiar = document.querySelector("#btn-copiar"); //Copiar

//Lógica para que salga una alerta si se ponen mayusculas 

//Alerta con bloq mayus activado

textoEntrante.addEventListener('keyup',function(event){
    
    if (event.getModifierState('CapsLock')){
      
        alert("Digite solamente letras minusculas");
       
    }
}); 


//Lógica para encriptar (con función unido al addEventListener)
//Conectamos la función al boton encriptar
btnEncriptar.addEventListener("click",function(event){
    //console.log("apreto el boton encriptar");
    let texto = textoEntrante.value.toLowerCase(); //Pasamos mayus a minus por si las dudas de que pongan (por si no puedo poner la alerta de mayus)
    
    console.log(texto);
    
    let resultado1 = texto.replaceAll("e","enter");
    let resultado2 = resultado1.replaceAll("i","imes");
    let resultado3 = resultado2.replaceAll("a","ai");
    let resultado4 = resultado3.replaceAll("o","ober");
    let resultadofinal = resultado4.replaceAll("u","ufat");

    
    console.log(resultadofinal);
    event.preventDefault(); //quitamos el comportamiento padron
    resultado.value = resultadofinal.toLowerCase(); //lo ponemos en el input de a ladito
})

btnDesencriptar.addEventListener("click", function(event){
    let texto = textoEntrante.value;
    let resultadoEncriptado1 = texto.replaceAll("enter", "e");
    let resultadoEncriptado2 = resultadoEncriptado1.replaceAll("imes","i");
    let resultadoEncriptado3 = resultadoEncriptado2.replaceAll("ai","a");
    let resultadoEncriptado4 = resultadoEncriptado3.replaceAll("ober","o");
    let resultadoFinalDesencriptado = resultadoEncriptado4.replaceAll("ufat","u");

    console.log(resultadoFinalDesencriptado);
    event.preventDefault(); //quitamos el comportamiento padron del formulario
    resultado.value = resultadoFinalDesencriptado.toLowerCase();
})

function limpiar() {
    resultado.value = '';
    textoEntrante.value = '';
}

btnCopiar.addEventListener("click", function(){
    console.log("dio click en copiar");
    let textoACopiar = resultado.value;
    //console.log(textoACopiar);
    navigator.clipboard.writeText(textoACopiar);
    limpiar();
    
})