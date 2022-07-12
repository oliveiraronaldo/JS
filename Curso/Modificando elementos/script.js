let p = document.getElementById("p1");

//recebe um elemento html
//p.innerHTML = "Novo conteúdo";
//p.innerHTML = "<h3>tem um h2 dentro do p </h3>"

//insere um texto
// p.innerText = "Conteúdo mais novo"
// p.innerText = "<h3>tem um h2 dentro do p </h3>"

//p.textContent = "Mais novo ainda"
//p.textContent = "<h2>tem um h2 dentro do p </h2>"

//mostra oq aparece na tela
console.log(p.innerText)

//mostra oq tem no html
console.log(p.textContent)

//altera a classe
p.className = ""

//altera a cor
p.style = "color:blue"

//console.log(p)

//pega um atributo qualquer da tag e pode alterar
console.log(p.getAttribute("minhaclasse"))
p.setAttribute("minhaclasse", "Maria")
console.log(p.getAttribute("minhaclasse"))