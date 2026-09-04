// ==========================================
// BASE DE DADOS DAS PERGUNTAS
// ==========================================
const dadosPerguntas = [
    {
        id: "A1",
        texto: "Não é fruta doce, mas sempre aparece quando alguém reclama, com lágrimas e lamentos que parecem nunca ter fim. Quem sou eu?",
        respostaCorreta: "verso", 
        explicacao: "Explicação correta: Significa se lamentar excessivamente por algo, chorar muito por algo."
    },
    {
        id: "A2",
        texto: "Lugar sem dono, sem regra e sem ordem, onde cada um manda e ninguém obedece. Quem sou eu?",
        respostaCorreta: "frente", 
        explicacao: "Explicação correta: Significa um lugar sem regras, ordem ou autoridade."
    },
    {
        id: "A3",
        texto: "É confiar tanto que até se arrisca, mesmo sabendo que pode se queimar. Quem sou eu?",
        respostaCorreta: "frente", 
        explicacao: "Explicação correta: Significa confiar totalmente em alguém a ponto de se arriscar."
    },
    {
        id: "A4",
        texto: "Não é receita de cozinha, mas envolve descanso forçado e tempo parado. Quem sou eu?",
        respostaCorreta: "verso", 
        explicacao: "Explicação correta: Significa ficar de repouso, de folga ou espera."
    },
    {
        id: "A5",
        texto: "Um bichinho pequeno que causa grande incômodo, fazendo a pessoa desconfiar de tudo. Quem sou eu?",
        respostaCorreta: "verso", 
        explicacao: "Explicação correta: Significa estar desconfiado de algo."
    },
    {
        id: "A6",
        texto: "Não é na cozinha, mas dói igual, quando a vida exige esforço pesado. Quem sou eu?",
        respostaCorreta: "verso", 
        explicacao: "Explicação correta: Significa trabalhar ou estudar muito para atingir um objetivo."
    },
    {
        id: "A7",
        texto: "Quando o perigo aparece, o jeito é sair correndo sem olhar pra trás. Quem sou eu?",
        respostaCorreta: "frente", 
        explicacao: "Explicação correta: Significa ir embora, se retirar, fugir ou escapar."
    },
    {
        id: "A8",
        texto: "Não é árvore, mas ajuda, quando alguém improvisa pra resolver um problema. Quem sou eu?",
        respostaCorreta: "verso", 
        explicacao: "Explicação correta: Significa resolver um problema ou quebrar um galho."
    },
    {
        id: "A9",
        texto: "Não é inseto de verdade, mas aparece quando a emoção toma conta. Quem sou eu?",
        respostaCorreta: "frente", 
        explicacao: "Explicação correta: Representa emoções intensas, como frio na barriga, ansiedade ou paixão."
    },
    {
        id: "A10",
        texto: "É estar presente sem ser chamado, quando dois se divertem e um sobra. Quem sou eu?",
        respostaCorreta: "verso", 
        explicacao: "Explicação correta: Significa acompanhar um casal sendo o único solteiro da turma."
    },
    {
        id: "A11",
        texto: "Não é moda nem calçado, mas significa o fim da caminhada. Quem sou eu?",
        respostaCorreta: "verso",
        explicacao: "Explicação correta: Significa falecer/morrer."
    },
    {
        id: "A12",
        texto: "Não é com a boca apenas, mas parece que não há fim na conversa. Quem sou eu?",
        respostaCorreta: "verso", 
        explicacao: "Explicação correta: Significa uma pessoa tagarela, que não para de falar."
    },
    {
        id: "A13",
        texto: "Não decide por si mesma, apenas segue o grupo sem pensar. Quem sou eu?",
        respostaCorreta: "frente", 
        explicacao: "Explicação correta: Significa uma pessoa sem opinião própria, influenciável."
    },
    {
        id: "A14",
        texto: "É agir devagar, com calma, depois de uma briga com alguém. Quem sou eu?",
        respostaCorreta: "verso", 
        explicacao: "Explicação correta: Significa agir discretamente e com cautela."
    },
    {
        id: "A15",
        texto: "É sinal de começo, marca a infância antes da vida adulta. Quem sou eu?",
        respostaCorreta: "frente", 
        explicacao: "Explicação correta: Referência aos primeiros dentes de leite de uma pessoa."
    },
    {
        id: "A16",
        texto: "Sou uma comida, servido em pedaços pequenos e sou confundido com duas aves. Quem sou eu?",
        respostaCorreta: "verso", 
        explicacao: "Explicação correta: Refere-se a um tipo de corte de carne (ex: franquia/passarinho)."
    },
    {
        id: "A17",
        texto: "Não caio do céu de verdade, mas é jeito de falar. Quando tudo parece perigoso, assim costumam me chamar. Quem sou eu?",
        respostaCorreta: "frente", 
        explicacao: "Explicação correta: Significa uma tempestade ou chuva extremamente forte."
    },
    {
        id: "A18",
        texto: "Em um sentido eu ganho muito dinheiro, em outro, me dão a culpa por algo que nem fiz. Quem sou eu?",
        respostaCorreta: "verso", 
        explicacao: "Explicação correta: Significa arcar com as consequências ou pagar o pato."
    },
    {
        id: "A19",
        texto: "Tem dinheiro no bolso, mas cada gasto parece uma despedida dolorida. Sofre mais para abrir a carteira do que para ganhar dinheiro. Quem sou eu?",
        respostaCorreta: "frente", 
        explicacao: "Explicação correta: Significa uma pessoa mão de vaca que evita gastar dinheiro."
    },
    {
        id: "A20",
        texto: "Quando alguém irrita muito, ele enche algo. Quem sou eu?",
        respostaCorreta: "verso", 
        explicacao: "Explicação correta: Significa uma pessoa extremamente inconveniente ou que enche o saco."
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
// SELETORES DOM (ELEMENTOS DA TELA)
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
// EVENTOS E BOTÕES
// ==========================================
if (btnComecar) btnComecar.addEventListener('click', iniciarJogo);
if (btnReiniciar) btnReiniciar.addEventListener('click', iniciarJogo);

if (cartaFlip) {
    cartaFlip.addEventListener('click', () => {
        cartaFlip.classList.toggle('virada');
    });
}

if (btnRegras) btnRegras.addEventListener('click', () => modalRegras.classList.remove('oculta'));
if (btnFecharRegras) btnFecharRegras.addEventListener('click', () => modalRegras.classList.add('oculta'));
if (btnProximaCarta) btnProximaCarta.addEventListener('click', avancarRodada);

// ==========================================
// LÓGICA PRINCIPAL DO JOGO
// ==========================================
function iniciarJogo() {
    pontuacao = 0;
    indiceAtual = 0;
    atualizarPlacar();
    
    // Embaralha o baralho original
    cartasSorteadas = sortearArray([...dadosPerguntas]);
    
    esconderTodasTelas();
    telaJogo.classList.remove('oculta');
    
    // Carrega obrigatoriamente a primeira carta
    carregarCarta();
}

function carregarCarta() {
    cartaAtual = cartasSorteadas[indiceAtual];
    
    if (!cartaAtual) {
        console.error("Erro grave: cartaAtual é null.");
        return;
    }
    
    if (elCartaAtualNumero) elCartaAtualNumero.textContent = indiceAtual + 1;
    if (elNumeroCarta) elNumeroCarta.textContent = cartaAtual.id;
    if (elTextoPergunta) elTextoPergunta.textContent = cartaAtual.texto;
    
    // Atualiza caminhos das imagens
    if (elImgPergunta) elImgPergunta.src = `imagens/${cartaAtual.id}_pergunta.png`;
    if (elImgFrente) elImgFrente.src = `imagens/${cartaAtual.id}_frente.png`;
    if (elImgVerso) elImgVerso.src = `imagens/${cartaAtual.id}_verso.png`;

    // Desvira a carta para a frente
    if (cartaFlip) {
        cartaFlip.style.transition = 'none';
        cartaFlip.classList.remove('virada');
        void cartaFlip.offsetWidth; // Força re-renderização
        cartaFlip.style.transition = '';
    }

    if (msgFeedback) msgFeedback.classList.add('oculta');
    botoesQuiz.forEach(btn => btn.disabled = false);
}

function verificarResposta(opcaoSelecionada) {
    if (!cartaAtual) {
        alert("Erro: Nenhuma carta foi carregada.");
        return;
    }

    botoesQuiz.forEach(btn => btn.disabled = true);

    if (opcaoSelecionada === cartaAtual.respostaCorreta) {
        pontuacao++;
        atualizarPlacar();
        mostrarFeedback(true);
    } else {
        mostrarFeedback(false);
    }

    setTimeout(mostrarExplicacao, 1200);
}

function mostrarFeedback(acertou) {
    if (!msgFeedback) return;
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
    if (elPontos) elPontos.textContent = pontuacao;
}

function mostrarExplicacao() {
    if (!modalExplicacao || !elTextoExplicacao) return;
    elTextoExplicacao.textContent = cartaAtual.explicacao;
    modalExplicacao.classList.remove('oculta');
}

function avancarRodada() {
    if (modalExplicacao) modalExplicacao.classList.add('oculta');
    indiceAtual++;
    
    if (indiceAtual < cartasSorteadas.length) {
        carregarCarta();
    } else {
        finalizarJogo();
    }
}

function finalizarJogo() {
    esconderTodasTelas();
    if (telaFinal) telaFinal.classList.remove('oculta');
    
    const elTituloFinal = document.getElementById('mensagem-final-titulo');
    const elTextoFinal = document.getElementById('mensagem-final-texto');
    const elPontosFinais = document.getElementById('pontos-finais');
    
    if (elPontosFinais) elPontosFinais.textContent = pontuacao;
    
    if (pontuacao >= 10) {
        if (elTituloFinal) elTituloFinal.textContent = "Vitória!";
        if (elTextoFinal) elTextoFinal.textContent = "🎉 Fantástico! Você completou o baralho com uma ótima pontuação!";
    } else {
        if (elTituloFinal) elTituloFinal.textContent = "Fim de Jogo!";
        if (elTextoFinal) elTextoFinal.textContent = "👏 Muito bom! Que tal tentar mais uma vez para melhorar seu recorde?";
    }
}

function sortearArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function esconderTodasTelas() {
    if (telaInicial) telaInicial.classList.add('oculta');
    if (telaJogo) telaJogo.classList.add('oculta');
    if (telaFinal) telaFinal.classList.add('oculta');
}