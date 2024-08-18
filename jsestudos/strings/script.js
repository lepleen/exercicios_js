'use strict'

// const comida = 'Pizza';
// const agua = new String('Agua');

// console.log(typeof agua);
// console.log(typeof comida);

// const frase = 'A melhor comida';
// console.log(frase[3]);
// console.log(frase[frase.length - 1]);
// console.log(frase.charAt(4));
// console.log(frase.charAt(frase.length - 1));


// const frase2 = 'A melhor linguagem é ';
// const linguagem2 = 'Javascript';

// const frasFim = frase2 + linguagem2;
// const frasFim2 = frase2.concat(linguagem2, ' outra string', ' Outra outra string');

//  const fruta = 'Banana';
//  const listFrut = 'Melancia, Banana, Laranja';

//  console.log(fruta.includes(listFrut));
//  console.log(listFrut.includes(fruta));
//  console.log(listFrut.includes(fruta, 4));


//  console.log(fruta.startsWith('Ba'));//true
//  console.log(fruta.startsWith('ba'));//false comeca com "B" maiusculo nao minusculo
//  console.log(fruta.endsWith('na'));//true
//  console.log(fruta.endsWith('nas'));//false nao termina em "nas" e sim e "na"

// const frase3 = 'Ta';
// frase3.repeat(5);

// let listaItens = 'Camisa Bones Calcas Bermuda Vestidos Sais';
// listaItens = listaItens.replace(/[ ]+/g, ', ');

// let preco = 'R$ 1200,33';
// preco = preco.replace(',', '.');

// // const arrayLista = listaItens.split(', ');
// // const arrayLista = listaItens.split('a');
// const arrayLista = listaItens.split(' ');//string vazia quebra todas as letras uma por um

// console.log(arrayLista);


// const htmlText = '<div>O melhor item</div><div>A mlhor lista</div>';
// const htmlArray = htmlText.split('div');
// const newHtml =htmlArray.join('section');

// console.log(htmlText);
// console.log(htmlArray);
// console.log(newHtml);


// const sexo1 = 'Feminino';
// const sexo2 = 'feminino';
// const sexo3 = 'FEMININO';

// console.log(sexo1.toLowerCase() === 'feminino');

// const valor = ' R$ 23.99 ';
// valor.trim();//'R$ 23.99'
// valor.trimStart();//'R$ 23.99 '
// valor.trimEnd();//' R$ 23.99'


// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

// const transacoes1 = [
//     {
//       descricao: 'Taxa do Pão',
//       valor: 'R$ 39',
//     },
//     {
//       descricao: 'Taxa do Mercado',
//       valor: 'R$ 129',
//     },
//     {
//       descricao: 'Recebimento de Cliente',
//       valor: 'R$ 99',
//     },
//     {
//       descricao: 'Taxa do Banco',
//       valor: 'R$ 129',
//     },
//     {
//       descricao: 'Recebimento de Cliente',
//       valor: 'R$ 49',
//     },
//   ];
  

// let taxTot = 0;
// let recebimentoTotal = 0;

// transacoes1.forEach((item) =>{
    
//     const numeroLimpo = +item.valor.replace('R$ ','');
    
//     if (item.descricao.slice(0, 4) === 'Taxa'){
//         taxTot += numeroLimpo;
    
//     } else if (item.descricao.slice(0, 4) === 'Rece'){
//         recebimentoTotal += numeroLimpo;    
//     }


// });

// console.log(taxTot);
// console.log(recebimentoTotal);





//   // Retorne uma array com a lista abaixo
//   const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

//   const arrayTransp = transportes.split(';');
//   console.log(arrayTransp);





  
//   // Substitua todos os span's por a's



//   let html = `<ul>
//                   <li><span>Sobre</span></li>
//                   <li><span>Produtos</span></li>
//                   <li><span>Contato</span></li>
//                 </ul>`;

// html = html.split('span').join('a').toLowerCase();
// console.log(html);

//   // Retorne o último caracter da frase
//   const frase = 'Melhor do ano!';

// //console.log(frase[frase.length - 1]);
// console.log(frase.slice(-1) );
  
  // Retorne o total de taxas
  const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
  

  let totTax = 0;
  transacoes2.forEach((item) => {
    item = item.toLowerCase();
    item = item.trim();
    item = item.slice(0, 4);

    if(item === 'tari'){
        totTax++
    }
    console.log(item);
  });

  console.log(totTax);
  