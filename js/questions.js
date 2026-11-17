const questions = [ // Declara o array principal que reúne todas as perguntas disponíveis no quiz.
    // ==================== GEOGRAFIA (15 questões) ====================
    { // Abre o objeto que representa uma pergunta completa.
      id: 1, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Qual o maior país do mundo?", // Armazena o enunciado exibido ao usuário.
      category: "Geografia", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["Rússia", "Brasil", "EUA", "China"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "Rússia", // Define a alternativa considerada correta.
      explanation: "A Rússia é o maior país do mundo em termos de área territorial." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 3, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Qual é a capital do Brasil?", // Armazena o enunciado exibido ao usuário.
      category: "Geografia", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["São Paulo", "Brasília", "Rio de Janeiro", "Salvador"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "Brasília", // Define a alternativa considerada correta.
      explanation: "Brasília foi inaugurada em 1960 como a capital federal do Brasil." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 4, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Qual é o rio mais extenso do mundo?", // Armazena o enunciado exibido ao usuário.
      category: "Geografia", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["Rio Paraná", "Rio Amazonas", "Rio São Francisco", "Rio Mississipi"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "Rio Amazonas", // Define a alternativa considerada correta.
      explanation: "O Rio Amazonas é o maior em volume de água e considerado o mais extenso do mundo." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 5, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Em qual continente fica localizado o Egito?", // Armazena o enunciado exibido ao usuário.
      category: "Geografia", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["Ásia", "Europa", "África", "Oceania"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "África", // Define a alternativa considerada correta.
      explanation: "O Egito fica no nordeste do continente africano (com a Península do Sinai na Ásia)." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 6, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Qual é a capital da Austrália?", // Armazena o enunciado exibido ao usuário.
      category: "Geografia", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["Sydney", "Melbourne", "Canberra", "Brisbane"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "Canberra", // Define a alternativa considerada correta.
      explanation: "Canberra foi planejada e escolhida como capital da Austrália em 1908." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 7, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Qual é o menor país do mundo em extensão territorial?", // Armazena o enunciado exibido ao usuário.
      category: "Geografia", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["Mônaco", "Vaticano", "Malta", "San Marino"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "Vaticano", // Define a alternativa considerada correta.
      explanation: "O Vaticano possui apenas cerca de 0,44 km² de área." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 8, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Qual grande cordilheira atravessa a América do Sul?", // Armazena o enunciado exibido ao usuário.
      category: "Geografia", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["Alpes", "Himalaia", "Cordilheira dos Andes", "Montanhas Rochosas"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "Cordilheira dos Andes", // Define a alternativa considerada correta.
      explanation: "A Cordilheira dos Andes estende-se pela costa oeste da América do Sul." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 9, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Qual oceano banha todo o litoral do Brasil?", // Armazena o enunciado exibido ao usuário.
      category: "Geografia", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["Oceano Pacífico", "Oceano Índico", "Oceano Atlântico", "Oceano Ártico"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "Oceano Atlântico", // Define a alternativa considerada correta.
      explanation: "Toda a costa leste da América do Sul, incluindo o Brasil, é banhada pelo Oceano Atlântico." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 10, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Qual é a capital do Japão?", // Armazena o enunciado exibido ao usuário.
      category: "Geografia", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["Quioto", "Osaka", "Tóquio", "Seul"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "Tóquio", // Define a alternativa considerada correta.
      explanation: "Tóquio é a capital do Japão e a área metropolitana mais populosa do mundo." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 11, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Qual é o maior deserto quente do mundo?", // Armazena o enunciado exibido ao usuário.
      category: "Geografia", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["Deserto do Atacama", "Deserto de Gobi", "Deserto do Saara", "Deserto da Arábia"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "Deserto do Saara", // Define a alternativa considerada correta.
      explanation: "O Saara ocupa grande parte do norte da África e é o maior deserto quente da Terra." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 12, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Quantos estados possui o Brasil (sem contar o Distrito Federal)?", // Armazena o enunciado exibido ao usuário.
      category: "Geografia", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["24", "25", "26", "27"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "26", // Define a alternativa considerada correta.
      explanation: "O Brasil é dividido em 26 estados e 1 Distrito Federal, totalizando 27 unidades federativas." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 13, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Qual país europeu tem o território com formato semelhante a uma bota?", // Armazena o enunciado exibido ao usuário.
      category: "Geografia", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["Espanha", "Grécia", "Itália", "Portugal"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "Itália", // Define a alternativa considerada correta.
      explanation: "A Península Itálica possui o contorno característico de uma bota de cano longo." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 14, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Qual é a montanha mais alta do mundo acima do nível do mar?", // Armazena o enunciado exibido ao usuário.
      category: "Geografia", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["K2", "Monte Aconcágua", "Monte Everest", "Monte Fuji"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "Monte Everest", // Define a alternativa considerada correta.
      explanation: "Localizado no Himalaia, o Monte Everest tem cerca de 8.848 metros de altitude." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 15, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Qual é a capital da Argentina?", // Armazena o enunciado exibido ao usuário.
      category: "Geografia", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["Santiago", "Montevidéu", "Buenos Aires", "Córdoba"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "Buenos Aires", // Define a alternativa considerada correta.
      explanation: "Buenos Aires é a capital e a maior cidade da Argentina." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 16, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Qual linha imaginária divide a Terra em Hemisfério Norte e Hemisfério Sul?", // Armazena o enunciado exibido ao usuário.
      category: "Geografia", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["Meridiano de Greenwich", "Trópico de Capricórnio", "Linha do Equador", "Trópico de Câncer"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "Linha do Equador", // Define a alternativa considerada correta.
      explanation: "A Linha do Equador fica na latitude 0° e divide o planeta entre Norte e Sul." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
  
    // ==================== TECNOLOGIA (15 questões) ====================
    { // Abre o objeto que representa uma pergunta completa.
      id: 2, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Quem desenvolveu o JavaScript?", // Armazena o enunciado exibido ao usuário.
      category: "Tecnologia", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["James Gosling", "Brendan Eich", "Guido van Rossum", "Dennis Ritchie"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "Brendan Eich", // Define a alternativa considerada correta.
      explanation: "Brendan Eich criou o JavaScript em 1995 enquanto trabalhava na Netscape." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 17, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "O que significa a sigla HTML?", // Armazena o enunciado exibido ao usuário.
      category: "Tecnologia", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: [ // Abre a lista de alternativas exibidas para esta pergunta.
        "HyperText Markup Language", // Define uma das alternativas possíveis desta pergunta.
        "HighTech Modern Language", // Define uma das alternativas possíveis desta pergunta.
        "HyperTransfer Machine Link", // Define uma das alternativas possíveis desta pergunta.
        "Home Tool Markup Language" // Define uma das alternativas possíveis desta pergunta.
      ], // Fecha a lista de alternativas desta pergunta.
      answer: "HyperText Markup Language", // Define a alternativa considerada correta.
      explanation: "HTML significa Linguagem de Marcação de Hipertexto, usada para estruturar páginas web." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 18, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Qual tecnologia é responsável pela estilização e layout das páginas web?", // Armazena o enunciado exibido ao usuário.
      category: "Tecnologia", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["HTML", "CSS", "SQL", "PHP"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "CSS", // Define a alternativa considerada correta.
      explanation: "O CSS (Cascading Style Sheets) controla cores, fontes, espaçamentos e responsividade." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 19, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Qual empresa desenvolveu o sistema operacional Windows?", // Armazena o enunciado exibido ao usuário.
      category: "Tecnologia", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["Apple", "IBM", "Microsoft", "Google"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "Microsoft", // Define a alternativa considerada correta.
      explanation: "A Microsoft, fundada por Bill Gates e Paul Allen, lançou a primeira versão do Windows em 1985." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 20, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Qual componente é considerado o 'cérebro' do computador por processar instruções?", // Armazena o enunciado exibido ao usuário.
      category: "Tecnologia", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["Fonte de alimentação", "Gabinete", "CPU (Processador)", "Placa de rede"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "CPU (Processador)", // Define a alternativa considerada correta.
      explanation: "A CPU (Unidade Central de Processamento) executa os cálculos e comandos dos programas." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 21, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Qual protocolo garante a transferência segura e criptografada de páginas na Web?", // Armazena o enunciado exibido ao usuário.
      category: "Tecnologia", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["FTP", "HTTP", "HTTPS", "SMTP"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "HTTPS", // Define a alternativa considerada correta.
      explanation: "O HTTPS adiciona uma camada de segurança criptografada (SSL/TLS) ao protocolo HTTP." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 22, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Qual sistema de controle de versão distribuído foi criado por Linus Torvalds?", // Armazena o enunciado exibido ao usuário.
      category: "Tecnologia", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["Docker", "Git", "Linux", "Node.js"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "Git", // Define a alternativa considerada correta.
      explanation: "Linus Torvalds criou o Git em 2005 para gerenciar o código-fonte do kernel Linux." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 23, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Qual memória perde todos os seus dados assim que o computador é desligado?", // Armazena o enunciado exibido ao usuário.
      category: "Tecnologia", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["SSD", "Disco Rígido (HD)", "Memória RAM", "Pen Drive"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "Memória RAM", // Define a alternativa considerada correta.
      explanation: "A memória RAM é volátil, guardando dados apenas enquanto o sistema está energizado." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 24, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Em que ano Steve Jobs apresentou o primeiro iPhone da história?", // Armazena o enunciado exibido ao usuário.
      category: "Tecnologia", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["2004", "2007", "2010", "2012"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "2007", // Define a alternativa considerada correta.
      explanation: "O primeiro iPhone foi anunciado e lançado pela Apple em 2007, revolucionando os smartphones." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 25, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Qual linguagem de programação tem uma cobra como símbolo e é muito usada em IA?", // Armazena o enunciado exibido ao usuário.
      category: "Tecnologia", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["Java", "C#", "Python", "Ruby"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "Python", // Define a alternativa considerada correta.
      explanation: "Python é famosa pela sintaxe simples e liderança em Ciência de Dados e Inteligência Artificial." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 26, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Na computação, a quantos bits equivale exatamente 1 Byte?", // Armazena o enunciado exibido ao usuário.
      category: "Tecnologia", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["4 bits", "8 bits", "16 bits", "1024 bits"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "8 bits", // Define a alternativa considerada correta.
      explanation: "Um Byte é formado por um conjunto padrão de 8 bits (dígitos binários 0 ou 1)." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 27, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Qual dispositivo de armazenamento utiliza memória flash e não possui partes mecânicas móveis?", // Armazena o enunciado exibido ao usuário.
      category: "Tecnologia", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["Disquete", "HD Mecânico", "CD-ROM", "SSD"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "SSD", // Define a alternativa considerada correta.
      explanation: "O SSD (Solid State Drive) usa chips de memória flash, sendo muito mais rápido que o HD tradicional." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 28, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "O que significa a sigla DOM no desenvolvimento web com JavaScript?", // Armazena o enunciado exibido ao usuário.
      category: "Tecnologia", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: [ // Abre a lista de alternativas exibidas para esta pergunta.
        "Document Object Model", // Define uma das alternativas possíveis desta pergunta.
        "Data Oriented Memory", // Define uma das alternativas possíveis desta pergunta.
        "Digital Output Manager", // Define uma das alternativas possíveis desta pergunta.
        "Direct Object Manipulation" // Define uma das alternativas possíveis desta pergunta.
      ], // Fecha a lista de alternativas desta pergunta.
      answer: "Document Object Model", // Define a alternativa considerada correta.
      explanation: "O DOM representa a estrutura do HTML como objetos que o JavaScript pode manipular dinamicamente." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 29, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Qual é o sistema operacional móvel desenvolvido pelo Google?", // Armazena o enunciado exibido ao usuário.
      category: "Tecnologia", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["iOS", "Symbian", "Android", "Ubuntu"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "Android", // Define a alternativa considerada correta.
      explanation: "O Android foi adquirido e desenvolvido pelo Google, sendo o sistema móvel mais usado do mundo." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 30, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Qual placa é dedicada ao processamento de gráficos 3D e jogos no computador?", // Armazena o enunciado exibido ao usuário.
      category: "Tecnologia", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["Placa de som", "GPU (Placa de vídeo)", "Placa-mãe", "Placa de captura"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "GPU (Placa de vídeo)", // Define a alternativa considerada correta.
      explanation: "A GPU (Unidade de Processamento Gráfico) renderiza imagens, vídeos e gráficos 3D." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
  
    // ==================== HISTÓRIA (15 questões) ====================
    { // Abre o objeto que representa uma pergunta completa.
      id: 31, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Em que ano foi proclamada a Independência do Brasil?", // Armazena o enunciado exibido ao usuário.
      category: "História", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["1500", "1808", "1822", "1889"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "1822", // Define a alternativa considerada correta.
      explanation: "Dom Pedro I proclamou a independência do Brasil em 7 de setembro de 1822." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 32, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Quem foi o primeiro presidente da República do Brasil?", // Armazena o enunciado exibido ao usuário.
      category: "História", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["Getúlio Vargas", "Dom Pedro II", "Marechal Deodoro da Fonseca", "Juscelino Kubitschek"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "Marechal Deodoro da Fonseca", // Define a alternativa considerada correta.
      explanation: "Deodoro da Fonseca proclamou a República em 1889 e tornou-se o primeiro presidente." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 33, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Em que ano teve início a Primeira Guerra Mundial?", // Armazena o enunciado exibido ao usuário.
      category: "História", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["1914", "1918", "1939", "1945"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "1914", // Define a alternativa considerada correta.
      explanation: "A Primeira Guerra Mundial começou em 1914 e durou até 1918." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 34, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Qual civilização pré-colombiana construiu a cidade histórica de Machu Picchu?", // Armazena o enunciado exibido ao usuário.
      category: "História", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["Astecas", "Maias", "Incas", "Olmecas"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "Incas", // Define a alternativa considerada correta.
      explanation: "Machu Picchu foi construída no século XV pelo Império Inca, no atual Peru." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 35, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Em que ano ocorreu a histórica Queda do Muro de Berlim?", // Armazena o enunciado exibido ao usuário.
      category: "História", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["1961", "1979", "1989", "1991"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "1989", // Define a alternativa considerada correta.
      explanation: "O Muro de Berlim foi derrubado em novembro de 1989, simbolizando o fim da Guerra Fria." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 36, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Qual acontecimento histórico de 1789 teve como lema 'Liberdade, Igualdade e Fraternidade'?", // Armazena o enunciado exibido ao usuário.
      category: "História", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["Revolução Industrial", "Revolução Francesa", "Independência dos EUA", "Revolução Russa"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "Revolução Francesa", // Define a alternativa considerada correta.
      explanation: "A Revolução Francesa derrubou o absolutismo na França em 1789." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 37, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Quem assinou a Lei Áurea em 13 de maio de 1888, abolindo a escravidão no Brasil?", // Armazena o enunciado exibido ao usuário.
      category: "História", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["Dom Pedro I", "Princesa Isabel", "Zumbi dos Palmares", "Duque de Caxias"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "Princesa Isabel", // Define a alternativa considerada correta.
      explanation: "A Princesa Isabel, como regente do Império, assinou a Lei Áurea em 1888." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 38, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Qual navegador português comandou a esquadra que chegou ao Brasil em 1500?", // Armazena o enunciado exibido ao usuário.
      category: "História", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["Vasco da Gama", "Cristóvão Colombo", "Pedro Álvares Cabral", "Fernão de Magalhães"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "Pedro Álvares Cabral", // Define a alternativa considerada correta.
      explanation: "Pedro Álvares Cabral chegou ao litoral da atual Bahia em 22 de abril de 1500." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 39, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Em que ano a missão Apollo 11 levou o ser humano a pisar na Lua pela primeira vez?", // Armazena o enunciado exibido ao usuário.
      category: "História", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["1959", "1969", "1975", "1981"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "1969", // Define a alternativa considerada correta.
      explanation: "Neil Armstrong e Buzz Aldrin caminharam na superfície lunar em 20 de julho de 1969." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 40, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Qual cidade foi a primeira capital do Brasil durante o período colonial?", // Armazena o enunciado exibido ao usuário.
      category: "História", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["Rio de Janeiro", "Olinda", "Salvador", "São Vicente"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "Salvador", // Define a alternativa considerada correta.
      explanation: "Fundada em 1549, Salvador foi a primeira capital do Brasil até 1763." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 41, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Quem foi o líder sul-africano que lutou contra o Apartheid e ganhou o Nobel da Paz?", // Armazena o enunciado exibido ao usuário.
      category: "História", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["Mahatma Gandhi", "Martin Luther King", "Nelson Mandela", "Kofi Annan"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "Nelson Mandela", // Define a alternativa considerada correta.
      explanation: "Nelson Mandela ficou 27 anos preso e tornou-se o primeiro presidente negro da África do Sul." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 42, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Qual país foi o pioneiro da Primeira Revolução Industrial no século XVIII?", // Armazena o enunciado exibido ao usuário.
      category: "História", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["França", "Alemanha", "Inglaterra", "Estados Unidos"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "Inglaterra", // Define a alternativa considerada correta.
      explanation: "A Inglaterra iniciou a Revolução Industrial graças às reservas de carvão e máquinas a vapor." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 43, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Como ficou conhecida a disputa geopolítica entre EUA e União Soviética após 1945?", // Armazena o enunciado exibido ao usuário.
      category: "História", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["Guerra dos Cem Anos", "Guerra Fria", "Belle Époque", "Guerra do Golfo"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "Guerra Fria", // Define a alternativa considerada correta.
      explanation: "Chamou-se Guerra Fria por não haver confronto militar direto entre as duas superpotências." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 44, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Qual presidente brasileiro governou durante o período conhecido como Estado Novo (1937-1945)?", // Armazena o enunciado exibido ao usuário.
      category: "História", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["Washington Luís", "Getúlio Vargas", "Eurico Gaspar Dutra", "Jânio Quadros"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "Getúlio Vargas", // Define a alternativa considerada correta.
      explanation: "Getúlio Vargas instaurou o Estado Novo em 1937, governando até 1945." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 45, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Em qual país da Antiguidade os governantes eram chamados de Faraós?", // Armazena o enunciado exibido ao usuário.
      category: "História", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["Grécia", "Mesopotâmia", "Egito", "Pérsia"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "Egito", // Define a alternativa considerada correta.
      explanation: "No Egito Antigo, os faraós eram considerados reis e divindades vivas." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
  
    // ==================== CIÊNCIAS (15 questões) ====================
    { // Abre o objeto que representa uma pergunta completa.
      id: 46, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Qual é a fórmula química da água?", // Armazena o enunciado exibido ao usuário.
      category: "Ciências", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["CO2", "H2O", "O2", "NaCl"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "H2O", // Define a alternativa considerada correta.
      explanation: "A molécula de água é formada por dois átomos de hidrogênio e um de oxigênio (H2O)." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 47, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Qual planeta do Sistema Solar é conhecido como o 'Planeta Vermelho'?", // Armazena o enunciado exibido ao usuário.
      category: "Ciências", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["Vênus", "Júpiter", "Marte", "Saturno"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "Marte", // Define a alternativa considerada correta.
      explanation: "Marte tem coloração avermelhada devido à grande quantidade de óxido de ferro em seu solo." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 48, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Qual é o maior órgão do corpo humano?", // Armazena o enunciado exibido ao usuário.
      category: "Ciências", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["Fígado", "Pulmão", "Pele", "Intestino"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "Pele", // Define a alternativa considerada correta.
      explanation: "A pele reveste todo o corpo, sendo o maior e mais pesado órgão humano." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 49, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Qual gás as plantas absorvem da atmosfera para realizar a fotossíntese?", // Armazena o enunciado exibido ao usuário.
      category: "Ciências", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["Oxigênio", "Nitrogênio", "Gás Carbônico (CO2)", "Hidrogênio"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "Gás Carbônico (CO2)", // Define a alternativa considerada correta.
      explanation: "Na fotossíntese, as plantas absorvem gás carbônico e luz solar e liberam oxigênio." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 50, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Quantos ossos possui aproximadamente o esqueleto de um ser humano adulto?", // Armazena o enunciado exibido ao usuário.
      category: "Ciências", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["150", "206", "312", "98"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "206", // Define a alternativa considerada correta.
      explanation: "Um adulto possui 206 ossos após a fusão natural de alguns ossos da infância." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 51, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Qual físico desenvolveu a famosa Teoria da Relatividade?", // Armazena o enunciado exibido ao usuário.
      category: "Ciências", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["Isaac Newton", "Galileu Galilei", "Albert Einstein", "Nikola Tesla"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "Albert Einstein", // Define a alternativa considerada correta.
      explanation: "Albert Einstein publicou a Relatividade Restrita em 1905 e a Geral em 1915." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 52, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Qual organela é responsável pela respiração celular e produção de energia (ATP)?", // Armazena o enunciado exibido ao usuário.
      category: "Ciências", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["Ribossomo", "Complexo de Golgi", "Mitocôndria", "Lisossomo"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "Mitocôndria", // Define a alternativa considerada correta.
      explanation: "As mitocôndrias são as usinas de energia das células eucariontes." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 53, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Qual é o planeta mais próximo do Sol?", // Armazena o enunciado exibido ao usuário.
      category: "Ciências", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["Vênus", "Mercúrio", "Terra", "Marte"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "Mercúrio", // Define a alternativa considerada correta.
      explanation: "Mercúrio ocupa a primeira órbita a partir do Sol no nosso Sistema Solar." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 54, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Qual é a velocidade aproximada da luz no vácuo?", // Armazena o enunciado exibido ao usuário.
      category: "Ciências", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["340 m/s", "30.000 km/s", "300.000 km/s", "1.000.000 km/s"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "300.000 km/s", // Define a alternativa considerada correta.
      explanation: "A luz viaja no vácuo a aproximadamente 299.792 quilômetros por segundo." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 55, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Como se chama a passagem direta da água do estado sólido para o estado líquido?", // Armazena o enunciado exibido ao usuário.
      category: "Ciências", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["Solidificação", "Fusão", "Condensação", "Sublimação"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "Fusão", // Define a alternativa considerada correta.
      explanation: "O derretimento do gelo para água líquida é chamado de fusão." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 56, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Em qual parte da célula eucarionte fica armazenado o DNA?", // Armazena o enunciado exibido ao usuário.
      category: "Ciências", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["Membrana plasmática", "Citoplasma", "Núcleo", "Parede celular"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "Núcleo", // Define a alternativa considerada correta.
      explanation: "O núcleo celular protege e organiza o material genético (DNA) nos seres eucariontes." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 57, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Qual vitamina o corpo humano sintetiza quando a pele é exposta à luz solar?", // Armazena o enunciado exibido ao usuário.
      category: "Ciências", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["Vitamina A", "Vitamina C", "Vitamina D", "Vitamina B12"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "Vitamina D", // Define a alternativa considerada correta.
      explanation: "Os raios UVB do sol ativam a síntese de Vitamina D, essencial para os ossos." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 58, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Qual é o único metal que se encontra em estado líquido na temperatura ambiente?", // Armazena o enunciado exibido ao usuário.
      category: "Ciências", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["Alumínio", "Chumbo", "Mercúrio", "Cobre"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "Mercúrio", // Define a alternativa considerada correta.
      explanation: "O mercúrio (Hg) permanece líquido em temperatura ambiente (ponto de fusão de -38,8 °C)." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 59, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Qual coração de mamífero possui quatro cavidades (dois átrios e dois ventrículos)?", // Armazena o enunciado exibido ao usuário.
      category: "Ciências", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["Apenas o da baleia", "Nenhum mamífero", "Todos os mamíferos", "Apenas animais aquáticos"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "Todos os mamíferos", // Define a alternativa considerada correta.
      explanation: "Todos os mamíferos e aves possuem coração com 4 cavidades para circulação completa." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 60, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Qual gás é o mais abundante na atmosfera da Terra (cerca de 78%)?", // Armazena o enunciado exibido ao usuário.
      category: "Ciências", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["Oxigênio", "Gás Carbônico", "Nitrogênio", "Argônio"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "Nitrogênio", // Define a alternativa considerada correta.
      explanation: "O ar atmosférico é composto por cerca de 78% de nitrogênio e 21% de oxigênio." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
  
    // ==================== ESPORTES (15 questões) ====================
    { // Abre o objeto que representa uma pergunta completa.
      id: 61, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Quantos jogadores titulares uma equipe de futebol entra em campo?", // Armazena o enunciado exibido ao usuário.
      category: "Esportes", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["9", "10", "11", "12"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "11", // Define a alternativa considerada correta.
      explanation: "Cada time de futebol joga com 11 atletas em campo (10 na linha e 1 goleiro)." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 62, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Qual seleção é a maior campeã da história da Copa do Mundo de Futebol Masculino?", // Armazena o enunciado exibido ao usuário.
      category: "Esportes", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["Alemanha", "Itália", "Argentina", "Brasil"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "Brasil", // Define a alternativa considerada correta.
      explanation: "O Brasil é o único pentacampeão mundial (1958, 1962, 1970, 1994 e 2002)." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 63, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "De quantos em quantos anos ocorrem tradicionalmente os Jogos Olímpicos de Verão?", // Armazena o enunciado exibido ao usuário.
      category: "Esportes", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["2 anos", "3 anos", "4 anos", "5 anos"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "4 anos", // Define a alternativa considerada correta.
      explanation: "O ciclo olímpico (Olimpíada) tem duração oficial de 4 anos." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 64, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Em qual categoria do automobilismo Ayrton Senna conquistou três títulos mundiais?", // Armazena o enunciado exibido ao usuário.
      category: "Esportes", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["Fórmula Indy", "Nascar", "Fórmula 1", "Rally Dakar"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "Fórmula 1", // Define a alternativa considerada correta.
      explanation: "Ayrton Senna foi tricampeão mundial de Fórmula 1 em 1988, 1990 e 1991." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 65, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "No basquete, quantos pontos vale um arremesso convertido de fora da linha do arco?", // Armazena o enunciado exibido ao usuário.
      category: "Esportes", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["1 ponto", "2 pontos", "3 pontos", "4 pontos"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "3 pontos", // Define a alternativa considerada correta.
      explanation: "Cestas convertidas atrás da linha do perímetro valem 3 pontos no basquete." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 66, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Qual tenista brasileiro foi tricampeão do torneio de Roland Garros?", // Armazena o enunciado exibido ao usuário.
      category: "Esportes", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["Fernando Meligeni", "Gustavo Kuerten (Guga)", "Thomaz Bellucci", "João Fonseca"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "Gustavo Kuerten (Guga)", // Define a alternativa considerada correta.
      explanation: "Guga venceu o Grand Slam de Roland Garros em 1997, 2000 e 2001." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 67, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Qual é o tempo regulamentar de uma partida oficial de futebol (sem prorrogação)?", // Armazena o enunciado exibido ao usuário.
      category: "Esportes", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["60 minutos", "80 minutos", "90 minutos", "100 minutos"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "90 minutos", // Define a alternativa considerada correta.
      explanation: "Uma partida oficial tem 90 minutos divididos em dois tempos de 45 minutos." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 68, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Em qual esporte olímpico os jogadores utilizam raquetes para rebater uma peteca?", // Armazena o enunciado exibido ao usuário.
      category: "Esportes", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["Squash", "Tênis de Mesa", "Badminton", "Hóquei"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "Badminton", // Define a alternativa considerada correta.
      explanation: "O Badminton é jogado com raquetes leves e uma peteca sobre uma rede alta." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 69, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Quantos sets uma equipe precisa vencer para ganhar uma partida oficial de vôlei de quadra?", // Armazena o enunciado exibido ao usuário.
      category: "Esportes", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["2 sets", "3 sets", "4 sets", "5 sets"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "3 sets", // Define a alternativa considerada correta.
      explanation: "O vôlei é disputado em melhor de 5 sets; quem vencer 3 sets primeiro ganha o jogo." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 70, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Qual nadador norte-americano é o maior medalhista de ouro da história das Olimpíadas?", // Armazena o enunciado exibido ao usuário.
      category: "Esportes", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["César Cielo", "Ian Thorpe", "Michael Phelps", "Mark Spitz"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "Michael Phelps", // Define a alternativa considerada correta.
      explanation: "Michael Phelps conquistou 23 medalhas de ouro olímpicas ao longo da carreira." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 71, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Qual é a distância oficial aproximada de uma corrida de Maratona?", // Armazena o enunciado exibido ao usuário.
      category: "Esportes", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["10 km", "21 km", "42,195 km", "50 km"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "42,195 km", // Define a alternativa considerada correta.
      explanation: "A distância oficial de uma maratona é de exatos 42 quilômetros e 195 metros." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 72, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Qual cidade brasileira sediou os Jogos Olímpicos de 2016?", // Armazena o enunciado exibido ao usuário.
      category: "Esportes", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["São Paulo", "Brasília", "Rio de Janeiro", "Belo Horizonte"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "Rio de Janeiro", // Define a alternativa considerada correta.
      explanation: "Os Jogos Olímpicos Rio 2016 foram os primeiros realizados na América do Sul." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 73, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "No jogo de xadrez, qual peça se movimenta exclusivamente nas diagonais?", // Armazena o enunciado exibido ao usuário.
      category: "Esportes", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["Torre", "Cavalo", "Bispo", "Peão"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "Bispo", // Define a alternativa considerada correta.
      explanation: "O Bispo move-se quantas casas livres quiser, mas sempre em linha diagonal." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 74, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Qual velocista jamaicano detém o recorde mundial dos 100 metros rasos (9,58s)?", // Armazena o enunciado exibido ao usuário.
      category: "Esportes", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["Carl Lewis", "Usain Bolt", "Tyson Gay", "Yohan Blake"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "Usain Bolt", // Define a alternativa considerada correta.
      explanation: "Usain Bolt cravou 9,58 segundos no Mundial de Atletismo de Berlim em 2009." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 75, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Quantos anéis entrelaçados formam a bandeira oficial dos Jogos Olímpicos?", // Armazena o enunciado exibido ao usuário.
      category: "Esportes", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["4", "5", "6", "7"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "5", // Define a alternativa considerada correta.
      explanation: "Os 5 anéis olímpicos representam a união dos cinco continentes habitados." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
  
    // ==================== ENTRETENIMENTO (15 questões) ====================
    { // Abre o objeto que representa uma pergunta completa.
      id: 76, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Qual filme brasileiro venceu o Oscar de Melhor Filme Internacional em 2025?", // Armazena o enunciado exibido ao usuário.
      category: "Entretenimento", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["Central do Brasil", "Cidade de Deus", "Ainda Estou Aqui", "O Auto da Compadecida"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "Ainda Estou Aqui", // Define a alternativa considerada correta.
      explanation: "Dirigido por Walter Salles, 'Ainda Estou Aqui' conquistou o primeiro Oscar do Brasil em 2025." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 77, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Qual artista ficou mundialmente consagrado como o 'Rei do Pop'?", // Armazena o enunciado exibido ao usuário.
      category: "Entretenimento", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["Elvis Presley", "Freddie Mercury", "Michael Jackson", "Prince"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "Michael Jackson", // Define a alternativa considerada correta.
      explanation: "Michael Jackson revolucionou a música e lançou 'Thriller', o álbum mais vendido da história." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 78, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Qual é o nome da escola de magia frequentada por Harry Potter?", // Armazena o enunciado exibido ao usuário.
      category: "Entretenimento", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["Nárnia", "Hogwarts", "Mordor", "Ilvermorny"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "Hogwarts", // Define a alternativa considerada correta.
      explanation: "A Escola de Magia e Bruxaria de Hogwarts é o cenário principal da saga Harry Potter." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 79, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Qual série de fantasia da HBO é baseada nos livros 'As Crônicas de Gelo e Fogo'?", // Armazena o enunciado exibido ao usuário.
      category: "Entretenimento", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["The Witcher", "Vikings", "Game of Thrones", "Anéis de Poder"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "Game of Thrones", // Define a alternativa considerada correta.
      explanation: "Game of Thrones adapta a obra literária criada pelo escritor George R. R. Martin." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 80, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Qual banda britânica de rock era formada por John, Paul, George e Ringo?", // Armazena o enunciado exibido ao usuário.
      category: "Entretenimento", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["Queen", "The Rolling Stones", "The Beatles", "Pink Floyd"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "The Beatles", // Define a alternativa considerada correta.
      explanation: "Formada em Liverpool, The Beatles é a banda mais influente da história da música." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 81, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Na saga Star Wars, quem revela ser o verdadeiro pai de Luke Skywalker?", // Armazena o enunciado exibido ao usuário.
      category: "Entretenimento", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["Obi-Wan Kenobi", "Imperador Palpatine", "Darth Vader", "Han Solo"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "Darth Vader", // Define a alternativa considerada correta.
      explanation: "Darth Vader (Anakin Skywalker) faz a famosa revelação em 'O Império Contra-Ataca'." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 82, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Qual animação de 1995 da Pixar tem como protagonistas o caubói Woody e Buzz Lightyear?", // Armazena o enunciado exibido ao usuário.
      category: "Entretenimento", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["Monstros S.A.", "Carros", "Toy Story", "Os Incríveis"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "Toy Story", // Define a alternativa considerada correta.
      explanation: "Toy Story foi o primeiro longa-metragem da história totalmente feito por computação gráfica." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 83, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Qual é o nome do bruxo caçador de monstros protagonista da franquia The Witcher?", // Armazena o enunciado exibido ao usuário.
      category: "Entretenimento", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["Vesemir", "Geralt de Rívia", "Dandelion", "Eredin"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "Geralt de Rívia", // Define a alternativa considerada correta.
      explanation: "Geralt de Rívia, o Lobo Branco, é o protagonista dos livros e jogos de The Witcher." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 84, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Qual personagem dos videogames é o mascote encanador da Nintendo?", // Armazena o enunciado exibido ao usuário.
      category: "Entretenimento", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["Sonic", "Link", "Mario", "Crash"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "Mario", // Define a alternativa considerada correta.
      explanation: "Criado por Shigeru Miyamoto, Super Mario é o ícone principal da Nintendo." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 85, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Qual compositor clássico compôs a 'Nona Sinfonia' mesmo após ficar completamente surdo?", // Armazena o enunciado exibido ao usuário.
      category: "Entretenimento", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["Mozart", "Bach", "Beethoven", "Chopin"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "Beethoven", // Define a alternativa considerada correta.
      explanation: "Ludwig van Beethoven compôs algumas de suas maiores obras-primas já sem audição." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 86, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Qual super-herói da Marvel utiliza um escudo redondo feito de Vibranium?", // Armazena o enunciado exibido ao usuário.
      category: "Entretenimento", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["Homem de Ferro", "Thor", "Capitão América", "Gavião Arqueiro"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "Capitão América", // Define a alternativa considerada correta.
      explanation: "Steve Rogers, o Capitão América, usa seu icônico escudo indestrutível de Vibranium." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 87, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Qual anime acompanha a jornada de uma maga elfa após a derrota do Rei Demônio?", // Armazena o enunciado exibido ao usuário.
      category: "Entretenimento", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["Naruto", "Frieren e a Jornada para o Além", "Attack on Titan", "One Piece"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "Frieren e a Jornada para o Além", // Define a alternativa considerada correta.
      explanation: "Frieren acompanha a elfa imortal refletindo sobre a passagem do tempo e seus antigos companheiros." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 88, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Quem dirigiu o filme 'Titanic' (1997) e a franquia 'Avatar'?", // Armazena o enunciado exibido ao usuário.
      category: "Entretenimento", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["Christopher Nolan", "Quentin Tarantino", "James Cameron", "Martin Scorsese"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "James Cameron", // Define a alternativa considerada correta.
      explanation: "James Cameron dirigiu três dos filmes de maior bilheteria da história do cinema." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 89, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Qual é o nome do continente fictício onde se passa a trilogia 'O Senhor dos Anéis'?", // Armazena o enunciado exibido ao usuário.
      category: "Entretenimento", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["Westeros", "Terra Média", "Tamriel", "Azeroth"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "Terra Média", // Define a alternativa considerada correta.
      explanation: "J.R.R. Tolkien ambientou 'O Hobbit' e 'O Senhor dos Anéis' na Terra Média." // Armazena a explicação apresentada após a resposta.
    }, // Fecha o objeto desta pergunta e separa-o do próximo.
    { // Abre o objeto que representa uma pergunta completa.
      id: 90, // Identifica exclusivamente esta pergunta dentro da coleção.
      question: "Na série Stranger Things, qual é o nome da garota com poderes telecinéticos?", // Armazena o enunciado exibido ao usuário.
      category: "Entretenimento", // Define a categoria usada para selecionar e exibir esta pergunta.
      options: ["Max", "Joyce", "Eleven (Onze)", "Nancy"], // Lista todas as alternativas disponíveis nesta pergunta.
      answer: "Eleven (Onze)", // Define a alternativa considerada correta.
      explanation: "Eleven (Jane Hopper) possui habilidades psicocinéticas e é interpretada por Millie Bobby Brown." // Armazena a explicação apresentada após a resposta.
    } // Fecha o último objeto da coleção de perguntas.
  ]; // Fecha o array principal de perguntas do quiz.