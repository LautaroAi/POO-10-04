// 57: Crea un programa que pida un número del 1 al 5 al usuario, y escriba el nombre de ese número, usando "switch" (por ejemplo, si introduce "1", el programa escribirá "uno").
const prompt = require('prompt-sync')();

let numero: number = parseInt(prompt("Ingrese un número del 1 al 5: "));
switch (numero) {
    case 1:
        console.log("uno");
        break;
    case 2:
        console.log("dos");
        break;
    case 3:
        console.log("tres");
        break;
    case 4:
        console.log("cuatro");
        break;
    case 5:
        console.log("cinco");
        break;
    default:
        console.log(`Error: número fuera de rango`);
}