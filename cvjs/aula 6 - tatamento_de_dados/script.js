'use strict'

// let nome = window.prompt('Qual é o seu nome?');//
// window.alert('É um prazer te conehcer, ' + nome );

// let n1 = Number.parseInt(window.prompt('Digite - 1ª numero:'));
// let n2 = Number.parseInt(window.prompt('Digite - 2ª numero:'));
// let n1 = Number(window.prompt('Digite - 1ª numero:'));
// let n2 = Number(window.prompt('Digite - 2ª numero:'));

// let soma = n1 + n2;

// window.alert(`A soma entre ${n1} + ${n2} valor é de = ` + soma.toString());

let nome2 = window.prompt('Qual é o seu nome?');
document.write(`Seu nome tem ${nome2.length} letras </br>`);
document.write(`Seu nome em maiuscula é ${nome2.toUpperCase()} </br>`);
document.write(`Seu nome em minuscula é ${nome2.toLowerCase()}`);