// 50: Crea un programa que pida al usuario dos números enteros y diga si son iguales o, en caso contrario, cuál es el mayor de ellos.
const prompt = require('prompt-sync')();

let a: number = parseInt(prompt("Ingrese el primer número: "));
let b: number = parseInt(prompt("Ingrese el segundo número: "));

if (a === b) {
    console.log(`Son iguales`);
} else {
    console.log(`El mayor es: ` + (a > b ? a : b));
}