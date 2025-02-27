'use strict'
//ALERTAS
alert("Esta es mi alerta");
alert("Segunda alerta");
//Confirmación - Se usa en función del usuario
var mi_Resultado = confirm("¿Esta seguro de continuar?");
console.log(mi_Resultado);
//Ventana Ingreso Datos por usuario
var validar = parseInt(prompt("¿Cual es tú edad?", 0));
console.log(typeof validar);