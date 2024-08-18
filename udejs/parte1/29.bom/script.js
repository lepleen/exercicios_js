'use strict'
 

var janela

function abrirpop() {
    //metodo para abrir popup, pesquisar no w3school;
    janela = window.open('','nova janela', 'width=200, height=100')
}

function fecharpop(){
    janela.close()
}