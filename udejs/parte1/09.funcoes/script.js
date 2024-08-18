function calcularAreaTerreno(largura, comprimento) {

   var area = largura * comprimento;
   
    // document.write('O terreno possui ' + area + ' metros quadrados');
    return area

}
var largura = prompt('Digite a largura do terreno em metros: ');
var comprimento = prompt('Digite a largura do terreno em metros: ');


var area = calcularAreaTerreno(Number(largura), Number(comprimento))
document.write('o terreno pussui ' + area + ' metros quadrados');