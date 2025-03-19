'use strict';
//Parametros REST y SPREAD - REST con el uso de los tres puntos se captura el numero indefinido de parametros en un array.
function listadoFrutas(fruta1, fruta2, ...restoDeFrutas){
    console.log("Fruta 1: ", fruta1);
    console.log("Fruta 2: ", fruta2);
    console.log(restoDeFrutas);
}
listadoFrutas("Naranja", "Manzana", "Sandia", "Pera", "Limon", "Coco");
//SPREAD - Colocando los tres puntos antes de llamar la varaible captura el resto de parametros que se esten pasando en un array
var frutas = ["Naranja", "Manzana"];
listadoFrutas(...frutas, "Sandia", "Pera", "Limon", "Coco");