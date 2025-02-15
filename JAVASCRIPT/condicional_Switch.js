'use strict'
//switch
var billete = 10000;
var imprimir = "";
switch(billete){
    case 100000:
        imprimir = "Tienes el billete de denominación más ALTA";
    break;
    case 50000:
        imprimir = "Tienes el billete de denominación media";
    break;
    case 20000:
        imprimir = "Tienes el billete de denominación media-baja";
    break;
    case 10000:
        imprimir = "Tienes el billete de denominación Baja";
    break;
    default:
        imprimir = "Tienes el billete con denominación NO REGISTRADA";
    break;
}
console.log(imprimir);