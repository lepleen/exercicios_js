'use strict'
// const img = document.querySelector('img');


// function callback(){
//     console.log('clicou!!!')
// }
// img.addEventListener('click', callback);



/* 
const imgsList = document.querySelector('.milha_lista_de_imgs');


function callbackLista(event) {
    console.log(event.currentTarget);//sempre o elemento selecionado "ex: imgList"
    // console.log(event.target);//sempre onde voce clicou
    console.log(event.type);
}




imgsList.addEventListener('click', callbackLista);
console.log(imgsList);*/

/*

function handLinkExt(event){
    event.preventDefault();
    console.log('clicou');
}

const linkExt = document.querySelector('a[href^="http"]');
linkExt.addEventListener('click', handLinkExt);


function handleEvent(event){
    console.log(event.type, event);
}

const h1 = document.querySelector('h1');
h1.addEventListener('click', handleEvent);
h1.addEventListener('mouseenter', handleEvent);
// h1.addEventListener('mousemove', handleEvent);//usar com cuidado pois demanda muito processamento do navegador
 */

// window.addEventListener('scroll', handleEvent);
// window.addEventListener('resize', handleEvent);


/*
function handleKeyboard (event){
    if(event.key === 'f'){
        document.body.classList.toggle('azul');
    }
    console.log(event.key);
}
window.addEventListener('keydown', handleKeyboard);
 */

/*

const imgs = document.querySelectorAll('img');


function handleImg(event){
    console.log(event.currentTarget.getAttribute('src'));
    // console.log(event.target.getAttribute('src'));
}

imgs.forEach((img) => {
    img.addEventListener('click', handleImg);
});
 */

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links


const linksInternos = document.querySelectorAll('a[href^="#primero"]');

function handleLink(event){
    event.preventDefault();
    linksInternos.forEach((link) => {
        link.classList.remove('ativo');
    });
    event.currentTarget.classList.add('ativo');


}

linksInternos.forEach((link) => {
    link.addEventListener('click', handleLink);
});//nao funcionou (rever)

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados


/* 

const tdsElem = document.querySelectorAll('body *');


function handleElemt(event) {
    event.currentTarget.remove();
}


tdsElem.forEach((elem) => {
    elem.addEventListener('click', handleElemt);
})

console.log(tdsElem);
*/

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

function cliqueT(event){
    console.log(event.key);
    if(event.key === 't'){
        document.documentElement.classList.toggle('doubleText');
    }
};

window.addEventListener('keydown', cliqueT);


