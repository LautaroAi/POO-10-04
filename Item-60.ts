// 60: Repite el ejercicio 2.1.9.1, empleando "if" en lugar de "switch".
const prompt = require('prompt-sync')();

let numero: number = parseInt(prompt("Ingrese un número del 1 al 5: "));

if (numero === 1) console.log("uno");
else if (numero === 2) console.log("dos");
else if (numero === 3) console.log("tres");
else if (numero === 4) console.log("cuatro");
else if (numero === 5) console.log("cinco");
else console.log("Error: número fuera de rango");