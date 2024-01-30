const nomeCapitulo = document.getElementById("capitulo");
const audio = document.getElementById("audio-capitulo");
const botaoPlayPause = document.getElementById("play-pause");
const botaoAvancar = document.getElementById("proximo");
const botaoVoltar = document.getElementById("anterior");

const numeroCapitulos = 10;
let taTocando = 0;
let capituloAtual = 1;

function tocarFaixa() {
  audio.play();
  botaoPlayPause.classList.remove("bi-play-circle");
  botaoPlayPause.classList.add("bi-pause-circle");
}

function pausarFaixa() {
  audio.pause();
  botaoPlayPause.classList.add("bi-pause-circle");
  botaoPlayPause.classList.remove("bi-play-circle");
  taTocando = 0;
}

function tocarOuPausar() {
  if (taTocando === 0) {
    tocarFaixa();
    taTocando = 1;
  } else {
    pausarFaixa();
    taTocando = 0;
  }
}

function trocarNomeFaixa() {
  nomeCapitulo.innerText = "Capitulo" + capituloAtual;
  tocarFaixa();
  taTocando = 1;
}

function proximaFaixa() {
  if (capituloAtual === numeroCapitulos) {
    capituloAtual = 1;
  } else {
    capituloAtual = capituloAtual + 1;
  }
  audio.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
  tocarFaixa();
  taTocando = 1;
  trocarNomeFaixa();
}

function voltarFaixa() {
  if (capituloAtual === 1) {
    capituloAtual = numeroCapitulos;
  } else {
    capituloAtual = capituloAtual - 1;
  }
  audio.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
  tocarFaixa();
  taTocando = 1;
  trocarNomeFaixa();
}

botaoPlayPause.addEventListener("click", tocarOuPausar);
botaoAvancar.addEventListener("click", proximaFaixa);
botaoVoltar.addEventListener("click", voltarFaixa);
audio.addEventListener("ended", botaoAvancar);
