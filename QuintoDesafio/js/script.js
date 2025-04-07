// PARTE 1: Lista de perguntas e respostas
perguntas = [
    {
      pergunta: "Onde é o lar do Teemo?",
      respostas: [
        { opcao: "Demacia", correto: false },
        { opcao: "Shurima", correto: false },
        { opcao: "Bondópolis", correto: true },
        { opcao: "Ionia", correto: false }
      ]
    },
    {
      pergunta: "Quem fala a frase: 'Quanto mais escura a noite, mais brilhantes as estrelas'?",
      respostas: [
        { opcao: "Braum", correto: true },
        { opcao: "Evelyn", correto: false },
        { opcao: "Talia", correto: false },
        { opcao: "Aurelion Sol", correto: false }
      ]
    },
    {
      pergunta: "Qual dos campeões a seguir NÃO foi lançado em 2014?",
      respostas: [
        { opcao: "Teemo", correto: false },
        { opcao: "Yasuo", correto: true },
        { opcao: "Gwen", correto: false },
        { opcao: "Alistar", correto: false }
      ]
    },
    {
      pergunta: "Dos campeões a seguir, qual possui algum AP Scaling?",
      respostas: [
        { opcao: "Renekton", correto: true },
        { opcao: "Zed", correto: false },
        { opcao: "Kayn", correto: false },
        { opcao: "Garen", correto: false }
      ]
    },
    {
      pergunta: "Qual é o nome do alter ego do Ezreal?",
      respostas: [
        { opcao: "JARRO PLUMALUZ", correto: true },
        { opcao: "JAIRO PRUMALUZ", correto: false },
        { opcao: "JAIRO PLUMA LUZ", correto: false },
        { opcao: "JARRO PRUMALUZ", correto: false }
      ]
    },
    {
      pergunta: "Qual dos campeões a seguir reside/residiu em Ionia?",
      respostas: [
        { opcao: "Lilia", correto: true },
        { opcao: "Jax", correto: false },
        { opcao: "Jana", correto: false },
        { opcao: "Xin Zhao", correto: false }
      ]
    },
    {
      pergunta: "Em homenagem a qual yordle Rumble nomeou sua montaria robótica?",
      respostas: [
        { opcao: "Tristana", correto: true },
        { opcao: "Lulu", correto: false },
        { opcao: "Corki", correto: false },
        { opcao: "Heimendinger", correto: false }
      ]
    },
    {
      pergunta: "Quantos irmãos existem no mundo de League of Legends?",
      respostas: [
        { opcao: "3", correto: false },
        { opcao: "6", correto: false },
        { opcao: "4", correto: true },
        { opcao: "1", correto: false }
      ]
    },
    {
      pergunta: "Quais cidades estavam brigando na música Awaken?",
      respostas: [
        { opcao: "Demacia e Noxus", correto: false },
        { opcao: "Ionia e Noxus", correto: true },
        { opcao: "Demacia e Piltover", correto: false },
        { opcao: "Shurima e Demacia", correto: false }
      ]
    },
    {
      pergunta: "No sistema antigo de runas, quais são elas?",
      respostas: [
        { opcao: "Dominação, Determinação, Perspicácia", correto: false },
        { opcao: "Astúcia, Dominação, Ferocidade", correto: false },
        { opcao: "Determinação, Ferocidade, Astúcia", correto: true },
        { opcao: "Carisma, Dominação, Ferocidade", correto: false }
      ]
    }
  ];
  // PARTE 2: Pegando os elementos do HTML
  const perguntaElemento = document.querySelector(".pergunta");
  const respostasElemento = document.querySelector(".respostas");
  const progressoElemento = document.querySelector(".progresso");
  const textoFinal = document.querySelector(".fim span");
  const conteudo = document.querySelector(".conteudo");
  const conteudoFinal = document.querySelector(".fim");
  
  // PARTE 3: Variáveis para controle do jogo
  let indiceAtual = 0; // Índice da pergunta atual
  let acertos = 0; // Contador de acertos
  
  // PARTE 4: Função para carregar uma nova pergunta
  function carregarPergunta() {
    progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
    const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
    perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta
  
    respostasElemento.innerHTML = ""; // Limpa as respostas anteriores
  
    // Percorre todas as respostas da pergunta atual
    for (let i = 0; i < perguntaAtual.respostas.length; i++) {
      // Pega a resposta atual com base no índice 'i'
      const resposta = perguntaAtual.respostas[i];
      // Cria um novo elemento 'button' (botão)
      const botao = document.createElement("button");
      // Adiciona a classe CSS 'botao-resposta' ao botão para estilizar
      botao.classList.add("botao-resposta");
      // Define o texto do botão com a opção de resposta (resposta.opcao)
      botao.innerText = resposta.opcao;
      // Adiciona um evento de clique no botão
      botao.onclick = function () {
        // Se a resposta for correta (resposta.correto === true), incrementa o número de acertos
        if (resposta.correto) {
          acertos++; // Incrementa o contador de acertos
        }
  
        // Avança para a próxima pergunta
        indiceAtual++;
  
        // Se ainda houver perguntas, carrega a próxima pergunta
        if (indiceAtual < perguntas.length) {
          carregarPergunta(); // Carrega a próxima pergunta
        } else {
          // Se não houver mais perguntas, finaliza o jogo
          finalizarJogo();
        }
      };
  
      // Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
      respostasElemento.appendChild(botao);
    }
  }
  
  // PARTE 5: Função para mostrar a tela final
  function finalizarJogo() {
    textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`; // Exibe o resultado
    conteudo.style.display = "none"; // Esconde as perguntas
    conteudoFinal.style.display = "flex"; // Mostra a tela final
  }
  
  // PARTE 6: Iniciando o jogo pela primeira vez
  carregarPergunta();
  