// 51: Crea una variante del ejemplo 02_01_06a (?????), en la que la comparación de igualdad sea correcta y en la que las variables aparezcan en el lado derecho de la comparación y los números en el lado izquierdo.
const prompt = require('prompt-sync')();

let a: number = parseInt(prompt("Número a comparar: "));

// variables: lado derecho
// números: lado izquierdo
if (4 === a) {
    console.log("El número ingresado es igual a 4");
} else {
    console.log("El número ingresado es diferente a 4");
}