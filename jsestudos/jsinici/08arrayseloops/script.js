
// videoGames.pop(); // Remove o último item e retorna ele
// videoGames.push('3DS');//Adiciona um item ao final da lista
// videoGames.length()//Verifica o tamanho da array

// //loops com "FOR"
// for (let numero = 0; numero < 10; numero++) {
//     console.log(numero,"°");
// }

//loops com "WHILE"

// let i = 0;
// while (i < 10){
//     console.log(i);
//     ++i;
// }

let videoGames = ['switch', 'PS4', 'Xbox', 'Gamecube', '3Ds'];

// for (let item = 0; item < videoGames.length; item++){
//    console.log(videoGames[item]);
//    if(videoGames[item] === 'PS4'){
//     break;
//    }

// }


//Loops com "FOREACH"

// videoGames.forEach(function(game, index, array){
//     console.log(index, game, array);
// })


// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
// Interaja com a array utilizando um loop, para mostrar

// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

let brCamp = [1959, 1970, 1994, 2002];

brCamp.forEach(function(jogos){
   console.log (`O brasil ganhou a copa de ${jogos}`)
});





// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];


// for (var i = 0; i < frutas.length; i++){
//     console.log(frutas[i]);
//     if(frutas[i] === 'Pera'){
//         break;
//     }
// }

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

for (var i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
    if(frutas[i] === 'Pera'){
        break;
    }
}

let lastFruit = frutas[frutas.length - 1];