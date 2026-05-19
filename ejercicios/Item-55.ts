//  55: Crea un programa que use el operador condicional para mostrar un el valor absoluto de un número de la siguiente forma: si el número es positivo, se mostrará tal cual; si es negativo, se mostrará cambiado de signo.
const prompt = require('prompt-sync')();

let numero: number = parseInt(prompt("Ingrese un número: "));
let absoluto = numero >= 0 ? numero : -numero;

console.log(`El valor absoluto de ${numero} es ${absoluto}`);