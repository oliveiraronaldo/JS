//acessa o elemento html pelo id
let p1 = document.getElementById("p1")
console.log(p1)

//acessa o elemento html pela classe (array)
let paragrafo = document.getElementsByClassName("paragrafo")
console.log(paragrafo)
for (let p of paragrafo) {
    console.log(p) 
}

//acessa o elemento html pela tag
let th = document.getElementsByTagName("h1")
console.log(th)
console.log(th[0])

let tp = document.getElementsByTagName("p")
console.log(tp)
//acessa o elemento pelo indice no array
console.log(tp[0])