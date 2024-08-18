'use strict'

// let num = [5, 8, 2, 9, 3];
// console.log(`Nosso vetor e o ${num}`);

// num[3] = 6;
// num.push(7)


function parimpar(n){
    if (n%2 == 0){
        return 'par';
    } else {
        return 'impar';
    }
}

// parimpar(2)//nao aparece resultado, precisa de variavel
// let resp = parimpar(2);
console.log(parimpar(2))//aparece na tela pois esta em um console

function soma(n1, n2) {
    return n1 + n2;
}
console.log(soma(2, 5));


let v = function(x){
    return x * 2;
};

console.log(v(5));


function fatorial(n){
    let fat = 1;
    for(let c = n; c > 1; c--){
        fat *=  c;
    }
    return fat
}

console.log(fatorial(5))