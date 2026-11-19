const categoriesSection = document.getElementById("categories-section"); // Busca no HTML a seção de categorias para poder alterar sua visibilidade.
const settingsSection = document.getElementById("settings-section"); // Busca no HTML a seção de configurações que será exibida ao iniciar.
const btnSelectAll = document.getElementById("btn-select-all"); // Busca o botão que seleciona todas as categorias.
const btnClearAll = document.getElementById("btn-clear"); // Busca o botão que remove a seleção das categorias.
const btnStartConfig = document.getElementById("btn-start-config"); // Busca o botão que inicia o fluxo de configuração do quiz.
const categoryCards = document.querySelectorAll(".category-card"); // Seleciona todos os cartões de categoria existentes na página.
let selectedCategories = []; // Cria uma lista mutável para guardar os nomes das categorias selecionadas.
let selectedQuestionCount = 5; // Guarda inicialmente a quantidade padrão de cinco perguntas por partida.
let selectedTimeLimit = 15; // Guarda inicialmente o limite padrão de quinze segundos por pergunta.

const quizSection = document.getElementById("quiz-section"); // Busca a seção do quiz para poder manipulá-la posteriormente.
const selectedCategoriesText = document.getElementById(
  "selected-categories-text",
); // Busca o elemento que exibirá as categorias selecionadas no quiz.
const btnBackCategories = document.getElementById("btn-back-categories"); // Busca o botão que permite voltar à tela de categorias a partir do quiz.
const btnStartQuiz = document.getElementById("btn-start-quiz"); // Busca o botão que inicia o quiz após a configuração.
const questionCountBtns = document.querySelectorAll(".question-count-btn"); // Seleciona todos os botões que definem a quantidade de perguntas do quiz.
const timeLimitBtns = document.querySelectorAll(".time-limit-btn"); // Seleciona todos os botões que definem o limite de tempo para cada pergunta do quiz.

function updateSelectedCategories() {
  // Declara uma função que sincroniza a lista com os cartões selecionados no HTML.
  selectedCategories = []; // Esvazia a lista antes de reconstruí-la com as seleções atuais.
  categoryCards.forEach((card) => {
    // Percorre cada cartão de categoria.
    if (card.classList.contains("selected")) {
      // Verifica se o cartão possui a classe que indica seleção.
      selectedCategories.push(card.dataset.category); // Adiciona à lista o nome da categoria definido no atributo data-category.
    } // Encerra a verificação de seleção deste cartão.
  }); // Encerra a repetição por todos os cartões.
} // Encerra a função que atualiza a lista de categorias selecionadas.

categoryCards.forEach((card) => {
  // Percorre cada cartão para configurar sua interação individual.
  card.addEventListener("click", () => {
    // Registra uma função que será executada quando o cartão receber um clique.
    card.classList.toggle("selected"); // Alterna a classe selected para selecionar ou desmarcar o cartão clicado.
    updateSelectedCategories(); // Atualiza a lista para refletir o estado atual de todos os cartões.
  }); // Encerra o registro do evento de clique do cartão.
}); // Encerra a configuração dos eventos dos cartões.

btnSelectAll.addEventListener("click", () => {
  // Registra a ação do botão para selecionar todas as categorias ao ser clicado.
  categoryCards.forEach((card) => {
    // Percorre todos os cartões disponíveis.
    card.classList.add("selected"); // Adiciona a classe selected ao cartão, marcando-o como selecionado.
  }); // Encerra a repetição por todos os cartões.
  updateSelectedCategories(); // Atualiza a lista com todas as categorias selecionadas.
}); // Encerra o evento de clique do botão de selecionar todas.

btnClearAll.addEventListener("click", () => {
  // Registra a ação do botão para limpar a seleção ao ser clicado.
  categoryCards.forEach((card) => {
    // Percorre todos os cartões disponíveis.
    card.classList.remove("selected"); // Remove a classe selected do cartão, deixando-o desmarcado.
  }); // Encerra a repetição por todos os cartões.
  updateSelectedCategories(); // Atualiza a lista, que ficará vazia se nenhum cartão estiver selecionado.
}); // Encerra o evento de clique do botão de limpar seleção.

btnStartConfig.addEventListener("click", () => {
  // Registra o que acontece quando o usuário clica para começar o quiz.
  if (selectedCategories.length > 0) {
    // Verifica se há pelo menos uma categoria selecionada.
    selectedCategoriesText.textContent = selectedCategories.join(", "); // Atualiza o texto exibido na tela de configurações com as categorias escolhidas, separadas por vírgula.
    categoriesSection.classList.add("hidden"); // Adiciona a classe hidden para ocultar a tela de categorias.
    settingsSection.classList.remove("hidden"); // Remove a classe hidden para mostrar a tela de configurações.
  } else {
    // Define o comportamento alternativo quando nenhuma categoria foi selecionada.
    alert("Selecione pelo menos uma categoria para começar!"); // Exibe uma mensagem no navegador pedindo que o usuário escolha uma categoria.
  } // Encerra a verificação entre seleção existente e seleção vazia.
}); // Encerra o evento de clique do botão para começar o quiz.
questionCountBtns.forEach((btn) => {
  // Percorre cada botão disponível para configurar o número de perguntas.
  btn.addEventListener("click", () => {
    // Registra o comportamento executado ao clicar em uma opção de quantidade.
    questionCountBtns.forEach((item) => item.classList.remove("selected")); // Remove a seleção visual de todas as opções de quantidade.
    btn.classList.add("selected"); // Marca somente o botão clicado como opção selecionada.
    selectedQuestionCount = Number(btn.dataset.questions); // Converte o atributo data-questions em número e salva a quantidade escolhida.
  }); // Encerra o registro do evento do botão de quantidade.
}); // Encerra a configuração de todos os botões de quantidade.
timeLimitBtns.forEach((btn) => {
  // Percorre cada botão disponível para configurar o tempo por pergunta.
  btn.addEventListener("click", () => {
    // Registra o comportamento executado ao clicar em uma opção de tempo.
    timeLimitBtns.forEach((item) => item.classList.remove("selected")); // Remove a seleção visual de todas as opções de tempo.
    btn.classList.add("selected"); // Marca somente o botão clicado como opção selecionada.
    selectedTimeLimit = Number(btn.dataset.time); // Converte o atributo data-time em número e salva o limite escolhido.
  }); // Encerra o registro do evento do botão de tempo.
}); // Encerra a configuração de todos os botões de tempo.
btnBackCategories.addEventListener("click", () => {
  // Registra a ação do botão que permite voltar à tela de categorias.
  settingsSection.classList.add("hidden"); // Adiciona a classe hidden para ocultar a tela de configurações.
  categoriesSection.classList.remove("hidden"); // Remove a classe hidden para mostrar novamente a tela de categorias.
}); // Encerra o evento de clique do botão de voltar à tela de categorias.
btnStartQuiz.addEventListener("click", () => {
  // Registra a ação do botão que inicia o quiz após a configuração.
  if (selectedCategories.length > 0) {
    // Verifica se há pelo menos uma categoria selecionada antes de iniciar o quiz.
    settingsSection.classList.add("hidden"); // Adiciona a classe hidden para ocultar a tela de configurações.
    quizSection.classList.remove("hidden"); // Remove a classe hidden para mostrar a tela do quiz.
    startQuizEngine(selectedCategories, selectedQuestionCount); // Inicia o motor do quiz com as categorias selecionadas e a quantidade de perguntas escolhida.
    renderQuestion(); // Exibe na tela a primeira pergunta preparada pelo motor do quiz.
  } // Fecha o bloco if somente depois de sortear e desenhar a pergunta.
}); // Encerra o evento de clique do botão de iniciar partida.
// Busca os elementos da interface usados durante as perguntas.
const questionCounter = document.getElementById("question-counter"); // Referência ao texto que mostra o progresso das perguntas.
const scoreDisplay = document.getElementById("score-display"); // Referência ao elemento que mostra os pontos.
const timerDisplay = document.getElementById("timer-display"); // Referência ao elemento que mostra o tempo restante.
const progressBar = document.getElementById("progress-bar"); // Referência à barra visual de progresso.
const questionCategory = document.getElementById("question-category"); // Referência ao rótulo da categoria.
const questionText = document.getElementById("question-text"); // Referência ao texto da pergunta.
const optionsContainer = document.getElementById("options-container"); // Referência ao recipiente das alternativas.
const btnNextQuestion = document.getElementById("btn-next-question"); // Referência ao botão de próxima pergunta.
const resultsSection = document.getElementById("results-section"); // Referência à seção exibida no fim da partida.

let timerInterval = null; // Guarda o identificador do cronômetro regressivo ativo.
let timeLeft = 0; // Guarda os segundos restantes da pergunta atual.

// Declara a função que monta e exibe uma pergunta na tela.
function renderQuestion() {
  const currentQuestion = getCurrentQuestion(); // Obtém os dados da pergunta atual.
  const totalQuestions = quizQuestions.length; // Obtém a quantidade total de perguntas da partida.

  // Atualiza os textos do cabeçalho e prepara o botão de avanço.
  questionCounter.textContent = `Pergunta ${currentQuestionIndex + 1} de ${totalQuestions}`; // Exibe o número da pergunta atual.
  scoreDisplay.textContent = `Pontos: ${score}`; // Atualiza a pontuação exibida no cabeçalho.
  questionCategory.textContent = currentQuestion.category; // Exibe a categoria da pergunta.
  questionText.textContent = currentQuestion.question; // Exibe o enunciado da pergunta.
  btnNextQuestion.classList.add("hidden"); // Oculta o botão de avançar até uma resposta ser registrada.

  // Calcula o progresso da partida e ajusta a largura da barra.
  const progressPercent = ((currentQuestionIndex + 1) / totalQuestions) * 100; // Converte o progresso atual em porcentagem.
  progressBar.style.width = `${progressPercent}%`; // Aplica a porcentagem calculada ao preenchimento visual.

  // Remove as alternativas antigas e cria os novos botões da pergunta atual.
  optionsContainer.innerHTML = ""; // Apaga todas as alternativas já exibidas.
  currentQuestion.options.forEach((optionText) => {
    // Percorre cada alternativa da pergunta.
    const button = document.createElement("button"); // Cria um novo elemento de botão.
    button.type = "button"; // Impede que o botão envie um formulário ao ser clicado.
    button.classList.add("option-btn"); // Aplica a classe visual das alternativas.
    button.textContent = optionText; // Coloca o texto da alternativa no botão.

    button.addEventListener("click", () => selectOption(button, optionText)); // Registra o clique e envia o botão escolhido.
    optionsContainer.appendChild(button); // Insere o botão criado dentro da grade de alternativas.
  }); // Encerra a criação de todas as opções.

  // Inicia o cronômetro regressivo da pergunta exibida.
  startTimer(); // Configura e ativa o tempo desta pergunta.
} // Encerra a função que renderiza uma pergunta.

// Declara a função responsável pelo cronômetro regressivo.
function startTimer() {
  clearInterval(timerInterval); // Interrompe um cronômetro anterior para evitar contagens simultâneas.
  timeLeft = selectedTimeLimit; // Define o tempo inicial usando a configuração escolhida pelo usuário.
  timerDisplay.textContent = `⏱️ ${timeLeft}s`; // Exibe imediatamente o tempo configurado.

  timerInterval = setInterval(() => {
    // Cria uma repetição executada a cada segundo.
    timeLeft--; // Reduz em um segundo o tempo restante.
    timerDisplay.textContent = `⏱️ ${timeLeft}s`; // Atualiza o texto do cronômetro na tela.

    if (timeLeft <= 0) {
      // Verifica se o tempo se esgotou.
      clearInterval(timerInterval); // Para o cronômetro ao atingir zero.
      handleTimeOut(); // Executa o tratamento para a resposta não enviada.
    } // Encerra a verificação do tempo.
  }, 1000); // Define que a repetição será executada a cada 1000 milissegundos, ou 1 segundo.
} // Encerra a função do cronômetro.

// Declara a função executada quando o jogador seleciona uma alternativa.
function selectOption(clickedButton, selectedText) {
  // Impede que o cronômetro continue contando após a escolha.
  clearInterval(timerInterval); // Cancela o cronômetro da pergunta atual.

  // Registra a resposta no motor e atualiza a pontuação exibida.
  const isCorrect = registerAnswer(selectedText); // Compara a alternativa escolhida e guarda o resultado.
  scoreDisplay.textContent = `Pontos: ${score}`; // Atualiza imediatamente o placar no cabeçalho.

  const correctAnswer = getCurrentQuestion().answer; // Obtém a resposta correta da pergunta atual.
  const allOptionButtons = optionsContainer.querySelectorAll(".option-btn"); // Busca todos os botões de alternativa.

  // Trava as opções e destaca visualmente a resposta correta.
  allOptionButtons.forEach((btn) => {
    // Percorre cada botão de alternativa.
    btn.disabled = true; // Impede novas escolhas após o registro da resposta.
    if (btn.textContent === correctAnswer) {
      // Compara o texto do botão com a resposta correta.
      btn.classList.add("correct"); // Aplica o estilo verde à alternativa correta.
    } // Encerra a marcação da resposta correta.
  }); // Encerra o processamento de todas as alternativas.

  if (!isCorrect) {
    // Verifica se a opção escolhida não estava correta.
    clickedButton.classList.add("wrong"); // Aplica o estilo vermelho ao botão escolhido incorretamente.
  } // Encerra a marcação visual da resposta incorreta.

  // Revela o controle usado para avançar à próxima pergunta.
  btnNextQuestion.classList.remove("hidden"); // Remove a classe hidden do botão de avanço.
} // Encerra a função de seleção de alternativa.

// Declara o comportamento usado quando o tempo da pergunta chega ao fim.
function handleTimeOut() {
  registerAnswer(null); // Registra a pergunta como não respondida.

  const correctAnswer = getCurrentQuestion().answer; // Obtém a alternativa correta da pergunta atual.
  const allOptionButtons = optionsContainer.querySelectorAll(".option-btn"); // Busca todas as alternativas exibidas.

  // Desativa as opções e destaca a alternativa correta.
  allOptionButtons.forEach((btn) => {
    // Percorre cada botão de alternativa.
    btn.disabled = true; // Impede que o jogador responda depois do tempo terminar.
    if (btn.textContent === correctAnswer) {
      // Compara o botão com a resposta correta.
      btn.classList.add("correct"); // Aplica o estilo verde à resposta correta.
    } // Encerra a marcação da resposta correta.
  }); // Encerra o processamento das alternativas.

  // Aguarda brevemente para o jogador visualizar a resposta antes de avançar.
  setTimeout(() => {
    // Agenda uma execução futura.
    goToNextQuestion(); // Avança automaticamente para a próxima pergunta.
  }, 1200); // Define o atraso de 1200 milissegundos, ou 1,2 segundo.
} // Encerra a função executada após o término do tempo.

// Declara a função responsável por avançar a partida.
function goToNextQuestion() {
  currentQuestionIndex++; // Incrementa o índice para apontar à pergunta seguinte.

  if (currentQuestionIndex < quizQuestions.length) {
    // Verifica se ainda existe uma próxima pergunta.
    renderQuestion(); // Renderiza a próxima pergunta da partida.
  } else {
    // Executa quando todas as perguntas já foram respondidas.
    totalQuizTime = Math.round((Date.now() - quizStartTime) / 1000); // Calcula a duração total em segundos arredondados.
    renderResults(); // Calcula e monta o conteúdo exibido na tela de resultados.
    quizSection.classList.add("hidden"); // Oculta a tela da partida concluída.
    resultsSection.classList.remove("hidden"); // Exibe a seção de resultados da partida.
  } // Encerra a decisão entre continuar e concluir o quiz.
} // Encerra a função de avanço da pergunta.

// Registra a ação executada ao clicar no botão de próxima pergunta.
btnNextQuestion.addEventListener("click", () => {
  // Configura o evento de clique.
  goToNextQuestion(); // Executa a função que avança para a próxima pergunta.
}); // Encerra o registro do evento do botão.
// Busca os elementos usados para mostrar e navegar pelos resultados.
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

// Declara a função que calcula e apresenta todas as informações do resultado final.
function renderResults() {
  const totalQuestions = quizQuestions.length; // Obtém a quantidade total de perguntas da partida.
  const accuracy = Math.round((score / totalQuestions) * 100); // Calcula o percentual de respostas corretas.

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
} // Encerra a função que renderiza os resultados da partida.

// Registra a ação que alterna a visualização da revisão das respostas.
btnReviewAnswers.addEventListener("click", () => {
  reviewContainer.classList.toggle("hidden"); // Remove ou adiciona a classe hidden para mostrar ou ocultar a revisão.
}); // Encerra o evento de clique do botão de revisão.

// Registra a ação que inicia uma nova partida com as configurações atuais.
btnPlayAgain.addEventListener("click", () => {
  resultsSection.classList.add("hidden"); // Oculta a tela de resultados.
  quizSection.classList.remove("hidden"); // Mostra novamente a tela das perguntas.
  startQuizEngine(selectedCategories, selectedQuestionCount); // Reinicia o motor com as categorias e quantidade previamente escolhidas.
  renderQuestion(); // Exibe a primeira pergunta da nova partida.
}); // Encerra o evento de clique do botão para jogar novamente.

// Registra a ação que retorna diretamente à tela de escolha de categorias.
btnBackToCategories.addEventListener("click", () => {
  resultsSection.classList.add("hidden"); // Oculta a tela de resultados.
  categoriesSection.classList.remove("hidden"); // Exibe novamente a tela de categorias.
}); // Encerra o evento de clique do botão para mudar categorias.
