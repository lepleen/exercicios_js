'use strict'

const carros = ['Ford', 'Fiat', 'Honda'];

carros.forEach(function(item, index, array){
    console.log(item.toUpperCase(), index, array);

})

//metodo arrow function
console.log('metodo arrow function')
carros.forEach((item, index, array) => {
    array[index] = `Teste`;
    console.log(item, index, array);

});

const li = document.querySelectorAll('li');

li.forEach((i, index) => {i.classList.add('ativo' + index)});


li.forEach(function(item){
    item.classList.add('Ativa');
})


//quando uma funcao e colocada em uma variavel com loop foreach, ela sempre retorna undefined
const retornoForeach = li.forEach((i, index) => {
    i.classList.add('ativo' + index)
});

console.log(retornoForeach);


//funcao sem retorno e sempre undefined
const carros2 = ['Ford', 'Fiat', 'Honda'];
const newCarros = carros2.map((item) => {
  return item.toUpperCase();
//   return 'Carro ' + item.toUpperCase();

});


console.log(newCarros[0] = "teste");
console.log(newCarros);
console.log(carros2);

carros; // ['Ford', 'Fiat', 'Honda']
newCarros; // ['Carro Ford', 'Carro Fiat', 'Carro Honda']; 


const numero = [2, 4, 5, 78];
const numerosx2 = numero.map(n => n *2 );

console.log(numerosx2);


//REVER E TENTAR FAZER O EXERCICIO ~~~"ARRAY E INTERACAO 4" PARA TESTAR O CONHECIMENTO