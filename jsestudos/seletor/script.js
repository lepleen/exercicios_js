'use strict'

/*

const testandoSeletor = document.getElementsByClassName('testes');
console.log(testandoSeletor[2])

const firstLi = document.querySelector('li');
firstLi.classList.add('li')
console.assert(firstLi);

const firstLiUl = document.getElementsByTagName('ul');
firstLi.querySelectorAll('li');
console.log(firstLiUl);

const linksInt = document.querySelector('[href^="#"]');
console.log(linksInt.href);

const imgteste = document.querySelectorAll('.testando');
console.log(imgteste);

const allli = document.querySelectorAll('li');
console.log(allli);


// allli.forEach(function(item, index){
//     console.log(item)
// })


const arrayGrid = Array.from(testandoSeletor);
console.log(testandoSeletor)

// arrayGrid.pop()
// console.log(arrayGrid); */


// Retorne no console todas as imagens do site
const myImgs = document.querySelectorAll('img');
console.log(myImgs.length);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const otrImages = document.querySelectorAll('img[src^="assets/testesimage.png"');
console.log(otrImages);

// Selecione todos os links internos (onde o href começa com #)
const linkTag = document.querySelectorAll('[href^="#"]');
console.log(linkTag);

// Selecione o primeiro h2 dentro de .animais-descricao

const firsh2 = document.getElementsByTagName('h2');
console.log(firsh2[0]);

// Selecione o último p do site
const lastP = document.querySelectorAll('p');
// console.log(lastP[lastP.length - 1]);


