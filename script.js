// =========================================================================
// GABARITO DO SEU JOGO (Personalize as 20 cartas aqui embaixo!)
// =========================================================================
// IMPORTANTE: Em "respostaCorreta", digite apenas "frente" ou "verso" (minúsculo)
// =========================================================================
const dadosPerguntas = [
    {
        id: "A1",
        texto: "Não é fruta doce, mas sempre aparece quando alguém reclama, com lágrimas e lamentos que parecem nunca ter fim. Quem sou eu?",
        respostaCorreta: "verso", 
        explicacao: "Explicação correta (como as pessoas normalmente imaginam): Significa se lamentar excessivamente por algo, chorar muito por algo."
    },
    {
        id: "A2",
        texto: "Lugar sem dono, sem regra e sem ordem, onde cada um manda e ninguém obedece. Quem sou eu?",
        respostaCorreta: "frente", 
        explicacao: "Explicação correta (como as pessoas normalmente imaginam): Significa um lugar sem regras, ordem ou autoridade, onde cada um faz o que bem entender."
    },
    {
        id: "A3",
        texto: "É confiar tanto que até se arrisca, mesmo sabendo que pode se queimar. Quem sou eu?",
        respostaCorreta: "frente", 
        explicacao: "Explicação correta (como as pessoas normalmente imaginam): Significa confiar totalmente em algúem, a ponto de arriscar sua reputação, segurança e bem-estar."
    },
    {
        id: "A4",
        texto: "Não é receita de cozinha, mas envolve descanso forçado e tempo parado.  ",
        respostaCorreta: "verso", 
        explicacao: "Explicação correta (não como a pessoa neurodivergente imagina): Significa ficar de repouso, de folga ou espera."
    },
    {
        id: "A5",
        texto: "Um bichinho pequeno que causa grande incômodo, fazendo a pessoa desconfiar de tudo.",
        respostaCorreta: "verso", 
        explicacao: "Explicação correta (não como a pessoa neurodivergente imagina): Significa estar desconfiado com algo."
    },
    {
        id: "A6",
        texto: "Não é na cozinha, mas dói igual, quando a vida exige esforço pesado.",
        respostaCorreta: "verso", 
        explicacao: "Explicação correta (não como a pessoa neurodivergente imagina): Significa trabalhar ou estudar muito, para conseguir o objetivo esperado."
    },
    {
        id: "A7",
        texto: "Quando o perigo aparece, o jeito é sair correndo sem olhar pra trás.",
        respostaCorreta: "frente", 
        explicacao: "Explicação correta (não como a pessoa neurodivergente imagina): Significa ir embora, se retirar, fugir, escapar."
    },
    {
        id: "A8",
        texto: " Não é árvore, mas ajuda, quando alguém improvisa pra resolver um problema.",
        respostaCorreta: "verso", 
        explicacao: "Explicação correta (não como a pessoa neurodivergente imagina): Significa resolver um problema, desenrascar em uma situação difícil, ou prestar favor a alguém."
    },
    {
        id: "A9",
        texto: "Não é inseto de verdade, mas aparece quando a emoção toma conta.",
        respostaCorreta: "frente", 
        explicacao: "Explicação correta (não como a pessoa neurodivergente imagina): Significa representar emoções intensas, como nervosismo, ansiedade, medo, ou apaixonado."
    },
    {
        id: "A10",
        texto: " É estar presente sem ser chamado, quando dois se divertem e um sobra.",
        respostaCorreta: "verso", 
        explicacao: "Explicação correta (não como a pessoa neurodivergente imagina): Significa acompanhar um ou mais casais, sendo a única(o) solteira(o)."
    },
    {
        id: "A11",
        texto: "Não é moda nem calçado, mas significa o fim da caminhada.",
        respostaCorreta: "verso",
        explicacao: "Explicação correta (não como a pessoa neurodivergente imagina): Significa morrer/falecer."
    },
    {
        id: "A12",
        texto: "Não é com a boca apenas, mas parece que não há fim na conversa.",
        respostaCorreta: "verso", 
        explicacao: "Explicação correta (não como a pessoa neurodivergente imagina): Significa uma pessoa que fala demais, é tagarela, não para de conversar ou falar."
    },
    {
        id: "A13",
        texto: "Não decide por si mesma, apenas segue o grupo sem pensar.",
        respostaCorreta: "frente", 
        explicacao: "Explicação correta (não como a pessoa neurodivergente imagina): Significa uma pessoa sem opinião própria, que é influenciada facilmente."
    },
    {
        id: "A14",
        texto: "Digite aqui a pergunta para a carta A14...",
        respostaCorreta: "verso", 
        explicacao: "Explique aqui por que o VERSO da carta A14 é a resposta certa."
    },
    {
        id: "A15",
        texto: "Digite aqui a pergunta para a carta A15...",
        respostaCorreta: "frente", 
        explicacao: "Explique aqui por que a FRENTE da carta A15 é a resposta certa."
    },
    {
        id: "A16",
        texto: "Digite aqui a pergunta para a carta A16...",
        respostaCorreta: "verso", 
        explicacao: "Explique aqui por que o VERSO da carta A16 é a resposta certa."
    },
    {
        id: "A17",
        texto: "Digite aqui a pergunta para a carta A17...",
        respostaCorreta: "frente", 
        explicacao: "Explique aqui por que a FRENTE da carta A17 é a resposta certa."
    },
    {
        id: "A18",
        texto: "Digite aqui a pergunta para a carta A18...",
        respostaCorreta: "verso", 
        explicacao: "Explique aqui por que o VERSO da carta A18 é a resposta certa."
    },
    {
        id: "A19",
        texto: "Digite aqui a pergunta para a carta A19...",
        respostaCorreta: "frente", 
        explicacao: "Explique aqui por que a FRENTE da carta A19 é a resposta certa."
    },
    {
        id: "A20",
        texto: "Digite aqui a pergunta para a carta A20...",
        respostaCorreta: "verso", 
        explicacao: "Explique aqui por que o VERSO da carta A20 é a resposta certa."
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

// Executa o efeito de virar a carta ao clicar nela
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
    
    // Sorteia as 20 cartas de forma aleatória sem repetição
    cartasSorteadas = sortearArray([...dadosPerguntas]);
    
    esconderTodasTelas();
    telaJogo.classList.remove('oculta');
    
    carregarCarta();
}

function carregarCarta() {
    cartaAtual = cartasSorteadas[indiceAtual];
    
    elCartaAtualNumero.textContent = indiceAtual + 1;
    
    // Alimenta a pergunta e altera o caminho da imagem correspondente
    elNumeroCarta.textContent = cartaAtual.id;
    elTextoPergunta.textContent = cartaAtual.texto;
    elImgPergunta.src = `imagens/${cartaAtual.id}_pergunta.png`;
    
    // Alimenta a carta de resposta com a frente e verso do ID atual
    elImgFrente.src = `imagens/${cartaAtual.id}_frente.png`;
    elImgVerso.src = `imagens/${cartaAtual.id}_verso.png`;
    
    // Reseta o estado da animação da carta para ela começar desvirada
    cartaFlip.classList.remove('virada'); 
    msgFeedback.classList.add('oculta');
    
    botoesQuiz.forEach(btn => btn.disabled = false);
}

// Algoritmo Fisher-Yates para embaralhar o deck
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
    
    // Verifica se a escolha do jogador casa com a "respostaCorreta" definida por você
    if (escolha === cartaAtual.respostaCorreta) {
        pontuacao++;
        atualizarPlacar();
        mostrarFeedback(true);
    } else {
        mostrarFeedback(false);
    }

    // Aguarda 5 segundos mostrando a resposta e então abre o modal explicativo
    setTimeout(mostrarExplicacao, 2000);
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