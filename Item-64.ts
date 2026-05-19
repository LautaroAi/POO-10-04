// 64: Crea un "calculador de cuadrados": pedirá al usuario un número y mostrará su cuadrado. Se repetirá mientras el número introducido no sea cero (usa "while" para conseguirlo).
const prompt = require('prompt-sync')();

let numero: number = 1;

while (numero !== 0) {
    numero = parseInt(prompt("Ingrese un número del cual quiera obtener su cuadrado: "));
    if (numero !== 0) {
        console.log(`El cuadrado de ${numero} es: ${numero * numero}`);
    }
    console.log("Ejecución finalizada")
}