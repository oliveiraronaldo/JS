function mudartexto() {
  let h = document.getElementsByTagName("h1")[0];
  h.innerHTML = "Novo Titulo";

  //executa a funcao com um delay
  // setTimeout((mudarcor) => {
  //     let h = document.getElementsByTagName("h1")[0]
  //     h.style.color = "blue"
  // }, 3000);

  //atualiza a cada intervalo de tempo
}




var numero = 0;
var interval;

function iniciar() {
  interval = setInterval(function atualizartexto() {
    let h = document.getElementsByTagName("h1")[0];
    h.innerHTML += " " + numero;
    numero++;
  }, 1000);
}

function parar() {
    //para o interval
    clearInterval(interval);
}
