'use strict';
/*Realizar un programa tipo calculadora bajo las siguientes condiciones:
-Solicite al usuario ingresar dos valores numericos por pantalla.
-Si se insertan valores no validos, que vuelva a solicitar el ingreso.
-Debe verse en el cuerpo de la pagina, en una alerta y por consola el resultado de las operciones :
sumar - restar - multiplicar y dividir.*/
var numero1 = parseInt(prompt("Ingrese el primer número", 0));
var numero2 = parseInt(prompt("Ingrese el segundo número", 0));

while (numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)) {
    numero1 = parseInt(prompt("Ingrese el primer número", 0));
    numero2 = parseInt(prompt("Ingrese el segundo número", 0));
}

var resultado = "La suma es: " + (numero1 + numero2) + " <br/>" +
                "La resta es: " + (numero1 - numero2) + " <br/>" +
                "La multiplación es: " + (numero1 * numero2) + " <br/>" +
                "La división es: " + (numero1 / numero2) + " <br/>";

var resultadoAlert = "La suma es: " + (numero1 + numero2) + " \n " +
                    "La resta es: " + (numero1 - numero2) + " \n " +
                    "La multiplación es: " + (numero1 * numero2) + " \n " +
                    "La división es: " + (numero1 / numero2) + " \n ";
document.write(resultado);
alert(resultadoAlert);
console.log(resultadoAlert);