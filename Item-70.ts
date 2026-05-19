// 70: Crea el diagrama de flujo y la versión en TypeScript de un programa que dé al usuario tres oportunidades para adivinar un número del 1 al 10.
const prompt = require('prompt-sync')();

let numero: number = Math.floor(Math.random() * 10) +1;
let intentos: number = 3;
let acertado: boolean = false;

console.log("Ingrese un número del 1 al 10, tienes 3 intentos");

while (intentos > 0 && !acertado) {
    let adivinanza: number = parseInt(prompt(`Intento N°${intentos + 1}: `));
    if (adivinanza === numero) {
        console.log("Adivinaste, sos un genio");
    } else {
        console.log(`Incorrecto, te quedan ${intentos} intentos restantes`);
        intentos--;
    }
}

if (!acertado) {
    console.log(`Te quedaste sin intentos, era ${numero}`);
}