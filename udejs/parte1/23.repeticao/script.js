'use strict'
 
//estrutura de repeticao WHILE
/*
let x = 1

while(x <= 10){

    x++

    if(x === 5) {
        continue
    }

    document.write(x + `<br />`)
    
}
console.log(`Fim`) */


/*
let x = 11;

do {

    //comandos
    //condicao e executada apos a primeira execucao do bloco
    //significa que sera executado pelo menos uma vez

    document.write(x + '<br />')
} while(x <= 10);
 */

/*
for(var x = 10 ; x >= 0; x--){
    document.write(x + '<br />')

}
    */


let lista_frutas = Array()

lista_frutas[0] = 'Banana';
lista_frutas[1] = 'Maca';
lista_frutas[2] = 'Morango';
lista_frutas[3] = 'Uva';

console.log(lista_frutas.length)

let y = 0

while(y < lista_frutas.length){
    document.write(lista_frutas[y] + '<br />')
    y++
}


