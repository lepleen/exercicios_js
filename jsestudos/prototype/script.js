'use strict'


function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;
}

Pessoa.prototype.andar = function(){
    return this.nome + " pessoa andou";
}

Pessoa.prototype.nadar = function(){
    return this.nome + " pessoa nadou";
}


//const leticia = new Pessoa('Leticia', 27);

console.log(Pessoa.prototype);

//transforma em array
//const listaArray1 = Array.prototype.slice.call(lista);
//const listaArray2 = Array.from(lista);//

// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Human(nome, idade, profissao, altura, peso){
    this.nome = nome,
    this.idade = idade,
    this.profissao = profissao,
    this.altura = altura,
    this.peso = peso
};

Pessoa.prototype.nomeComp = function(){
    return `Ola sou ${nome}, trabalho com ${profissao} tenho ${idade}, peso ${peso} e tenho ${altura}`;
}

const leticia = new Human("Leticia C Silva", 28, "designer", 1.53, 56)
// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document
Object.getOwnPropertyNames(HTMLAllCollection.prototype);
Object.getOwnPropertyNames(NodeList.prototype);
Object.getOwnPropertyNames(Document.prototype);





// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li;
li.click;
li.innerText;
li.value;
li.hidden;
li.offsetLeft;
li.click();

// Qual o construtor do dado abaixo:
li.hidden.constructor.name;
