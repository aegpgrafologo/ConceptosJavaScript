'use strict';
/*Realizar un programa que indique si un numero ingresado por el usuario es par o impar.
1. Si el numero ingresado no es valido debe volver a solicitarlo
*/
var numero = parseInt(prompt("Ingrese un numero entero", 0));
while (isNaN(numero) || (numero<=0)){
    numero = parseInt(prompt("Ingrese un numero valido", 0));
}
if (numero % 2 == 0) {
    alert("El numero ingresado es par");
} else {
    alert("El numero ingresado es impar");
}