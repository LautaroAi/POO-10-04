// 69: Crea un programa calcule cuantas cifras tiene un número entero positivo (pista: se puede hacer dividiendo varias veces entre 10).
const prompt = require('prompt-sync')();

let numero: number = parseInt(prompt("Ingrese un número entero positivo: "));

if (numero >= 0) {
    let cifras: number = 0;
    while (numero > 0) {
        numero = Math.floor(numero / 10);
        cifras++;
    }
    console.log(`Tiene ${cifras} cifras`);
} else {
    console.log("El número ingresado debe ser un entero positivo");
}