'use strict'
//Condicionales - Instrucciones que permite comparar algo.
/*var edad1 = 12;
var edad2 = 50;
//Si pasa esto
if(edad1>edad2){
//ejecuta esto.
    console.log("Edad1 es mayor que edad2");
}else{
    console.log("Edad1 es inferior que edad2");  
}*/
/*Operadores Relacionales
Mayor >
Menor <
Mayor o igual >=
Menor o igual <=
Igual ==
Diferente !=
*/
var edad = 59;
var nombre = "Anyelo Gomez";
if(edad>=18){
    //Usuario es mayor de edad
    console.log(nombre+ " tiene "+edad+ " años, es mayor de edad ");
    //anidar condiciones, es decir una o mas condiciones dentro de otra condición
    if(edad<=35){
        console.log("Todavia eres milenial");
    }else if(edad>=70){
        console.log("Eres anciano");
    }else{
        console.log("Ya no eres milenial");
    }
}else{
     //Usuario es menor de edad
     console.log(nombre+ " tiene "+edad+ " años, es MENOR de edad ");
}
/*Operadores logicos
AND (Y) : && -- ALT38
OR (O) :|| -- ALT 124
NEGACIÓN : ! -- ALT33
*/
// NEGACION
var year = 2027;
if (year != 2016){
    console.log("El año no es 2016 realmente es: "+year);
}
//AND
if (year >= 2000 && year <= 2025){
    console.log("Estamos en la era actual");
}else{
    console.log("Estamos en la era postmoderna");
}
//OR
if (year == 2016 || year == 2027){
    console.log("El año termina en 7");
}
// OR Dando prioridad a una condición con parentesis
if (year == 2016 || (year >= 2027 && year == 2037)){
    console.log("El año termina en 7");
}else{
    console.log("AÑO NO REGISTRADO");
}