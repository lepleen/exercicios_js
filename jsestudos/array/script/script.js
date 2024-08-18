'use strict'


const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 89];

const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }];

const carros = new Array('Ford', 'Fiat', 'Honda');


carros[2] = 'Ferrari';
carros[3] = 'Kia';
carros[20] = 'Hammer';

console.log(carros.length);


const li = document.querySelectorAll('li');

const ArrayLi = Array.from(li);

//para transformar a array em obj e necessario sempre colocar o `lenght`
const obj = {
    0: 'Leticia',
    1: 'Chaves',
    2: 'Silva',
    length: 3,
}

const objArray = Array.from(obj);


console.log(li);
console.log(ArrayLi);


console.log(Array.isArray(li));//false
console.log(Array.isArray(ArrayLi));//true

const frutas = ['banana', 'pera', ['uva roxa', 'uva verde']];
console.log(frutas.length);


const instrumentos2 = ['Guitarra', 'Baixo', 'Violao'];
instrumentos2.sort();//organiza a array por ordem alfabetica

const idades = [32,21,33,43,1,12,8];
console.log(idades);
idades.sort();//organiza os numeros de caracter em caracter
console.log(idades);
idades; // [1, 12, 21, 32, 33, 43, 8]



const carros = ['Ford', 'Fiat', 'VW'];
carros.unshift('Honda', 'Kia'); // 5 inseri intens no comeco do array
carros; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW'];

carros.push('Ferrari'); // 6 adiciona itens ao final da array
carros; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari'];


const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
const primeiroCarro = carros.shift(); // 'Ford' retira itenns do incio
carros; // ['Fiat', 'VW', 'Honda'];

const ultimoCarro = carros.pop(); // 'Honda' retira itenns do final
carros; // ['Fiat', 'VW'];

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
carros.reverse(); // ['Honda', 'VW', 'Fiat', 'Ford']; inverte a ordem da array

