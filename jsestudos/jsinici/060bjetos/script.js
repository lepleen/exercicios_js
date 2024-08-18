/*

//EXEMPLOS DE OBJETOS
var pessoa = {
  nome: 'André',
  idade: 28,
  profissao: 'Designer',
  possuiFaculdade: true,
}

pessoa.nome; // 'André'
pessoa.possuiFaculdade; // true




*/

let pessoa = {
    nome: 'Leticia',
    idade: 27,
    endereco: 'AV dois',
    genero: 'Feminino ',
    estaCivil: 'Solteira',
    ensinoSup: true,
}

console.log(pessoa.nome, pessoa.idade, pessoa.endereco);

//----------------------------------------------------------

/*let quadr = {
    lados: 4,
    area: function(lado){
        return lado * lado;
    },

    perimetro: function(lado) {
        this.lados * 4; 
    }
}

console.log(quadr.area(5));

 */

let quadr = {
    lados: 4,
    area(lado){
        return lado * lado;
    },

    perimetro(lado){
        return this.lados * 4; 
    },

    cinco(){
        return 5;
    }
}

console.log(quadr.area(5));
console.log(quadr.perimetro(5));





//----------------------------------------------------------


// Crie um objeto com os seus dados pessoais
/*
let myData = {
    nome: "Leticia ",
    sobrenome: "C Silva",
    idade: 27,
    profissao: "Designer/game dev",
    estudante: true,
}

myData.nomeComp = function(){
    return `${this.nome} ${this.sobrenome}`
}
console.log(myData);


// Deve possui pelo menos duas propriedades nome e sobrenome
// Crie um método no objeto anterior, que mostre o seu nome completo

// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
  }
  
carro.preco = 3000;
console.log(carro);
 */

  // Crie um objeto de um cachorro que represente um labrador,
  // preto com 10 anos, que late ao ver um homem
  
  
let dog = {
    raca: 'Labrador',
    cor: 'Preto',
    idade: 10,

    latir(human){
        
        if(human === 'homem'|| human === 'mulher'){
            return console.log("Latir");
        
        }  else{
            return console.log('Não latir')    
        }

    }
}
