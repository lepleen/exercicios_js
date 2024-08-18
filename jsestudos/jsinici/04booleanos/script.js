/*let posssuiGraduacao = false;
let possuiDoutorado = true;


if(posssuiGraduacao){
    console.log("Possui graduação");

} else if(possuiDoutorado){
    console.log("Possui doutorado");
} else {
    console.log("Não possui ensino superior");
}


// Falsy
if(false)
if(0) // ou -0
if(NaN)
if(null)
if(undefined)
if('') // ou "" ou ``


// Truthy
if(true)
if(1)
if(' ')
if('andre')
if(-5)
if({})



let cond = (5 - 10) && (5 + 5)
let divisor = "_______________________";
;
if(cond){
    console.log("Verdadeiro ", cond)
} else {
    console.log("False");
} 
console.log(divisor);

let cond2 = (5-5) || (5+5) || (10-2);
console.log(cond2);

console.log(divisor);



let corFav = ' ';
switch (corFav){
    case 'Azul':
        console.log("Azul = cor do céu!");
        break
    case 'Cinza':
        console.log("Cinza = cor do asfalto!");
        break
    case 'Amarelo':
        console.log("Amarelo: cor do Sol!");
        break
    default:
        console.log("Você não escolheu uma cor ainda!");
        break
}



 */

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'


let mIdade = 27;
let mae = 56;



if (mIdade > mae) {
    console.log("É maior do que ", mae)
} else if (mIdade < mae){
    console.log("É menor ");
}


// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil >= china){
    console.log("Brasil tem mais habitante: ", brasil);
} else {
    console.log("China tem mais habitantes: ", china)
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}