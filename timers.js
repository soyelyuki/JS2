'use strict'
window.addEventListener('load', function(){

    var tiempo= setInterval(function(){

    console.log("set Interbal Ejecutado");

    var encabezado = document.querySelector("h1");
    if(encabezado.style.fontsize = "50px"){
        encabezado.style.fontsize = "30px";
      }else{
        encabezado.style.fontsize = "50px";
      }



    //document.querySelector("h1").style.fontSize = "50px"
}, 1000);
});
