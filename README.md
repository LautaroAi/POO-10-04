# Actividad POO con TypeScript 10-04

### Alumno: Lautaro Rivieri

## Consignas
### Realizar los ejercicios desde el 50 hasta el 70:

50. Crea un programa que pida al usuario dos números enteros y diga si son iguales o, en caso contrario, cuál es el mayor de ellos.

51. Crea una variante del ejemplo 02_01_06a, en la que la comparación de igualdad sea correcta y en la que las variables aparezcan en el lado derecho de la comparación y los números en el lado izquierdo.

52. Crea el diagrama de flujo para el programa que pide dos números al usuario y dice cuál es el mayor de los dos.

53. Crea el diagrama de flujo para el programa que pide al usuario dos números y dice si uno de ellos es positivo, si lo son los dos o si no lo es ninguno.

54. Crear el diagrama de flujo para el programa que pide tres números al usuario y dice cuál es el mayor de los tres.

55. Crea un programa que use el operador condicional para mostrar un el valor absoluto de un número de la siguiente forma: si el número es positivo, se mostrará tal cual; si es negativo, se mostrará cambiado de signo.

56. Usa el operador condicional para calcular el menor de dos números.

57. Crea un programa que pida un número del 1 al 5 al usuario, y escriba el nombre de ese número, usando "switch" (por ejemplo, si introduce "1", el programa escribirá "uno").

58. Crea un programa que lea una letra tecleada por el usuario y diga si se trata de un signo de puntuación (. , ; :), una cifra numérica (del 0 al 9) o algún otro carácter, usando "switch" (pista: habrá que usar un dato de tipo "char").

59. Crea un programa que lea una letra tecleada por el usuario y diga si se trata de una vocal, una cifra numérica o una consonante, usando "switch"

60. Repite el ejercicio 2.1.9.1, empleando "if" en lugar de "switch".

61. Repite el ejercicio 2.1.9.2, empleando "if" en lugar de "switch" (pista: como las cifras numéricas del 0 al 9 están ordenadas, no hace falta comprobar los 10 valores, sino que se puede hacer con "if ((símbolo >= '0') && (símbolo <='9'))").

62. Repite el ejercicio 2.1.9.3, empleando "if" en lugar de "switch".

63. Crea un programa que pida al usuario su contraseña (numérica). Deberá terminar cuando introduzca como contraseña el número 1111, pero volvérsela a pedir tantas veces como sea necesario.

64. Crea un "calculador de cuadrados": pedirá al usuario un número y mostrará su cuadrado. Se repetirá mientras el número introducido no sea cero (usa "while" para conseguirlo).

65. Crea un programa que pida de forma repetitiva pares de números al usuario. Tras introducir cada par de números, responderá si el primero es múltiplo del segundo.

66. Crea una versión mejorada del programa anterior, que, tras introducir cada par de números, responderá si el primero es múltiplo del segundo, o el segundo es múltiplo del primero, o ninguno de ellos es múltiplo del otro.

67. Crea un programa que escriba en pantalla los números del 1 al 10, usando "while".

68. Crea un programa que escriba en pantalla los números pares del 26 al 10 (descendiendo), usando "while".

69. Crea un programa calcule cuantas cifras tiene un número entero positivo (pista: se puede hacer dividiendo varias veces entre 10).

70. Crea el diagrama de flujo y la versión en TypeScript de un programa que dé al usuario tres oportunidades para adivinar un número del 1 al 10.

## Requerimientos
Para poder leer entradas del usuario por consola de forma síncrona se hizo uso del módulo `prompt-sync`, como alternativa al nativo `readline` que trabaja de forma asíncrona y vuelve el código más largo.

Para instalarlo, ejecutar:
```bash
npm install prompt-sync
```

Cada ejercicio que pide datos por consola al usuario ya tiene importado el módulo:
``` typescript
const prompt = require('prompt-sync')();
```

Como estamos usando TypeScript, el editor nos marcará error, para ello debemos instalar los tipos:
``` bash
npm install --save-dev @types/prompt-sync
```

### Recursos de ayuda
Curso completo: https://www.typescriptlang.org/docs/

Ayuda de W3Schools: https://www.w3schools.com/typescript/

TypeScript Online: https://www.typescriptlang.org/play/

### [**Subir ⬆**](#actividad-poo-con-typescript-10-04)