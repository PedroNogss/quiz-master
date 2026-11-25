// 1. Pega o pacote com o resumo da partida e desempacota de volta para objeto
const quizResults = JSON.parse(localStorage.getItem("quizResults"));

// 2. Proteção: se abrir o results.html sem ter jogado, volta para o início
if (!quizResults) {
  window.location.href = "index.html";
}
const finalScoreEl = document.getElementById("final-score"); // Referência ao texto da pontuação final.
const correctCountEl = document.getElementById("correct-count"); // Referência ao total de respostas corretas.
const wrongCountEl = document.getElementById("wrong-count"); // Referência ao total de respostas incorretas.
const unansweredCountEl = document.getElementById("unanswered-count"); // Referência ao total de perguntas não respondidas.
const accuracyPercentEl = document.getElementById("accuracy-percent"); // Referência ao percentual de acerto.
const totalTimeEl = document.getElementById("total-time"); // Referência ao tempo total da partida.
const categoryStatsList = document.getElementById("category-stats-list"); // Referência à área do desempenho por categoria.
const reviewContainer = document.getElementById("review-container"); // Referência ao contêiner da revisão das respostas.
const reviewList = document.getElementById("review-list"); // Referência à lista que exibirá todas as respostas.
const btnPlayAgain = document.getElementById("btn-play-again"); // Referência ao botão que inicia uma nova partida.
const btnReviewAnswers = document.getElementById("btn-review-answers"); // Referência ao botão que mostra ou oculta a revisão.
const btnBackToCategories = document.getElementById("btn-back-to-categories"); // Referência ao botão que retorna às categorias.
function renderResults() {
  // Tira os 6 dados de dentro do pacote que veio do localStorage
  const totalQuestions = quizResults.totalQuestions;
  const score = quizResults.score;
  const wrongCount = quizResults.wrongCount;
  const unansweredCount = quizResults.unansweredCount;
  const totalQuizTime = quizResults.totalQuizTime;
  const userAnswers = quizResults.userAnswers;

  const accuracy = Math.round((score / totalQuestions) * 100);

  // Daqui para baixo, o código é idêntico ao que você já tem no app.js!
  // ...
  // 1. Preenche os 6 cartões de estatísticas com os valores reais
  finalScoreEl.textContent = score; // Exibe a pontuação final obtida pelo jogador.
  correctCountEl.textContent = score; // Exibe a quantidade de respostas corretas.
  wrongCountEl.textContent = wrongCount; // Exibe a quantidade de respostas incorretas.
  unansweredCountEl.textContent = unansweredCount; // Exibe a quantidade de perguntas sem resposta.
  accuracyPercentEl.textContent = `${accuracy}%`; // Exibe o percentual de acertos formatado.
  totalTimeEl.textContent = `${totalQuizTime}s`; // Exibe a duração total da partida em segundos.

  // 2. Garante que a caixa de revisão comece escondida
  reviewContainer.classList.add("hidden"); // Mantém o painel de revisão fechado ao abrir os resultados.

  // 3. Agrupa os acertos e totais por categoria usando um Objeto
  const categoryStats = {}; // Cria um objeto para acumular os dados separados por categoria.
  userAnswers.forEach((answer) => {
    // Percorre cada resposta registrada durante o quiz.
    if (!categoryStats[answer.category]) {
      // Verifica se esta categoria ainda não possui um registro de estatísticas.
      categoryStats[answer.category] = { correct: 0, total: 0 }; // Inicia os contadores dessa categoria.
    } // Encerra a inicialização da categoria.
    categoryStats[answer.category].total++; // Incrementa o total de perguntas respondidas nessa categoria.
    if (answer.isCorrect) {
      // Verifica se a resposta atual foi correta.
      categoryStats[answer.category].correct++; // Incrementa o total de acertos da categoria.
    } // Encerra a atualização dos acertos.
  }); // Encerra o agrupamento de todas as respostas.

  // 4. Desenha na tela cada linha de categoria calculada acima
  categoryStatsList.innerHTML = ""; // Remove dados antigos antes de montar o desempenho atualizado.
  Object.keys(categoryStats).forEach((categoryName) => {
    // Percorre cada categoria que possui respostas registradas.
    const stat = categoryStats[categoryName]; // Obtém os contadores da categoria atual.
    const percent = Math.round((stat.correct / stat.total) * 100); // Calcula o percentual de acertos da categoria.

    const item = document.createElement("div"); // Cria um novo elemento visual para essa categoria.
    item.classList.add("category-stat-item"); // Aplica a classe usada na estilização da estatística.
    item.innerHTML = `
        <span>${categoryName}</span>
        <strong>${stat.correct}/${stat.total} (${percent}%)</strong>
      `; // Monta o nome da categoria e seus acertos em relação ao total.
    categoryStatsList.appendChild(item); // Insere o item calculado na área de desempenho por categoria.
  }); // Encerra a criação das linhas de desempenho.

  // 5. Monta os cartões de revisão das respostas (usando userAnswers)
  reviewList.innerHTML = ""; // Remove uma revisão anterior antes de montar a atual.
  userAnswers.forEach((answer, index) => {
    // Percorre todas as respostas em ordem para criar os cartões de revisão.
    const item = document.createElement("div"); // Cria um contêiner para uma resposta específica.
    item.classList.add("review-item", answer.isCorrect ? "correct" : "wrong"); // Aplica a classe verde ou vermelha conforme o resultado.

    const userChoiceText = answer.selected
      ? answer.selected
      : "Não respondida (tempo esgotado)"; // Define o texto exibido para a escolha do jogador.

    item.innerHTML = `
        <p><strong>${index + 1}. [${answer.category}] ${answer.question}</strong></p>
        <p>Sua resposta: ${userChoiceText}</p>
        <p>Resposta correta: <strong>${answer.correctAnswer}</strong></p>
        <p class="review-explanation">Explicação: ${answer.explanation}</p>
      `; // Monta o enunciado, a resposta do jogador, a resposta correta e a explicação.
    reviewList.appendChild(item); // Adiciona o cartão montado à lista de revisão.
  }); // Encerra a criação de todos os cartões de revisão.
}
// 1. Mostrar ou esconder a revisão (igual ao app.js)
btnReviewAnswers.addEventListener("click", () => {
  reviewContainer.classList.toggle("hidden");
});

// 2. Jogar novamente: como as categorias e o tempo continuam salvos no localStorage, basta voltar ao quiz.html!
btnPlayAgain.addEventListener("click", () => {
  window.location.href = "quiz.html";
});

// 3. Mudar categorias: volta para a Tela 1
btnBackToCategories.addEventListener("click", () => {
  window.location.href = "index.html";
});

// 4. Se existir resultado salvo, preenche a tela assim que a página abrir
if (quizResults) {
  renderResults();
}
