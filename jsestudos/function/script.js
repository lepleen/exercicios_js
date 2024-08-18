'use strict'

const perimetro = new Function('lado','return lado * 4');

function somar(n1, n2){
    return n1 + n2;
}

console.log(somar(3,3));