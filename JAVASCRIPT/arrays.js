'use strict';
/*Arrays, arreglos, matrices entre otros: Colección de datos o tipos de datos que puede tener una variable, se define entre corchetes
tambien puede definirse en forma de objeto, los arrays tienen un indice que inicia en 0*/
var nombres = ["Juan", "Pedro", "Anyelo", 53, true];
var lenguajes = new Array("JavaScript", "Java", "PHP");
// Para acceder a un elemento el siguiente ejemplo 
console.log(nombres[1]);
// Para ver la cantidad de elementos de un array.
console.log(lenguajes.length);
//Ejercicio> Un usuario coloca un indice y en un alert el programa muestra el valor del elemento
var elemento = parseInt(prompt("Que elemento del array quieres validar?", 0));
//alert(nombres[elemento]);
//Para informar al usuario que debe incluir un indice valido, lo podemos hacer utilizando un if
if(elemento >= nombres.length){
    alert("Introduce un indice correcto menor que " + nombres.length);
}else{
    alert("El indice seleccionado es: " + nombres[elemento]);
}







