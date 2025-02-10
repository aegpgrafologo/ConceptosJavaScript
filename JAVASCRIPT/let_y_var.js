'use strict'
//Tambien puede definirse varibales con la palabra reservada "let".
// var: define una variable global o local sin importar el ambito del bloque.
// let: permite definir variable limitando su alcance al bloque, declaración o expresión donde se este usando.
/*let raza = "Mestiza";
console.log(raza);*/
//Validación utilizando "var"
var numero = 40;
    console.log(numero); // Va a valer 40
if(true){
    var numero = 50;
    console.log(numero); // Va a valer 50
}
console.log(numero); // Va a valer 50
//Validación utilizando "let"
var texto = "Anyelo";
    console.log(texto); // Va a ser "Anyelo"
if(true){
    let texto = "Oscar";
    console.log(texto); // Va a ser "Oscar"
}
console.log(texto); // Va a ser "Anyelo"