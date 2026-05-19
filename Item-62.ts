// 62: Repite el ejercicio 2.1.9.3, empleando "if" en lugar de "switch".
const prompt = require('prompt-sync')();

let caracter = prompt("Ingrese un caracter: ");

let unCaracter = caracter.charAt(0).toLowerCase(); // Para que evalúe solo el 1er caracter ingresado y pasar minúscula en caso de ser string

if (['a', 'e', 'i', 'o', 'u'].includes(unCaracter)) {
    console.log("Se trata de una vocal");
} else if (unCaracter >= '0' && unCaracter <= '9') {
    console.log("Se trata de una cifra numérica");
} else if (unCaracter >= 'a' && unCaracter <= 'z') {
    console.log("Se trata de una consonante");
} else {
    console.log("Se trata de algún otro carácter");
}