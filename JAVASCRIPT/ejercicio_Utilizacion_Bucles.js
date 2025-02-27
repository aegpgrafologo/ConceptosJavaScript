    'use strict';
    /*Usando un bucle, mostrar la suma y la media de los numeros introducidos por el usuario
    hasta que se ingrese un número negativo y ahi mostrar el resultado*/
    var suma = 0;
    var contador = 0;

    do {
        var numero = parseInt(prompt('Ingresa numeros hasta incluir numeros negativos', 0));
        if (isNaN(numero)) {
            numero = 0;
        } else if (numero >= 0) {
            suma = suma + numero;
            contador++;
        }
        console.log(suma);
        console.log(contador);
    } while (numero >= 0);

    alert('La suma de los numeros insertados, es: ' + suma);
    alert('La promedio de los numeros ingresados es: ' + (suma / contador));

