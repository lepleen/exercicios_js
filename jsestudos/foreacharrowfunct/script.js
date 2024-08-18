'use strict'
/*
const img = document.querySelectorAll('img');
let i = 0;
img.forEach(function(item, index, array){
    // console.log(item, index, array);
});

//--------------------------------------------------------
//ARROW FUNCTION
const img2 = document.querySelectorAll('img');
let x = 0;
img.forEach((item, index, array) => {
    // console.log(item, index, array);
});

//--------------------------------------------------------

//--------------------------------------------------------
//Obs: um unico item nao necessita de adicao de parentes
const img3 = document.querySelectorAll('img');
let y = 0;
img.forEach(item => {
    // console.log(item, index, array);
});

//--------------------------------------------------------
//Obs: uma unica libha de codigo nao necessita de adicao de chaves nem ; dentro 

let z = 0;
img.forEach(item => console.log(item, index, array));
 */

// Mostre no console cada parágrado do site
const meusPs = document.querySelectorAll('h2');
// console.log(meusPs);

meusPs.forEach((item, index) => {
    console.log(item.innerText);
})
// // Mostre o texto dos parágrafos no console

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);

