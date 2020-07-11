let PrimeraPromesa = new Promise((resolve, reject) =>{
    reject('primera promesa exitosa');
});

let SegundaPromesa = new Promise((resolve, reject) =>{
    resolve('segunda promesa exitosa');
});

let UltimaPromesa = new Promise((resolve, reject) =>{
    resolve('ultima promesa exitosa');
});

PrimeraPromesa
    .then(response => console.log(response),error => console.log('error'));



/*let Promesa1 = new Promise((resolve,reject) => {
    resolve('Primera Promesa resuelta');
});

let Promesa2 = new Promise((resolve,reject) => {
    setTimeout(() =>{
    resolve('Segunda Promesa resuelta');
    },500);
});

let Promesa3 = new Promise((resolve,reject) => {
    setTimeout(() =>{
        resolve('error fatal en la terecera');
        },1000);
});

let Promesa4 = new Promise((resolve,reject) => {
    setTimeout(() =>{
        resolve('Cuarta Promesa resuelta');
        },1500);
});

Promise.all([Promesa4,Promesa2,Promesa3,Promesa1])
    .then((values) =>{
        console.log('los valores son', values);
    })
    .catch((error) =>{
        console.log('ocurrio un error',error);
    });
*/