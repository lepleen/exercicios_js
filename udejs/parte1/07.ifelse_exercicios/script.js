var nota = prompt('Digite a nota do aluno: ');
var faltas = prompt('Digite a quantidade de faltas: ');

var media = 7;
var faltas_maxi = 15;

// if (nota >= media && faltas <= faltas_maxi){
//     document.write('aprovado');
// } else {
//     document.write('reprovado')
// }

// exemplo de operador ternario
var resultado = (nota >= media && faltas <= faltas_maxi) ? 'aprovado' : 'reprovado';
document.write(resultado)