// 59: Crea un programa que lea una letra tecleada por el usuario y diga si se trata de una vocal, una cifra numérica o una consonante, usando "switch"
const prompt = require('prompt-sync')();

let caracter = prompt("Ingrese un caracter: ");

let unCaracter = caracter.charAt(0).toLowerCase(); // Para que evalúe solo el 1er caracter ingresado y pasar minúscula en caso de ser string

switch (true) {
    case ['a', 'e', 'i', 'o', 'u'].includes(unCaracter):
        console.log("Se trata de una vocal");
        break;
    case unCaracter >= '0' && unCaracter <= '9':
        console.log("Se trata de una cifra numérica");
        break;
    case unCaracter >= 'a' && unCaracter <= 'z':
        console.log("Se trata de una consonante");
        break;
    default:
        console.log("Se trata de algún otro carácter")
}