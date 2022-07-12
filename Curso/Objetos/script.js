//criando um objeto
var aluno = { nome: "Ronaldo", notas: [7.5, 5] };
console.log(aluno.notas[1]);

//adicionando uma propriedade ao objeto
aluno.matricula = 1234;
console.log(aluno);

//Outra forma de criar objetos
var alunos = new Object();
alunos.nome = "Ronaldo";
alunos.sobrenome = "Oliveira";
alunos.idade = "24";
console.log(alunos);

//métodos em um objeto
function calculoMedia(n1, n2) {
  return (this.notas[0] * 2 + this.notas[1]) / 2;
}

//atribuindo um objeto a uma variavel
var aluno = {
  nome: "Ronaldo",
  notas: [7, 9],
  media: calculoMedia,
};

var aluno1 = {
  nome: "Ronaldo",
  notas: [7, 9],
  media: calculoMedia,
};

console.log(aluno.nome);
console.log(aluno.media());

console.log(aluno1.nome);
console.log(aluno1.media());
