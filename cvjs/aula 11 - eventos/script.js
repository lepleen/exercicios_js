'use strict'


function calcular(){
    let txtv = window.document.querySelector('input#txtvel');
    let res = window.document.querySelector('div#res');
    let vel = Number(txtv.value);
    res.innerHTML = `sua velociade atual é de ${vel} km/h`;
    if (vel > 60) {
        res.innerHTML += `<p>Voce esta multado </p>`;
    }
    res.innerHTML += `<p>Dirija sempre com cinto de seguranca</p>`;
}