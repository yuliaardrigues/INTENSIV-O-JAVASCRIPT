const imagemVisualizacao = document.getElementById('imagem-visualizacao');
const tituloProduto = document.getElementById('titulo-produto');
const nomeCor = document.getElementById('nome-cor-selecionada');

const verdeCipreste = {
  nome: 'Verde Cipreste',
  pasta: ' imagens-verde-cipreste'
};


const azulInverno = {
  nome: 'Azul Inverno',
  pasta: 'imagens-azul-inverno'
  
};

const meiaNoite = {
  nome: 'Meia Noite',
  pasta: 'imagens-meia-noite'
  
};

const estelar = {
  nome: 'Estelar',
  pasta: 'imagens-estelar'
};

const rosaClaro = {
  nome: 'Rosa Claro',
  pasta: 'imagens-rosa-claro'

};

const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];
const opcoesTamanhos = ['41mm', '45mm'];
let imagemSelecionada = 1;
let tamanhoSelecionado = 1;
let corSelecionada = 1;

function trocarImagem() {
  const idopcaoSelecionada = document.querySelector('[name= "opcao-imagem"]:checked').id; 
  imagemSelecionada = idopcaoSelecionada.charAt(0);
  imagemVisualizacao.src = './imagens/opcoes-cores/imagens-azul-inverno/imagem-' + imagemSelecionada + '.jpeg';
} 

function trocarTamanho() {
  const idopcaoSelecionado = document.querySelector('[name= "opcao-tamanho"]:checked').id;
  tamanhoSelecionado = idopcaoSelecionado.charAt(0);
  tituloProduto.innerText = "Pulseira loop esportiva azul-inverno para caixa de " + opcoesTamanhos[tamanhoSelecionado];
  
  if (opcoesTamanhos[tamanhoSelecionado] === '41mm') {
    imagemVisualizacao.classList.add('caixa-pequena');
  } else {
    imagemVisualizacao.classList.remove('caixa-pequena');
  }
}

function trocarCor() {
  const idOpcaoCorSelecionada = document.querySelector('[name= "opcao-cor"]:checked').id;
  corSelecionada = idOpcaoCorSelecionada.charAt(0);
  tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelecionada].nome + " para caixa de " + opcoesTamanhos[tamanhoSelecionado];
  imagemVisualizacao.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-' + imagemSelecionada + '.jpeg';
  nomeCor.innerText = 'Cor -' + opcoesCores[corSelecionada].nome;
}