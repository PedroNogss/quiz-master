let quizQuestions = []; // Armazena a lista final de perguntas sorteadas para a partida atual.
let currentQuestionIndex = 0; // Indica a posição da pergunta que está sendo exibida no momento.
let score = 0; // Conta a quantidade de respostas corretas do jogador.
let wrongCount = 0; // Conta a quantidade de respostas incorretas.
let unansweredCount = 0; // Conta as perguntas encerradas pelo tempo sem resposta.
let userAnswers = []; // Guarda o histórico das respostas para montar o relatório final.
let quizStartTime = 0; // Registra o instante em que a partida foi iniciada.
let totalQuizTime = 0; // Armazena o tempo total gasto na partida em segundos.

// Declara o motor responsável por preparar uma nova partida.
function startQuizEngine(categories, questionLimit) {
    // Zera todos os contadores e dados acumulados antes de iniciar outra partida.
    currentQuestionIndex = 0; // Reinicia o índice para mostrar a primeira pergunta.
    score = 0; // Reinicia a pontuação de respostas corretas.
    wrongCount = 0; // Reinicia a contagem de respostas erradas.
    unansweredCount = 0; // Reinicia a contagem de perguntas sem resposta.
    userAnswers = []; // Limpa o histórico de respostas da partida anterior.
    quizStartTime = Date.now(); // Salva o horário atual em milissegundos para calcular a duração.

    // Filtra apenas as perguntas pertencentes às categorias escolhidas pelo usuário.
    const filteredQuestions = questions.filter((q) => { // Percorre todas as perguntas disponíveis.
        return categories.includes(q.category); // Mantém somente as perguntas das categorias selecionadas.
    }); // Encerra a filtragem das perguntas.

    // Embaralha a lista filtrada para variar a ordem das perguntas.
    const shuffledQuestions = [...filteredQuestions].sort(() => Math.random() - 0.5); // Cria uma cópia embaralhada aleatoriamente.

    // Seleciona apenas a quantidade de perguntas definida nas configurações.
    quizQuestions = shuffledQuestions.slice(0, questionLimit); // Mantém o limite escolhido pelo usuário.
} // Encerra a função que prepara o motor do quiz.

// Declara a função que retorna a pergunta correspondente ao índice atual.
function getCurrentQuestion() {
    return quizQuestions[currentQuestionIndex]; // Retorna o objeto da pergunta atual.
} // Encerra a função de leitura da pergunta atual.

// Declara a função que registra uma resposta escolhida ou o término do tempo.
function registerAnswer(selectedOption) {
    const currentQuestion = getCurrentQuestion(); // Obtém os dados da pergunta que está sendo respondida.
    let isCorrect = false; // Inicializa o resultado da resposta como incorreto ou não pontuado.

    if (selectedOption === null) { // Verifica se o tempo terminou sem escolha.
        unansweredCount++; // Incrementa a quantidade de perguntas não respondidas.
    } else if (selectedOption === currentQuestion.answer) { // Compara a opção escolhida com a resposta correta.
        score++; // Soma um ponto por resposta correta.
        isCorrect = true; // Marca a resposta atual como correta.
    } else { // Executa este bloco quando a opção escolhida está incorreta.
        wrongCount++; // Incrementa a quantidade de respostas erradas.
    } // Encerra a classificação da resposta.

    // Guarda os dados da resposta no histórico usado pelo relatório final.
    userAnswers.push({
        question: currentQuestion.question, // Salva o texto da pergunta respondida.
        category: currentQuestion.category, // Salva a categoria da pergunta.
        selected: selectedOption, // Salva a opção escolhida ou null quando o tempo terminou.
        correctAnswer: currentQuestion.answer, // Salva a alternativa correta.
        explanation: currentQuestion.explanation, // Salva a explicação da resposta correta.
        isCorrect: isCorrect // Guarda se a resposta registrada foi correta.
    }); // Encerra o registro da resposta no histórico.

    return isCorrect; // Retorna true para acerto e false para erro ou tempo expirado.
} // Encerra a função de registro de respostas.

