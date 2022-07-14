function loaded(){
let t =  document.getElementById("titulo");
//adiciona um evento atraves do JS
t.onclick = clique;

//outra forma de adicionar um evento pelo JS
t.addEventListener("mouseover", mouseon)
t.addEventListener("mouseout", mousefora)
}


function mousefora(){
    this.innerHTML = "Mouse Fora"
}
function clique(){
    this.innerHTML = "Clicado"
}
function mouseon (){
    this.innerHTML = "Mouse em cima"
}