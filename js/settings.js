const selectedCategoriesText = document.getElementById(
  "selected-categories-text",
);

// 1. Pega a lista da gaveta do navegador e desempacota de volta para lista
const selectedCategories = JSON.parse(
  localStorage.getItem("selectedCategories"),
);

// 2. Proteção: se alguém abrir o settings.html sem ter escolhido categorias, volta para o início
if (!selectedCategories || selectedCategories.length === 0) {
  window.location.href = "index.html";
} else {
  // 3. Escreve as categorias na tela separadas por vírgula (ex: Geografia, História)
  selectedCategoriesText.textContent = selectedCategories.join(", ");
}
const questionCountBtns = document.querySelectorAll(".question-count-btn"); // Seleciona todos os botões que definem a quantidade de perguntas do quiz.
const timeLimitBtns = document.querySelectorAll(".time-limit-btn"); // Seleciona todos os botões que definem o limite de tempo para cada pergunta do quiz.
const btnBackCategories = document.getElementById("btn-back-categories"); // Busca o botão que permite voltar à tela de categorias a partir do quiz.
const btnStartQuiz = document.getElementById("btn-start-quiz"); // Busca o botão que inicia o quiz após a configuração.
let selectedQuestionCount = 5; // Guarda inicialmente a quantidade padrão de cinco perguntas por partida.
let selectedTimeLimit = 15; // Guarda inicialmente o limite padrão de quinze segundos por pergunta.
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
});
btnBackCategories.addEventListener("click", () => {
  window.location.href = "index.html";
});

btnStartQuiz.addEventListener("click", () => {
  localStorage.setItem("selectedQuestionCount", selectedQuestionCount);
  localStorage.setItem("selectedTimeLimit", selectedTimeLimit);
  window.location.href = "quiz.html";
});
