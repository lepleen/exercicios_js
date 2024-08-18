'use strict'



/*
const h2 = document.querySelector('h2');
const mLista = document.querySelector('.ul1');

mLista.innerHTML = '<li>Novo item</li>';
// mLista.outerHTML = '<li>Novo item</li>';


console.log(mLista.innerHTML);
console.log(mLista.outerHTML);


const mLista2 = document.querySelector('.ul2');
// console.log(mLista.parentElement);
console.log(mLista2.nextElementSibling);
console.log(mLista2.previousElementSibling);
console.log(mLista2.children[0]);
console.log(mLista.children[mLista.children.length - 1]);//pega o ultimo item da lsita
console.log(mLista2.querySelector('li:last-child'));

console.log(mLista2.childNodes);
console.log(mLista2.previousSibling);


const minhaDiv = document.querySelector('.ajustes_padroes');
const titulo = minhaDiv.querySelector('.meu_titulo');
const meusPs = document.querySelector('.pdadiv');
const divImg = document.querySelector('.imgdadiv')


// mLista2.appendChild(titulo);//insere um elemento em outro lugar
minhaDiv.insertBefore(meusPs, titulo);//o segundo paramentro precisa ser de dentro da minhaDiv (ex: titulo)


minhaDiv.removeChild(titulo);

minhaDiv.replaceChild(divImg, meusPs);

const novoh1 = document.createElement('h1');
novoh1.innerText = 'Eu sou um novo h1';
novoh1.classList.add('titulo');

minhaDiv.appendChild(novoh1);
console.log(novoh1);


const h1 = document.querySelector('h1');
const uls2 = document.querySelector('.ul2');

const nwh1 = h1.cloneNode(true);
nwh1.classList.add('vermelho');

uls2.appendChild(nwh1);
 

 */






// console.log(nextLi.remove());

// Duplique o menu e adicione ele em copy

const mydiv = document.querySelector('.ajustes_padroes');
const copyMydiv = document.querySelector('.ul2');

const cloneMydiv = mydiv.cloneNode(true);

copyMydiv.appendChild(cloneMydiv);


// Selecione o primeiro DT da dl de Faq

const listaM = document.querySelector('.ul1');
const primeiroLi = listaM.querySelector('li');
const nextLi = primeiroLi.nextElementSibling;
console.log(nextLi);


// Substitua o conteúdo html de .faq pelo de .animais

const mydiv_remove = document.querySelector('.ajustes_padroes');
const selectP = document.querySelector('.select_p');

selectP.innerHTML = mydiv.innerHTML;

