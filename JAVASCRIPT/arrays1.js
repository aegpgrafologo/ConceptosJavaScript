'use strict';
var lenguajes = new Array("JavaScript", "Java", "PHP", "Phyton", "C++");
//Recorrer el array utilizando FOR
document.write("<h1>Lenguaje de Programacion</h1>");
document.write("<ul>");
/*for(var i = 0; i < lenguajes.length; i++){
    document.write("<li>" + lenguajes[i] + "</li>");
}*/
//Tambien puede recorrerse con una funcion de callback o de flecha con forEach, iterando, recorriendo y mostrando los elementos
lenguajes.forEach((elemento, indice)=>{
    //document.write("<li>"+elemento+"</li>");
    //Si se quiere ver el indice donde se ubica cada elemento puedo hacerlo asi.
    document.write("<li>"+indice+" - "+elemento+"</li>");
});
document.write("</ul>");
