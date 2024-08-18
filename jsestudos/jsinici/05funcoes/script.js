/*
function imc(peso, altura){
    let imc = peso / (altura ** altura);
    return imc;
}

console.log(imc(53, 1.53));


function corFavorita(cor) {
    if(cor === 'azul'){
        return "Azul cor do céu!"
    } else if (cor === 'verde'){
        return "Verde cor da natureza!"
    } else {
        return "Eu não gosto de cor!"
    }

}



addEventListener('click', function(){
    console.log("Oi")
})

imc(80, 1.80); // imc aparece no console


function imc2(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
  return
}


imc2(20, 1.8)


function terceiraIdade(idade){

    console.log(typeof idade);
    if(typeof idade !== 'number'){
        return "Por favor, insira sua idade em numeros!"
    }

    if(idade >= 60){
      return true;
    } else {
        return false;
    }
}

console.log(terceiraIdade(70));

function faltaVisitar (paisesJaVisitados){
    //variaverl totalPaises exclusiva do escopo
    //nao aparece fora desse escopo
    let totalPaises = 193;
    return `Faltam visitar ${totalPaises - paisesJaVisitados} paises`
}

*/

// Crie uma função para verificar se um valor é Truthy

function gerador_teste(val){
    return !!val;
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function somaQuad(ld1, ld2, ld3, ld4){

    let totLad = ld1 + ld2 + ld3 + ld4;

    if (ld1 !== ld2 && ld3 !== ld4){
        return "Não é um quadradado, a soma de todos os lados é: " + totLad;
    } else {
        return "É quadrado, todos os lados são iguais: " + totLad;
    }
    

}


console.log(somaQuad(5, 2, 14, 120));



// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function meuNometd(nome1, sobrenome){
    return nome1 + " " + sobrenome
}

console.log("Ola meu nome é ", meuNometd('leticia', 'chaves'));


// Crie uma função que verifica se um número é par

function numPr(num1){
    let mod = num1 % 2;

    if (mod === 0){
        return true;
    } else {
        return false;
    }
}

console.log(numPr(13))



// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)



// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

// Corrija o erro abaixo

/*
function precisoVisitar(paisesVisitados) {
    var totalPaises = 193;
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
  precisoVisitar(20);
  jaVisitei(20);
   */