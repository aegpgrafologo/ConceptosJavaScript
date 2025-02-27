'use strict';
/*Programa que solicite al usuario dos numeros e indique, cual es el mayor, cual el menor o si son iguales;
asi mismo si el valor ingresado no corresponde a un número o simplemente son iguales o menores a cero, solicite de nuevo
la información.*/
/*Para solicitar el ingreso se usa la función prompt y para asegurar que el dato es numerico y no de cadena de texto, se 
utiliza parseInt*/
var primer_Numero = parseInt(prompt("Ingrese el primer número", 0));
var segundo_Numero = parseInt(prompt("Ingrese el segundo número", 0));
//Utilizando while validamos la parte final del enunciado
while (primer_Numero <= 0 || segundo_Numero <= 0 || isNaN(primer_Numero) || isNaN(segundo_Numero)) {
    primer_Numero = parseInt(prompt("Ingrese el primer número", 0));
    segundo_Numero = parseInt(prompt("Ingrese el segundo número", 0));
}
//Haciendo uso de las funciones IF, ELSEIF y ELSE efectuamos las comparaciones
if (primer_Numero == segundo_Numero) {
    alert("Los números igresados son iguales");
} else if (primer_Numero > segundo_Numero) {
    alert("El número mayor es: " + primer_Numero);
    alert("El número menor es: " + segundo_Numero_Numero);
} else if (segundo_Numero > primer_Numero) {
    alert("El número mayor es: " + segundo_Numero);
    alert("El número menor es: " + primer_Numero);
} else {
    alert("Ingrese numeros validos");
}