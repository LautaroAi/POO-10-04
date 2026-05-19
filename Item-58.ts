// 58: Crea un programa que lea una letra tecleada por el usuario y diga si se trata de un signo de puntuación (. , ; :), una cifra numérica (del 0 al 9) o algún otro carácter, usando "switch" (pista: habrá que usar un dato de tipo "char").
const prompt = require('prompt-sync')();

let caracter = prompt("Ingrese un caracter: ");

let unCaracter = caracter.charAt(0); // Para que evalúe solo el 1er caracter ingresado

switch (true) {
    case ['.', ',', ';', ':'].includes(unCaracter):
        console.log("Se trata de un signo de puntuación");
        break;
    case unCaracter >= '0' && unCaracter <= '9':
        console.log("Se trata de una cifra numérica");
        break;
    default:
        console.log("Se trata de algún otro carácter")
}