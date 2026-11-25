// 1. Pega as configurações salvas no localStorage
const selectedCategories = JSON.parse(
  localStorage.getItem("selectedCategories"),
);
const selectedQuestionCount =
  Number(localStorage.getItem("selectedQuestionCount")) || 5;
const selectedTimeLimit =
  Number(localStorage.getItem("selectedTimeLimit")) || 15;

// 2. Proteção: se abrir o quiz.html direto sem escolher categorias, volta ao início
if (!selectedCategories || selectedCategories.length === 0) {
  window.location.href = "index.html";
}
const questionCounter = document.getElementById("question-counter"); // Referência ao texto que mostra o progresso das perguntas.
const scoreDisplay = document.getElementById("score-display"); // Referência ao elemento que mostra os pontos.
const timerDisplay = document.getElementById("timer-display"); // Referência ao elemento que mostra o tempo restante.
const progressBar = document.getElementById("progress-bar"); // Referência à barra visual de progresso.
const questionCategory = document.getElementById("question-category"); // Referência ao rótulo da categoria.
const questionText = document.getElementById("question-text"); // Referência ao texto da pergunta.
const optionsContainer = document.getElementById("options-container"); // Referência ao recipiente das alternativas.
const btnNextQuestion = document.getElementById("btn-next-question"); // Referência ao botão de próxima pergunta.

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
startQuizEngine(selectedCategories, selectedQuestionCount);
renderQuestion();
