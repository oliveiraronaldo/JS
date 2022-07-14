// function h1click(){
//     console.log("executando a funcao")
// }

function changeh1(element){
    let h1 = document.getElementsByTagName("h1")[0]
    h1.innerText = element.value
}

function hideh1(){
    let h1 = document.getElementsByTagName("h1")[0]
    h1.style.display = "none";
}