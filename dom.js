'use strict'
function cambiaColor(color){
    caja.style.background = color;
}

//var caja = document.getElementById("micaja");
var caja = document.querySelector("#micaja");

caja.innerHTML ="!texto en la caja desde JS!"
caja.style.background = "grey";
caja.style.padding ="10px";
caja.style.color ="white";
caja.className ="hola hola ";
console.log(caja);



// conseguir elementos por su etiqueta

var todosLosDivs = document.getElementsByTagName('div');

var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");

var valor;
for (valor in todosLosDivs){
    if(typeof todosLosDivs[valor].textContent == 'string'){
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.append(texto);
        seccion.append(parrafo);    
    }
}
seccion.append(hr);
