// 65: Crea un programa que pida de forma repetitiva pares de números al usuario. Tras introducir cada par de números, responderá si el primero es múltiplo del segundo.
const prompt = require('prompt-sync')();

let a, b;

while (true) {
    a = parseInt(prompt("Ingrese el primer número: "));
    b = parseInt(prompt("Ingrese el segundo número: "));
    if (a === b) {
        console.log("Son iguales, por ende ambos son multiplos de sí mismos")
    } else if (a % b === 0) {
        console.log(`El primero (${a}) es múltiplo del segundo (${b})`);
    } else {
        console.log(`El primero (${a}) no es múltiplo del segundo (${b})`);
    }
}