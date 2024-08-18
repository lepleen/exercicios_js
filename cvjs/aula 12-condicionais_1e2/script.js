'use strict'


//#1 exercicio
// let idade = 18;
// console.log(`Voce tem ${idade} anos.`);
// if (idade < 16){
//     console.log('Não vota');
// } else if (idade < 18 || idade > 65 ){
//     console.log('Voto opcional');
// } else{
//     console.log('Voto obrigatorio');
// }

// //#2 exercicio
// let now = new Date()
// let hora = now.getHours();
// console.log(`Agora sao exatamente ${hora} horas.`);

// if(hora < 12){
//     console.log(`Bom dia`);
// } else if (hora <= 18) {
//     console.log(`Boa tarde`);
// } else {
//     console.log(`Boa noite`);
// }



// //#3 exercicio

let  m_date = new Date();
let diaSem = m_date.getDay();

/*

 hierarquia de horas do javascript
    
    0 = Domingo
    1 = Segunda
    2 = Terca
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 =Sabado


*/

switch(diaSem){
    case 0:
        console.log(`Domingo`);
        break
    case 1:
        console.log(`Segunda`);
        break
    case 2:
        console.log(`Terca`);
        break
    case 3:
        console.log(`Quarta`);
        break
    case 4:
        console.log(`Quinta`);
        break
    case 5:
        console.log(`Sexta`);
        break
    case 6:
        console.log(`Sabado`);
        break        
    default:
        console.log(`[ERRO] Dia invalido`);

}