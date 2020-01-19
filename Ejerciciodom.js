'use strict'

window.addEventListener('load', function(){
    console.log("dom cargado")

    var formulario = document.querySelector("#formulario");
    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display ="none";

    formulario.addEventListener('submit', function(){
        console.log("evento capturado");

        var nombre = document.querySelector("#nombre").value;
        var apellidos = document.querySelector("#apellidos").value;
        var edad = document.querySelector("#edad").value;
        box_dashed.style.display ="block";

        console.log(nombre, apellidos, edad);
        var p_nombre = document.querySelector("#p_nombre span");
        var p_apellidos = document.querySelector("#p_apellidos span");
        var p_edad = document.querySelector("#p_edad span ");

        p_nombre.innerHTML = nombre;
        p_apellidos.innerHTML = apellidos;
        p_edad.innerHTML = edad;
/*
        var parrafo =document.createElement("p");
        parrafo.append(nombre);
        parrafo.append(apellidos);
        parrafo.append(edad);
        box_dashed.append(parrafo);
*/ 
    });

});