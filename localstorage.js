'use strict'

//localstorage disponibilidad

if(typeof(Storage) !== 'undefined'){
    console.log("local storage disponible");
}else{
    console.log("local storage disponible");
}

//guardar Datos
localStorage.setItem("titulo","curso de symfony");

//recuperar Elemento 
document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

//guardar datos y convierte el json en string 

var usuario ={
    nombre:"nicolas Miranda",
    email: "nicolas@nicolas.com",
    web: "nicolas.com"
};
localStorage.setItem("usuario", JSON.stringify(usuario));

// recuperar objeto 
var userjs = JSON.parse(localStorage.getItem("usuario"));

console.log(userjs);
document.querySelector("#datos").append(" "+userjs.web+"-"+ userjs.nombre);

localStorage.removeItem("usuario"); //tambien puedo ocupar clear para borrar todo 