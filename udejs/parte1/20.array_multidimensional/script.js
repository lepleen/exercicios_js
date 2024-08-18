'use strict'

var lista_coisas = Array()
lista_coisas['frutas'] = Array()
//lista_coisas['frutas'] = Array('Banana', 'Laranja', 'Maca', 'Uva')

lista_coisas['frutas'][1] = 'Banana'
lista_coisas['frutas'][2] = 'Jaca'
lista_coisas['frutas'][3] = 'Mamao'
lista_coisas['frutas'][4] = 'Laranja'
console.log(lista_coisas)
//!!IMPORTANTE - se os valores dos indices forem iguais, o indice seguinta sobrepoe o valor do anterior


lista_coisas['pessoas'] = []
lista_coisas['pessoas']['a'] = 'Leticia'
lista_coisas['pessoas']['b'] = 'Wanderley'
lista_coisas['pessoas']['c'] = 'Edjane'

document.writeln(lista_coisas['frutas'][1])
document.writeln(lista_coisas['pessoas']['b'])


