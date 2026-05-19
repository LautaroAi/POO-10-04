// 66: Crea una versión mejorada del programa anterior, que, tras introducir cada par de números, responderá si el primero es múltiplo del segundo, o el segundo es múltiplo del primero, o ninguno de ellos es múltiplo del otro.
const prompt = require('prompt-sync')();

let a, b;

while (true) {
    a = parseInt(prompt("Ingrese el primer número: "));
    b = parseInt(prompt("Ingrese el segundo número: "));
    if (a === b) {
        console.log("Son iguales, por ende ambos son multiplos de sí mismos")
    } else if (a % b === 0) {
        console.log(`El primero (${a}) es múltiplo del segundo (${b})`);
    } else if (b % a === 0) {
        console.log(`El segundo (${b}) es múltiplo del primero (${a})`);
    } else {
        console.log("Ninguno es mútiplo del otro")
    }
}
