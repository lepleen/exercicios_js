//Exemplo funcao callback

function exibirArtigo (id, callbackSucesso, callbackErro){
    //logica: recuoerar o id via requuisicao http
    if(true){
        callbackSucesso('Funcoes de callback em JS', 'Funcoes de callback sao muito utilizadaz');
    } else{

        callbackErro('Erro ao recuperar os dados');
    }
}

var callbackSucesso = function(titulo, descricao){
    document.write('<h1>' + titulo + '</h1>');
    document.write('<hr>');
    document.write('<p>' + descricao + '</p>');

}

var callbackErro = function(erro){
    document.write('<p><b> ERRO: </b>' + erro + '</p>')
}

exibirArtigo(1, callbackSucesso, callbackErro)