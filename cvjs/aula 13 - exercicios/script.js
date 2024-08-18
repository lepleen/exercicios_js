'use strict'


function loader(){
    let msg = window.document.getElementById( "msg" );
    let img = window.document.getElementById("imagem");
    let data_do_dia = new Date();
    let hora = data_do_dia.getHours();
    msg.innerHTML = `Agora sao ${hora} horas.`

    if(hora >= 0 && hora < 12){
        //Bom dia
        img.src = '1.png';
        document.body.style.background = '#f1f51a';
    } else if (hora >= 12 && hora <= 18){
        //boa tarde
        img.src = '2.png';
        document.body.style.background = '#cc9600';

    } else {
        //boa noite
        img.src = '3.png';
        document.body.style.background = '#052742';


    }
} 
