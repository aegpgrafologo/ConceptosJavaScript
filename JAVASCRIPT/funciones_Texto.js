'use strict';
//Transformación de cadenas de texto
var numero = 444;
var texto1 = "Hola soy Anyelo";
var texto2 = "Excelente dia";
//Convertir numero a string, se coloca el punto para acceder a los metodos que puedan emplearse en las variables.
var dato = numero.toString();
console.log(typeof dato);
// Convertir a mayusculas
    dato = texto1.toUpperCase();
console.log(dato);
// Convertir a minusculas
    dato = texto1.toLowerCase();
console.log(dato);
// Calcular longitud de un texto - cantidad de elementos que hay dentro de algo
var nombre = "ggfff";
    console.log(nombre.length);
//Concatenar o unir
var texto3 = "Babababa";
var texto4 = "Azulk";
//var textoFinal = texto3+" "+texto4;
var textoFinal = texto3.concat(" "+texto4);
    console.log(textoFinal);

