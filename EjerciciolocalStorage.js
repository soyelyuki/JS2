'use strict'



var formulario = document.querySelector('#formpelicula');

formulario.addEventListener('submit', function(){
    
    var titulo = document.querySelector('#addpelicula').value;
    if(titulo.length >= 1){
    localStorage.setItem(titulo,titulo);
    }
});

var ul = document.querySelector('#peliculas-list');
for(var i in localStorage){
    
    if(typeof localStorage[i] == 'string'){
        var li =document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li);
    }
};

/*
if(typeof(Storage) !== 'undefined'){
    console.log("local storage disponible");ar
}else{
    console.log("local storage disponible");
}
var Anadirpelicula = document.querySelector("#addpelicula");
//(localStorage.setItem("pelicula","el Padrino"));
Anadirpelicula.addEventListener('click', function(){
    localStorage.setItem("#addpelicula","#addpelicula");
});

//var Añadirpelicula 
//queryselector.Añadirpelicula 
*/