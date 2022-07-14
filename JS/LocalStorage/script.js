//guarda informaçoes na memoria do navegador(chave, conteudo)
//localStorage.setItem("nome", "Ronaldo");

//pega o item na memoria utilizando a chave
//let n = localStorage.getItem("nome");
//console.log(n)

//remove da memoria utilizando a chave
//localStorage.removeItem("nome");


//------------------------------

onload = function(){
    let nome = localStorage.getItem("nome");
    let h1 = document.getElementById("nome")
    h1.innerHTML = nome;
}

function atualizar(element){
    let valor = element.value;
    console.log(valor)
    let h1 = document.getElementById("nome")
    h1.innerHTML = valor

    localStorage.setItem("nome", valor)
}