'use strict'


function verificar(){
    let data = new Date();
    let ano = data.getFullYear();
    let fano = document.getElementById('textano');
    // let res = document.getElementById('res') //versao antiga pegar pelo ID
    let res = document.querySelector('div#res');
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert(`[ERRO] Verifique os dados e tente novamente!`);

    } else {
        let fsex = document.getElementsByName(`radsex`);
        let idade = ano - Number(fano.value);
        // res.innerHTML = `Idade calculada: ${idade} anos`;
        let genero = ``;
        let img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if(fsex[0].checked){

            genero = 'Homem';
            if (idade >=0 && idade < 10){
                //CRIANCA
                img.setAttribute('src', 'crianca_masculino.png');
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src','jovem_masculino.png');
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'adulto_masculino.png');
            } else {
                //Idoso
                img.setAttribute('src', 'idoso_masculino.png');
            }
            
        } else if (fsex[1].checked){
            
            genero = 'Mulher';
            if(idade >=0 && idade < 10){
                //CRIANCA
                img.setAttribute('src', 'crianca_feminino.pngcrianca_feminino.png');

            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'jovem_feminino.png');
            } else if (idade < 50){
                //Addulto
                img.setAttribute('src', 'adulto_feminino.png');
            } else {
                //Idoso
                img.setAttribute('src', 'idoso_masculino.png');
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero}, com ${idade} anos`;
        res.appendChild(img)
    }
}
