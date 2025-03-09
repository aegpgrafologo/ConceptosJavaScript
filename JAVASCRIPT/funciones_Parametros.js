'use strict';

function calculadora(numero1, numero2){
//Conjunto de instrucciones a ejecutar
    console.log("Suma: " +(numero1+numero2));
    console.log("Resta: " +(numero1-numero2));
    console.log("Multiplicación: " +(numero1*numero2));
    console.log("División: " +(numero1/numero2));
    console.log("****************************");
//return "!Hola soy la calculadora"
}
//Invocar o llamar a la funcion.
for (var i = 1; i <= 5; i++){
    console.log(i);
    calculadora(i, 5);
}