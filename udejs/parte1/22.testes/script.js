'use strict'
 
let objetos = Array('Cadeira', 'Impressora', 'Garfo')


function verArray(){
    let result = document.getElementById('conteudo').value
    document.getElementById('conteudo').value = ''

    if(result.indexOf(result) !== -1 ) {
        window.alert('Informe um calor valido')
    } else {
        result.push(result)
        console.log(result)
        document.getElementById('conteudo')
    }
}