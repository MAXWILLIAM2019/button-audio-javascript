// função responsável por receber id do som e reproduzir
function tocarSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

  if (elemento != null && elemento.localName === 'audio') {
    elemento.play();
  } 
  else {
    console.log("Elemento não encontrado ou seletor inválido");
  }

}


// seta todas as teclas e atribui na var listaDeTeclas
const listaDeTeclas = document.querySelectorAll(".tecla");


// função rereponsável por buscar o id do som capturado pela ação de click ou teclado
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idSom = `#som_${instrumento}`; 

  tecla.onclick = function () {
    tocarSom(idSom);
  };

  tecla.onkeydown = function (evento) {
    console.log(evento.code === "Space" || evento.code === "Enter");

    if (evento.code === "Space" || evento.code === "Enter") {
      tecla.classList.add("ativa");
    }
  };

  tecla.onkeyup = function () {
    tecla.classList.remove("ativa");
  };
}

