'use strict'
 


var video = Array();

video[1] = Array();
video[1]['nome'] = 'Full Metal Alchemist';
video[1]['categoria'] = 'anime';


function getVideo(video){


    try {
        //todo codigo passivo de erro deve ficar dentro do try
        console.log(video[0]['nome']);

        

    } catch (erro){
        
        tratarErro(erro); //string do erro
        console.log('agora sim podemos tratar esse erro')
        throw new Error ('Houve um erro, mas nao se preocupe estamos trabalhando nisso')

    } finally {
        //apos "tentar" = try, ele finzaliza o erro "finally" com alguma coisa
        console.log(`Sempre passa por aqui!`)
    }

    console.log(`A aplicacao nao morreu`);
}

function tratarErro(erro){
    //logica para registrar erro  no servidor
    console.log(erro)
}

getVideo(video)