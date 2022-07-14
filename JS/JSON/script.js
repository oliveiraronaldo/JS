let a = {
    nome: "Ronaldo",
    nota: 8.5,
}
let a2 = '{"nome": "Ronaldo", "nota": 8.2}'
console.log(a)
console.log(a2)

// JSON serve para transformar objetos em string ou vice versa
let b = JSON.stringify(a)
let c = JSON.parse(a2)

console.log(b)
console.log(c)

console.log(a2.nome)
console.log(c.nome)

