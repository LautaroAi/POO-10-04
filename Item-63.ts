// 63: Crea un programa que pida al usuario su contraseña (numérica). Deberá terminar cuando introduzca como contraseña el número 1111, pero volvérsela a pedir tantas veces como sea necesario.
const prompt = require('prompt-sync')();

let pin : number = 0;
do {
    pin = parseInt(prompt("Ingrese la contraseña (PIN de 4 números): "));
    if (pin !== 1111) {
        console.log("Contraseña incorrecta, intente nuevamente");
    } else {
        console.log("Contraseña correcta, bienvenido");
    }
} while (pin !== 1111);