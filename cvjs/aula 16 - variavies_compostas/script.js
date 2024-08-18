'use strict'

let num = [5,8,4];

num[3] = 6;
num.push(7);
num.length //atributo nao metodo por isso nao tem parentes
// num.sort() // coloca os numeros randomicamente
num.push(2);
console.log(num);
console.log(`valor do index esta na posicao:`, num.indexOf(8));
console.log(`o vetor tem ${num.length} posicoes`);
console.log(`o primiero valor e ${num[0]} posicoes`);
// console.log(num[0]);

for(let vetpos = 0; vetpos < num.length; vetpos++){
    console.log(`Posicao: ${vetpos} tem o valor: ${num[vetpos]}` );
}

// for(let pos in num ){
//     console.log(`A posicao de ${pos} tem o valor ${num}`);
// }//versao nova de loop ecma script 6 (somente para arrays e objs)