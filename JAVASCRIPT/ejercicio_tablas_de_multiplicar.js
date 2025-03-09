"use strict";
//Mostrar tabla de multiplicar de un numero ingresado por el usuario

/*var numero = parseInt(prompt("Ingrese el número para visualizar su tabla", 1));
document.write("<h1>Tabla del número " + numero + "</h1>");
for (var i = 1; i <= 10; i++) {
    document.write(i + " X " + numero + " = " + (i * numero) + "<br/>");
}*/
//Todas las tablas de multiplicar
for (var c = 1; c <= 10; c++) {
    document.write("<h1>Tabla del número " +c+ "</h1>");
    for (var i = 1; i <= 10; i++) {
        document.write(c + " X " + i + " = " + (i * c) + "<br/>");
    }
}
