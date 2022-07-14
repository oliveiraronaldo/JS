{
let d1 = document.getElementById("d1");

//acessa o filho do elemento
console.log(d1.children[0]);
let h1 = d1.children[0];

//acessa o pai do elemento
console.log(h1.parentElement)

//acessa os filhos de "body" em um array
console.log(document.body.children[1])
}

//--------------//

{
let h1 = document.getElementsByTagName("h1")
console.log(h1)

//varre o array, imprime o elemento e adiciona um evento a cada um
for (let h of h1) {
    console.log(h)
    h.addEventListener("click", qop /* funcao que vai ser executada para cada elemento do array de acordo com o evento*/)
}


function qop(e){
    //"e" é o evento
    console.log(e)
    //acessa o alvo do evento
    let t = e.target;
    console.log(t)  //alvo do evento
    console.log(t.parentElement)    //pai do alvo do elemento

}

}