// 61: Repite el ejercicio 2.1.9.2, empleando "if" en lugar de "switch" (pista: como las cifras numéricas del 0 al 9 están ordenadas, no hace falta comprobar los 10 valores, sino que se puede hacer con "if ((símbolo >= '0') && (símbolo <='9'))").
const prompt = require('prompt-sync')();

let caracter = prompt("Ingrese un caracter: ");

let unCaracter = caracter.charAt(0); // Para que evalúe solo el 1er caracter ingresado

if (['.', ',', ';', ':'].includes(unCaracter)) {
    console.log("Se trata de un signo de puntuación");
} else if (unCaracter >= '0' && unCaracter <= '9') {
    console.log("Se trata de una cifra numérica");
} else {
    console.log("Se trata de algún otro carácter")
}