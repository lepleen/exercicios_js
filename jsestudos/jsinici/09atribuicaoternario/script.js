let numero = 20;
numero += 10;
console.log(numero)

//OPERADOR TERNARIO

let idade = 27;
let nestaBebado = true;
let pdBeber = (idade >= 18 && nestaBebado) ? 'Pode beber' : 'Não pode beber';
console.log(pdBeber);



//IF abreviado (sem necessidade de chaves quando é 1 linha de codigo)
var possuiFaculdade = true;
if(possuiFaculdade) console.log('Possui faculdade');
else console.log('Não possui faculdade');

// ou
if(possuiFaculdade)
  console.log('Possui faculdade');
else
  console.log('Não possui faculdade');


  // Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 500;
console.log(scroll);

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;


darCredito = (possuiCarro && possuiCasa) ? 'Pode receber credito ': 'Não pode receber credito';
console.log(darCredito);