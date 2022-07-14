
let pessoas = ["Ronaldo", "Jose", "Marcos", "Maria"]

function sortear(){
    np = pessoas.length;
    ns = Math.floor(Math.random() * np)
    document.getElementById("d").innerHTML = pessoas[ns]
}