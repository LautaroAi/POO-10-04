// 54: Crear el diagrama de flujo para el programa que pide tres números al usuario y dice cuál es el mayor de los tres.
const prompt = require('prompt-sync')();

let a: number = parseInt(prompt("Ingrese el primer número: "));
let b: number = parseInt(prompt("Ingrese el segundo número: "));
let c: number = parseInt(prompt("Ingrese el tercer número: "));

if (a > b && b > c) {
    console.log(`El mayor es el primer número (${a})`);
} else if (a < b && b > c) {
    console.log(`El mayor es el segundo número (${b})`);
} else {
    console.log(`El mayor es el tercer número (${c})`);
}