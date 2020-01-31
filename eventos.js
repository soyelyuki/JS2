'use strict'


//mouse events 

window.addEventListener('load', () =>{
    function cambiarColor(){
    // console.log("me has dado click");

        var bg = boton.style.background;
        console.log("me has dado click");
        if(bg =="green"){
            boton.style.background ="red";
        }else{
            boton.style.background ="green";
        }
    // return true;   same function  with or with out it 
    }
    // evento click
    var boton = document.querySelector("#boton");
    
    boton.addEventListener('click', function(){
        cambiarColor();
    });
    //mouseover
    boton.addEventListener('mouseover',function(){
        boton.style.background ="yellow";
    });
    //MouseOut
    boton.addEventListener('mouseout',function(){
        boton.style.background ="black";
    });

    // focus 
    var  input = document.querySelector("#campo_nombre");
    input.addEventListener('focus', function(){
        console.log("estas dentro del input");
    });
    // Blur 

    input.addEventListener('blur', function(){
        console.log("estas fuera del input");
    });
    // KeyDown 

    input.addEventListener('keydown', function(event){
        console.log("Pulsando esta tecla",String.fromCharCode(event.keyCode))
    });
    //Keypress
    input.addEventListener('keypress', function(event){
        console.log("se presionó esta tecla",String.fromCharCode(event.keyCode))
    });

    //Keyup
    input.addEventListener('keyup', function(event){
        console.log("se soltó tecla",String.fromCharCode(event.keyCode))
    });
});