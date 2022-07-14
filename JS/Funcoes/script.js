//criando uma funcao
function media(n1, n2) {
  var nota1 = n1;
  var nota2 = n2;
  var media = (nota1 + nota2) / 2;

  console.log("A média dos números digitados é: " + media);

  return media;
}

console.log(media(6, 10));
console.log(media(9, 10));

//atribuindo uma funcao a uma variavel --- funcao oculta
var media1 = function (n1, n2) {
  return (n1 + n2) / 2;
};

console.log(media1(5, 6));
