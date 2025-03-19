'use strict';
//Funciones anonimas = funciones que no tienen nombre y se puede guardar dentro de una variable.
var pelicula = function(nombre){
    return "La pelicula es: "+nombre;
}
//Funciones callbacks = una función que se ejecuta dentro de otra
function sumame(numero1, numero2, suma_y_muestra, suma_por_dos){
    var sumar = numero1+numero2;
    suma_y_muestra(sumar);
    suma_por_dos(sumar);
    return sumar;
}
sumame(5, 7, function (dato){
    console.log("La suma es: ", dato); 
},
function(dato){
    console.log("La suma por dos es: ", (dato*2));
});