'use strict';
/*BUCLE WHILE = Parecido al FOR, es menos estricto, es indefinido, una condición y cuando se cumpla esa condición se 
ejecuta un bloque de instrucciones infinitamente, si se incluye algo para que no se cumpla la condición entonces sale
del bucle*/

var year = 2018;
while (year <= 2051){
    //ejecuta esto
    console.log("Estamos en el año: "+year);
    //Se soluciona con un operador de incremento para que se cumpla la condición y no siga iterando.
    year++;
}
// DO WHILE - Permite ejecutar un bloque de instrucciones y luego evaluar la condición
var years = 30;
do{
    alert("SOLO CUANDO SEA DIFERENTE A 20");
    years --;
}while(years > 25);
