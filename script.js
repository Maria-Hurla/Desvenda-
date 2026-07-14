// ==========================================
// DADOS DO JOGO (Pode ser transferido para um JSON no futuro)
// ==========================================

// Gerando 20 cartas (A1 a A20) para o escopo do projeto
const dadosPerguntas = [];
for (let i = 1; i <= 20; i++) {
    // Definindo alternância simples para o exemplo (Frente/Verso)
    let resposta = i % 2 === 0 ? 'verso' : 'frente';
    
    dadosPerguntas.push({
        id: `A${i}`,
        texto: `Esta é a charada misteriosa da carta A${i}. Olhe bem para a imagem. O que ela representa no contexto da nossa metáfora?`,
        respostaCorreta: resposta,
        explicacao: `Explicação da carta A${i}: A metáfora correta estava na face '${resposta}' da carta. Isso representa a dualidade do tema abordado.`
    });
}

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

// Telas
const telaInicial = document.getElementById('tela-inicial');
const telaJogo = document.getElementById('tela-jogo');
const telaFinal = document.getElementById('tela-final');

// Botões de Navegação
const btnComecar = document.getElementById('btn-comecar');
const btnReiniciar = document.getElementById('btn-reiniciar');

// Elementos do Jogo
const elPontos = document.getElementById('pontos');
const elNumeroCarta = document.getElementById('numero-carta');
const elTextoPergunta = document.getElementById('texto-pergunta');
const elImgFrente = document.getElementById('img-frente');
const elImgVerso = document.getElementById('img-verso');
const cartaFlip = document.getElementById('carta-flip');

// Quiz e Feedback
const botoesQuiz = document.querySelectorAll('.btn-quiz');
const msgFeedback = document.getElementById('mensagem-feedback');

// Modais
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

// Controle do Flip 3D
cartaFlip.addEventListener('click', () => {
    cartaFlip.classList.toggle('virada');
});

// Modal de Regras
btnRegras.addEventListener('click', () => modalRegras.classList.remove('oculta'));
btnFecharRegras.addEventListener('click', () => modalRegras.classList.add('oculta'));

// Passar para a próxima carta após fechar explicação
btnProximaCarta.addEventListener('click', avancarRodada);

// ==========================================
// FUNÇÕES PRINCIPAIS
// ==========================================

function iniciarJogo() {
    // Resetar estado
    pontuacao = 0;
    indiceAtual = 0;
    atualizarPlacar();
    
    // Sortear Cartas
    cartasSorteadas = sortearArray([...dadosPerguntas]);
    
    // Mudar Telas
    esconderTodasTelas();
    telaJogo.classList.remove('oculta');
    
    // Carregar primeira carta
    carregarCarta();
}

function carregarCarta() {
    cartaAtual = cartasSorteadas[indiceAtual];
    
    // Preencher dados na tela
    elNumeroCarta.textContent = cartaAtual.id;
    elTextoPergunta.textContent = cartaAtual.texto;
    
    // Atualizar imagens (Garante a associação correta pelo ID)
    // OBS: Certifique-se de ter as imagens A1_frente.png, A1_verso.png etc. na pasta /imagens/
    elImgFrente.src = `imagens/${cartaAtual.id}_frente.png`;
    elImgVerso.src = `imagens/${cartaAtual.id}_verso.png`;
    
    // Resetar visual da rodada
    cartaFlip.classList.remove('virada'); // Garante que a carta inicie pela frente
    msgFeedback.classList.add('oculta');
    
    // Habilitar botões do quiz
    botoesQuiz.forEach(btn => btn.disabled = false);
}

// Algoritmo de Fisher-Yates para embaralhar o array sem repetições
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

// Chamado pelo onclick no HTML: verificarResposta('frente') ou ('verso')
window.verificarResposta = function(escolha) {
    // Desabilitar botões para impedir alteração
    botoesQuiz.forEach(btn => btn.disabled = true);
    
    // Verificar acerto
    if (escolha === cartaAtual.respostaCorreta) {
        pontuacao++;
        atualizarPlacar();
        mostrarFeedback(true);
    } else {
        mostrarFeedback(false);
    }

    // Aguardar exatamente 5 segundos para exibir a explicação
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
    
    // Pequena animação no placar
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
        elTextoFinal.textContent = "🎉 Você conseguiu mais da metade!";
    } else {
        elTituloFinal.textContent = "Fim de Jogo!";
        elTextoFinal.textContent = "👏 Você foi bem! Mas acertou menos da metade!";
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