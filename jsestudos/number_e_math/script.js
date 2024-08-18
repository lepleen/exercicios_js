'use strict'

// console.log(Number.isNaN(NaN));//true
// console.log(Number.isNaN('oi'));//false

// console.log(Number.isNaN(23.6));//false
// console.log(Number.isInteger(30));//true

// parseFloat('99.50');//mesma funcao sem o number
// Number.parseFloat('99.50');//99.50
// Number.parseFloat('R$99.50');//NAN nao inserir caracteres antes do numero
// parseInt('100 reais');// retorna 100
// parseInt('100.27 reais');// retorna 100


// const preco = 2.99;
// preco.toFixed();//retorna 3(string)


// const preco2 = 2.99;
// console.log(preco2.toFixed() + 3232);

// const carro = 1000.455;
// carro.toFixed(2);//1000.45l numero de casas decimais

// const preco3 = 2.99;
// preco.toString(10);//"2.99" transforma em string


// let val = 48.49;
// val = val.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

// console.log(val);


// // Retorne um número aleatório
// // entre 1050 e 2000
// const aleatorio = Math.floor(Math.random() * (2000 - 1050 + 1) * 1050) ;
// console.log(aleatorio);


// // Retorne o maior número da lista abaixo
// const numeros = '4, 5, 20, 8, 9';
// const arrayNumeros = numeros.split(', ');//converte em array separada por numeros
// const numeroMax = Math.max(...arrayNumeros);
// console.log(numeroMax);


// // Crie uma função para limpar os preços
// // e retornar os números com centavos arredondados
// // depois retorne a soma total


const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];


function limpaPreco (preco) {
  preco = +preco.toUpperCase().replace('R$', '').trim().replace(',', '.');
  preco = +preco.toFixed(2);
  // console.log(preco);
  return preco;
}


let soma = 0;
listaPrecos.forEach((preco) =>{
  soma += limpaPreco(preco);
});

console.log(soma.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));

limpaPreco(listaPrecos[1]);