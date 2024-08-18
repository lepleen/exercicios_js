'use strict'
 

function soma() {
    var resultado = 0
    for (var i in arguments){
        resultado += arguments[i];
    }
    return resultado
}


console.log(7, 5, 3.2, `texto`)