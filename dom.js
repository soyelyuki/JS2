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

// Conseguir elementos por su clase CSS

var divsRojos = document.getElementsByClassName('rojo'); 
var divsAmarillo = document.getElementsByClassName('amarillo');
divsAmarillo[0].style.background = "yellow";
var div;
for(div in divsRojos){
    if(divsRojos[div].className == "rojo"){
        divsRojos[div].style.background = "red";
    }
}

//Query selector ( para seleccionar un elemento );
// pero si hago document.querySelectorAll los eligo a todos 
var id =  document.querySelector("#encabezado");
console.log(id);

var claseRojo = document.querySelector ("div.rojo"); 
console.log(claseRojo);

var etiqueta =  document.querySelector("div");
console.log(etiqueta);
