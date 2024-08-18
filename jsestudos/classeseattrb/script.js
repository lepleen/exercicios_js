'use strict'

window.onload = function(){

    const div_teste = document.querySelector('div');
    // console.log(paragrafo.classList[4]);
    div_teste.classList.add('ativando', 'testeclassjs');
    div_teste.classList.remove('ativando');
    
    //TOGGLE - se existir  a classe ele, ele remove, se a classe nao existe ELE CRIA
    div_teste.classList.toggle('ativando');
    
    if(div_teste.classList.contains('ativando')){
        div_teste.classList.add('sim_tem_ativo');
    } else{
        div_teste.classList.add('nao-tem');
    };
    
    
    // //modos antigos
    // div_teste.className = ' mais_classe';
    // div_teste.className = div_teste.className + ' vermelho';
    // div_teste.className += ' roxo';
    
    
    // console.log(div_teste.className);
    
    // const otrselect = document.querySelector('.ul1');
    // console.log(otrselect.attributes['data-texto']);
    
    const img = document.querySelector('img');
    console.log(img.getAttribute('src'));
    img.setAttribute('alt', 'é uma imagem');
    
    
    const verificaAlt = img.hasAttribute('alt');
    console.log(verificaAlt);
    
    // Adicione a classe ativo a todos os itens do menu
    
    // Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
    
    // Verifique se as imagens possuem o atributo alt
    
    // Modifique o href do link externo no menu
    
    
}

