'use strict'

/*EXEMPLO EXPLICACAO 
// 1 Cria um novo objeto
honda = {};

// 2 Define o protótipo
honda.prototype = Carro.prototype;

// 3 Aponta a variável this para o objeto
this = honda;

// 4 Executa a função, substituindo this pelo objeto
honda.marca = 'Marca';
honda.preco = 0;

// 5 Retorna o novo objeto
return honda = {
  marca: 'Marca',
  preco: 0,
}
*/
//versao1
// function Carro () {
//     this.marca = 'Gol';
//     this.ano = 1960;
//     this.cor = 'Preto';
//     this.preco = 2000;
// }
/*
function Carro (marcaAtribuida, precoAtribuido) {
    this.marca = marcaAtribuida;
    this.ano = 1960;
    this.cor = precoAtribuido;
    this.preco = 2000;
}

const corola = new Carro('civic', 4000);
const fiat = new Carro('Fiat', 6000);
fiat.ano = 2002;
fiat.marca = 'Fiat';

const jeep = new Carro();


function Carro2 (marca, precoInit){
    const taxa = 1.2;
    const precoFInal = precoInit * taxa;
    this.marca = marca;
    this.preco = precoFInal;
}

const belina = new Carro2('Belina', 6000);
 */

// const Dom =  {
//   seletor: 'li',
//   element(){
//     return document.querySelector(this.seletor);
     
//   },

//   ativar(){
//     this.element().classList.add('Ativar');
//   },
// }


/*

function Dom(seletor)  {
  this.element = function(){
    return document.querySelector(seletor);
     
  };

  this.ativar = function(){
    this.element().classList.add('Ativar');
  };
};

const li = new Dom('li');
const ul = new Dom('ul');

*/

// Transforme o objeto abaixo em uma Constructor Function

function Pessoa(nome, idade){
  this.nome = nome;
  this.idade = idade;
  this.andar = function(){
    console.log(this.nome + ' de' + idade + ' anos'+ ' Andou');
  }

};



// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

function OutraPessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

const joao = new OutraPessoa('Joao', 26 + " anos");
const maria = new OutraPessoa('Maria', 25 + " anos");
const bruno = new OutraPessoa('Bruno', 15 + " anos")


// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

///FAZER
