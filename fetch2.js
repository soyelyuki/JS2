'use strict'

//fetch (ajax)y peticiones a servicios /apis rest
var div_usuarios = document.querySelector("#usuarios");
var div_janet = document.querySelector("#janet");


    getUsuarios()
        .then(data => data.json())
        .then(users => {
                listadoUsuarios(users.data);
                return getJanet();
        })
        .then(data => data.json())
        .then(user => {
                MostrarJanet(user);

        });


function getUsuarios(){
        return fetch('https://reqres.in/api/users?page=2')
}
function getJanet(){
        return fetch('https://reqres.in/api/users/2')
}

function listadoUsuarios(usuarios){
        usuarios.map((user, i) => {
                let nombre = document.createElement('h3');
                nombre.innerHTML = i + "." + user.first_name + " " + user.last_name; 
                div_usuarios.appendChild(nombre);

                document.querySelector(".loading").style.display ='none';
        });
}
function MostrarJanet(usuarios){
        usuarios.map((user, i) => {
                let nombre = document.createElement('h4');
                nombre.innerHTML = i + "." + user.first_name + " " + user.last_name; 
                div_usuarios.appendChild(nombre);

                document.querySelector(".loading").style.display ='none';
        });
}