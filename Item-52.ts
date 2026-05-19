// 52: Crea el diagrama de flujo para el programa que pide dos números al usuario y dice cuál es el mayor de los dos.
const prompt = require('prompt-sync')();

let a: number = parseInt(prompt("Ingrese el primer número: "));
let b: number = parseInt(prompt("Ingrese el segundo número: "));

if (a === b) {
    console.log(`Son iguales`);
} else {
    console.log(`El mayor es: ` + (a > b ? a : b));
}

// Básicamente copié y pegué el Item-50.ts para que la numeración de los archivos sean consecutivos