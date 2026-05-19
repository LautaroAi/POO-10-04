// 53: Crea el diagrama de flujo para el programa que pide al usuario dos números y dice si uno de ellos es positivo, si lo son los dos o si no lo es ninguno.
const prompt = require('prompt-sync')();

let a: number = parseInt(prompt("Ingrese el primer número: "));
let b: number = parseInt(prompt("Ingrese el segundo número: "));

if (a > 0 && b > 0) {
    console.log("Ambos números son positivos");
} else if (a > 0 && b < 0) {
    console.log("El primer número es positivo");
} else if (a < 0 && b > 0) {
    console.log("El segundo número es positivo");
} else {
    console.log("Ninguno es positivo")
}