'use strict'

//bom . browser object model 
function getBom(){
console.log(window.innerHeight);// lo mismo que screen.height
console.log(window.innerWidth);
}
// abrir algo en otra ventana 
function abrirVentana(url){
    window.open(url);
}




getBom();




/*
para moverse a otra web 
window.locarion.href = url;
*/