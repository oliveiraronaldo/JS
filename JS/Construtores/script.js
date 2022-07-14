//funcao contrutor
function criarAluno(nome, n1, n2) {
  var aluno = {
    nome: nome,
    nota1: n1,
    nota2: n2,
    media: function () {
      return (this.nota1 + this.nota2) / 2;
    },
  };
  return aluno;
}

//criando um array de alunos
var turma = [
  criarAluno("Ronaldo", 10, 45),
  criarAluno("Jose", 10, 52),
  criarAluno("Maria", 4, 2),
];

//metodo para imprimir a lista de alunos
turma.forEach((element) => {
  console.log(element, element.media());
});


//outra forma de construtor
function construtorAluno(nome, n1, n2) {
  this.nome = nome;
  this.nota1 = n1;
  this.nota2 = n2;

  this.media = function media() {
    return (this.nota1 + this.nota2) / 2;
  };
}
//instanciando o aluno
var a = new construtorAluno("Ronaldo", 15, 10);
console.log(a);
console.log(a.media());
