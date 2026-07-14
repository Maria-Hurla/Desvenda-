// ==========================================
// DADOS DO JOGO (20 Cartas de Perguntas e Respostas)
// ==========================================
const dadosPerguntas = [
    {
        id: "A1",
        texto: "Sou a base de tudo, mas se me molhar, eu desmorono. O que a imagem representa?",
        respostaCorreta: "frente",
        explicacao: "Explicação A1: A frente mostra um castelo de areia, representando a fragilidade da base."
    },
    {
        id: "A2",
        texto: "Tenho folhas, mas não sou árvore. Onde está a verdadeira resposta?",
        respostaCorreta: "verso",
        explicacao: "Explicação A2: O verso mostra um livro, a metáfora exata para 'folhas que não são de árvore'."
    },
    {
        id: "A3",
        texto: "Ando o dia todo e quando chega a noite, durmo com a boca aberta.",
        respostaCorreta: "frente",
        explicacao: "Explicação A3: A frente exibe um sapato. É a resposta clássica para esta charada."
    },
    {
        id: "A4",
        texto: "Quanto mais você tira, maior eu fico. Olhe a imagem e decida.",
        respostaCorreta: "verso",
        explicacao: "Explicação A4: O verso mostra um buraco no chão. Ao tirar terra, ele cresce."
    },
    {
        id: "A5",
        texto: "Tenho dentes, mas não mordo. O que sou?",
        respostaCorreta: "frente",
        explicacao: "Explicação A5: A frente ilustra um pente, uma metáfora visual para os 'dentes'."
    },
    {
        id: "A6",
        texto: "Voo sem asas, choro sem olhos. Qual face revela minha forma?",
        respostaCorreta: "verso",
        explicacao: "Explicação A6: O verso apresenta uma nuvem, que se move no céu e derrama chuva."
    },
    {
        id: "A7",
        texto: "Caio em pé e corro deitada.",
        respostaCorreta: "frente",
        explicacao: "Explicação A7: A imagem da chuva na frente da carta é a resposta correta."
    },
    {
        id: "A8",
        texto: "Nasço grande e morro pequeno.",
        respostaCorreta: "verso",
        explicacao: "Explicação A8: O verso ilustra um lápis, que diminui conforme é utilizado."
    },
    {
        id: "A9",
        texto: "Tenho cabeça e dentes, mas não sou bicho nem gente.",
        respostaCorreta: "frente",
        explicacao: "Explicação A9: A frente mostra um alho, famoso por sua 'cabeça' e 'dentes'."
    },
    {
        id: "A10",
        texto: "Falo todas as línguas, mas não tenho boca.",
        respostaCorreta: "verso",
        explicacao: "Explicação A10: O verso contém a imagem de um eco, refletindo sons do mundo."
    },
    {
        id: "A11",
        texto: "Quanto mais seca, mais molhada fica.",
        respostaCorreta: "frente",
        explicacao: "Explicação A11: A toalha na frente da carta absorve a água, ficando molhada."
    },
    {
        id: "A12",
        texto: "Tenho pescoço, mas não tenho cabeça.",
        respostaCorreta: "verso",
        explicacao: "Explicação A12: O verso ilustra uma garrafa."
    },
    {
        id: "A13",
        texto: "O que é, o que é: entra na água e não se molha?",
        respostaCorreta: "frente",
        explicacao: "Explicação A13: A sombra, ilustrada na frente, passa pela água intacta."
    },
    {
        id: "A14",
        texto: "Sou feito de água, mas se me colocarem na água, eu sumo.",
        respostaCorreta: "verso",
        explicacao: "Explicação A14: O cubo de gelo no verso derrete ao entrar em contato com a água."
    },
    {
        id: "A15",
        texto: "Tenho olhos, mas não vejo.",
        respostaCorreta: "frente",
        explicacao: "Explicação A15: A frente exibe um furacão, que tem um 'olho' cego em seu centro."
    },
    {
        id: "A16",
        texto: "Passo por todas as portas sem precisar abrir nenhuma.",
        respostaCorreta: "verso",
        explicacao: "Explicação A16: O vento, no verso, atravessa as frestas sem abrir portas."
    },
    {
        id: "A17",
        texto: "O que tem que ser quebrado antes de ser usado?",
        respostaCorreta: "frente",
        explicacao: "Explicação A17: O ovo na parte da frente da carta é a resposta clássica."
    },
    {
        id: "A18",
        texto: "Pertenço a você, mas os outros me usam mais do que você mesmo.",
        respostaCorreta: "verso",
        explicacao: "Explicação A18: O verso mostra um crachá com o seu nome."
    },
    {
        id: "A19",
        texto: "Subo quando a chuva desce.",
        respostaCorreta: "frente",
        explicacao: "Explicação A19: O guarda-chuva na parte da frente é aberto quando chove."
    },
    {
        id: "A20",
        texto: "Nunca faço perguntas, mas sempre exijo respostas.",
        respostaCorreta: "verso",
        explicacao: "Explicação A20: O telefone tocando no verso exige que alguém atenda."
    }
];

// ==========================================
// VARIÁVEIS GLOBAIS DE ESTADO
// ==========================================
let pontuacao = 0;
let cartasSorteadas = [];
let indiceAtual = 0;
let cartaAtual = null;

// ==========================================
// SELETORES DOM
// ==========================================
const telaInicial = document.getElementById('tela-inicial');
const telaJogo = document.getElementById('tela-jogo');
const telaFinal = document.getElementById('tela-final');

const btnComecar = document.getElementById('btn-comecar');
const btnReiniciar = document.getElementById('btn-reiniciar');

const elPontos = document.getElementById('pontos');
const elCartaAtualNumero = document.getElementById('carta-atual-numero');
const elNumeroCarta = document.getElementById('numero-carta');
const elImgPergunta = document.getElementById('img-pergunta');
const elTextoPergunta = document.getElementById('texto-pergunta');
const elImgFrente = document.getElementById('img-frente');
const elImgVerso = document.getElementById('img-verso');
const cartaFlip = document.getElementById('carta-flip');

const botoesQuiz = document.querySelectorAll('.btn-quiz');
const msgFeedback = document.getElementById('mensagem-feedback');

const modalRegras = document.getElementById('modal-regras');
const btnRegras = document.getElementById('btn-regras');
const btnFecharRegras = document.getElementById('btn-fechar-regras');

const modalExplicacao = document.getElementById('modal-explicacao');
const elTextoExplicacao = document.getElementById('texto-explicacao');
const btnProximaCarta = document.getElementById('btn-proxima-carta');

// ==========================================
// EVENT LISTENERS BÁSICOS
// ==========================================
btnComecar.addEventListener('click', iniciarJogo);
btnReiniciar.addEventListener('click', iniciarJogo);

// Executa o efeito de virar a carta ao clicar
cartaFlip.addEventListener('click', () => {
    cartaFlip.classList.toggle('virada');
});

// Controle do Modal de Regras
btnRegras.addEventListener('click', () => modalRegras.classList.remove('oculta'));
btnFecharRegras.addEventListener('click', () => modalRegras.classList.add('oculta'));

btnProximaCarta.addEventListener('click', avancarRodada);

// ==========================================
// FUNÇÕES PRINCIPAIS E SORTEIO
// ==========================================
function iniciarJogo() {
    pontuacao = 0;
    indiceAtual = 0;
    atualizarPlacar();
    
    // Sorteia as 20 cartas de forma aleatória para não virem na mesma ordem
    cartasSorteadas = sortearArray([...dadosPerguntas]);
    
    esconderTodasTelas();
    telaJogo.classList.remove('oculta');
    
    carregarCarta();
}

function carregarCarta() {
    cartaAtual = cartasSorteadas[indiceAtual];
    
    elCartaAtualNumero.textContent = indiceAtual + 1;
    
    // Sincroniza a carta de pergunta carregando sua respectiva imagem
    elNumeroCarta.textContent = cartaAtual.id;
    elTextoPergunta.textContent = cartaAtual.texto;
    elImgPergunta.src = `imagens/${cartaAtual.id}_pergunta.png`;
    
    // Sincroniza a carta de resposta com a frente e verso corretos do ID atual
    elImgFrente.src = `imagens/${cartaAtual.id}_frente.png`;
    elImgVerso.src = `imagens/${cartaAtual.id}_verso.png`;
    
    // Reseta o estado da carta de resposta (mostrando a frente no início)
    cartaFlip.classList.remove('virada'); 
    msgFeedback.classList.add('oculta');
    
    botoesQuiz.forEach(btn => btn.disabled = false);
}

// Algoritmo Fisher-Yates para embaralhar as cartas sem repetição
function sortearArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// ==========================================
// LÓGICA DO QUIZ
// ==========================================
window.verificarResposta = function(escolha) {
    botoesQuiz.forEach(btn => btn.disabled = true);
    
    if (escolha === cartaAtual.respostaCorreta) {
        pontuacao++;
        atualizarPlacar();
        mostrarFeedback(true);
    } else {
        mostrarFeedback(false);
    }

    // Aguarda 5 segundos mostrando a resposta e então abre o modal de explicação
    setTimeout(mostrarExplicacao, 5000);
}

function mostrarFeedback(acertou) {
    msgFeedback.classList.remove('oculta', 'msg-correta', 'msg-errada');
    if (acertou) {
        msgFeedback.textContent = "🎉 Resposta correta!";
        msgFeedback.classList.add('msg-correta');
    } else {
        msgFeedback.textContent = "❌ Resposta incorreta!";
        msgFeedback.classList.add('msg-errada');
    }
}

function atualizarPlacar() {
    elPontos.textContent = pontuacao;
    elPontos.style.transform = "scale(1.5)";
    setTimeout(() => elPontos.style.transform = "scale(1)", 300);
}

// ==========================================
// EXPLICAÇÃO E FLUXO DE RODADAS
// ==========================================
function mostrarExplicacao() {
    elTextoExplicacao.textContent = cartaAtual.explicacao;
    modalExplicacao.classList.remove('oculta');
}

function avancarRodada() {
    modalExplicacao.classList.add('oculta');
    indiceAtual++;
    
    if (indiceAtual < cartasSorteadas.length) {
        carregarCarta();
    } else {
        finalizarJogo();
    }
}

function finalizarJogo() {
    esconderTodasTelas();
    telaFinal.classList.remove('oculta');
    
    const elTituloFinal = document.getElementById('mensagem-final-titulo');
    const elTextoFinal = document.getElementById('mensagem-final-texto');
    const elPontosFinais = document.getElementById('pontos-finais');
    
    elPontosFinais.textContent = pontuacao;
    
    if (pontuacao >= 10) {
        elTituloFinal.textContent = "Vitória!";
        elTextoFinal.textContent = "🎉 Fantástico! Você completou o baralho com uma ótima pontuação!";
    } else {
        elTituloFinal.textContent = "Fim de Jogo!";
        elTextoFinal.textContent = "👏 Muito bom! Que tal tentar mais uma vez para melhorar seu recorde?";
    }
}

// ==========================================
// UTILITÁRIOS
// ==========================================
function esconderTodasTelas() {
    telaInicial.classList.add('oculta');
    telaJogo.classList.add('oculta');
    telaFinal.classList.add('oculta');
}