'use strict';
/*Mostrar los divisores de un numero introducido por el usuario*/
var numero = parseInt(prompt("Ingrese el numero para calcular sus divisores", 1));
for (var i = 1; i <= numero; i++) {
    if (numero % i == 0) {
        console.log("El numero " + i + " es divisor de " + numero);
    }
}