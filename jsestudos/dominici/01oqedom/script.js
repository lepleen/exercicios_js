'use strict'

// const href = window.location.href;
// console.log(href);

// if(href === "http://127.0.0.1:5500/dominici/01oqedom/index.html"){
//     console.log('Pagina certa!');
// }

// const h1select = document.querySelector('h1');
// // const h1classes = h1select.classList;

// h1select.addEventListener('click', function(){
//     console.log('encostou em ', h1select.innerText);
// })

// h1select.addEventListener('click', callbach1);


// Retorne o url da página atual utilizando o objeto window

const hrefpg = window.location.href;
console.log(hrefpg);

// Seleciona o primeiro elemento da página que
// possua a classe ativo

const elementAct = document.querySelector('.active');//seleciona o primeiro elemento ativo

// Retorne a linguagem do navegador
const lang = window.navigator.language;
console.log(lang)

// Retorne a largura da janela 
let windWid = window.innerWidth;
console.log(windWid);
