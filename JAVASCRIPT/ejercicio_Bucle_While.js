'use strict';
/*Mostratr todos los numeros impares existentes entre dos numeros ingresados por el usuario*/
var numero1 = parseInt(prompt("Ingrese el numero inicial", 0));
var numero2 = parseInt(prompt("Ingrese el numero final", 0));

while (numero1 < numero2) {
    numero1++;
    if (numero1 % 2 != 0) {
        console.log("El " + numero1 + " es impar");
    }
}