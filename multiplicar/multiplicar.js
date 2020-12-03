const { rejects } = require('assert');
const fs = require('fs');//esta libreria ya existe en node y simplemente la definimos
const { resolve } = require('path');
//const fs = require('express');no es una libreria propia de node, se intala para poder 
//usar, son paquetes que no son nativos de node pero son expanciones o codigos que hicieron otras personas
//const fs = require('./fs');archivos que nosotros creamos en el proyecto

var colors = require('colors');


let listarTabla = (base, limite = 10) => {
    console.log('===================='.green);
    console.log(`Tabla de ${base}`.red);
    console.log('===================='.green);
    for(let i=1; i<=limite; i++){
        console.log( `${base} * ${i} = ${base * i}\n`);
    }
}


//module.exports.crearArchivo = (base) => { otra forma de hacerlo
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        //si la base no es un número que no  haga nada
        if(!Number(base)){
            reject(`El valor introducido ${base} no es un número`);
            return;//para que no siga continuando
        }

        let data = '';

        for(let i=1; i<=limite; i++){
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });

    });
}


module.exports = {
    crearArchivo,
    listarTabla
}



/* se convertira en una función
let data = '';

for(let i=1; i<=10; i++){
    let resultado = base * i;
    console.log(`${base} * ${i} = ${resultado}`);
}
Otra forma abajo 

for(let i=1; i<=10; i++){
    data += `${base} * ${i} = ${base * i}\n`;
}

//const data = new Uint8Array(Buffer.from('Hello Node.js'));
//segundo parametro es lo que yo quier grabar
fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
  if (err) throw err;
  console.log(`El archivo tabla-${base}.txt ha sido creado!`);
});*/