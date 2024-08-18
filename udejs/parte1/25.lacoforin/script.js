'use strict'
 
let lista_convidados = Array()
lista_convidados['a'] = 'Jorge';
lista_convidados[10] = 'Jamilton';
lista_convidados['zebra'] = 'Jose';
lista_convidados[-1] = 'Ana';
lista_convidados[true] = 'Maria';



for(var x in lista_convidados){
    document.write('Indice ' + x + ' valor ' + lista_convidados[x] + `<br />`);
}