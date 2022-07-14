let inputadultos = document.getElementById("adultos");
let inputcriancas = document.getElementById("criancas");
let inputduracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    console.log("calculando");
    let adultos = inputadultos.value;
    let criancas = inputcriancas.value;
    let duracao = inputduracao.value;
    let totalCarne = carnePP(duracao) * adultos + (carnePP(duracao)/2 * criancas);
    let totalCerveja = cervejaPP(duracao) * adultos;
    let totalbebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao)/2 * criancas);

    
    console.log(totalCarne);
    console.log(totalCerveja);
    console.log(totalbebidas);

    resultado.innerHTML = `<p>${totalCarne / 1000} Kg de Carne</p>`;
    resultado.innerHTML += `<p>${totalCerveja / 1000} L de Cerveja</p>`;
    resultado.innerHTML += `<p>${totalbebidas / 1000} L de Bebidas</p>`;
}

function carnePP(duracao){
    if(duracao >= 6){
        return 650;
    }else{
        return 400;
    }
}

function cervejaPP(duracao){
    if(duracao >= 6){
        return 2000;
    }else{
        return 1200;
    }
}

function bebidasPP(duracao){
    if(duracao >= 6){
        return 1500;
    }else{
        return 1000;
    }
}