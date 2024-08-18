'use strict'

//ISOLAR O CODIFO EM FUNCOES EVITA ERROS NO ESCOPO
function iniTabNav () {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');
    
    //SETA O PRIMEIRO ITEM COMO ATIVO NO SITE
    if(tabMenu.length && tabContent.length){
        tabContent[0].classList.add('ativo');
    
        //FUNCAO QUE ATIVA A TAB DE ACORDO COM NUMERO DO INDEX
        function activeTab(index){
            tabContent.forEach((section) =>{
                section.classList.remove('ativo');
            })
            tabContent[index].classList.add('ativo');
        }
        
        //ADICIONA O EVENTO DE CLIQUE NO ITEM SELECIONADO E MUDA O INDEX
        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            });
        });
    }
}
//DEPOIS DE CRIAR A FUNCAO SEMPRE LEMBRAR DE INICIA-LA
iniTabNav();


function initAccordion(){
    const activeClass =  'ativo';
    const accordionList = document.querySelectorAll('.js-accordion dt');
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);
    
    //SECAO DE FAQ
    function activeAccordion(){
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        }
        //ADICIONA UM EVENTO EM CADA UM DOS ELEMENTOS DA LISTA
    accordionList.forEach((item) => {
        item.addEventListener('click', activeAccordion);
    });
    
    
}

initAccordion();



function initScrollSmooth(){
    
//SELECIONA TODOS OS LINKS "A" DO MENU QUE TENHA A #
const linkInt = document.querySelectorAll('.js-menu a[href^="#"]');

function scrollToSection(event){
    event.preventDefault();
    //PEGA O HREF DO ITEM CLICADO
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    console.log(href);
    const top = section.offsetTop;

    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });

    //MODO INDIE
    // window.scrollTo({
    //     top: top,
    //     behavior: 'smooth',
    // });
}
//ADICIONA UM EVENTO A CADA ITEM INTERNO ATRAVES DO LOOP
linkInt.forEach((link) => {
    link.addEventListener('click', scrollToSection);
});
}

initScrollSmooth();/**/
//ANIMACAO DAS SECOES A PARTIR DO SCROLL
const sections = document.querySelectorAll('.js-scroll');

const windowMiddle = window.innerHeight * 0.3;
function Anim_Page (){
        
    if(sections.length){
        //FUNCAO QUE ANIMA O SCROLL
        function animScroll (){
            //DESCOBRE A DISTANCIA QUE CADA ELEMENTO ESTA DO TOPO CHAMADA TODA VEZ QUE O SCROLL É ATIVADA
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top - windowMiddle;
                const visibleSection = (sectionTop - windowMiddle) < 0;
                console.log(sectionTop);
                if(visibleSection){
                    // console.log('animar');
                    section.classList.add('ativo');
                }else {
                    section.classList.remove('ativo');
                }
            });
            // console.log('Sim');
        }

        animScroll ();
        //EVENTO DE SCROLL É ACIONADO ATRAVÉS DO WINDOW POIS É UM EVENTO GERAL
        window.addEventListener('scroll', animScroll);
    }
}
Anim_Page();