// Esse codigo foi feito por mim Jorge carvalho para a imersão alura 9
function jogar() {
    let escolhaJogador;
    let escolhaComputador;
    let nivel;
    let venceu;
    
    venceu = false;
    nivel = 1;
    
    // Aplicação da estrutura de repetição de 1 a 3
    while (nivel <= 3) {
      // escolha do jogador
      escolhaJogador = parseInt(prompt("Escolha um planeta para pousar: 1, 2 ou 3"));
      if (![1, 2, 3].includes(escolhaJogador)) {
        alert("Escolha um número de 1 a 3");
        // garanto que o programa termina caso ele escolha um n invalido
        continue;
      }
      // escolha do PC
      escolhaComputador = Math.floor(Math.random() * 3) + 1;
      if (escolhaComputador == escolhaJogador) {
        alert("Você foi atacado por aliens ! fim do jogo !");
        break;
      }
      if (nivel == 3) {
        venceu = true;
        break;
      }
      alert("Você explorou o planeta com sucesso! Vá para o próximo!");
      nivel++;
    }
    if (venceu) {
      alert("Você explorou todos os planetas ! parabéns !");
    }
  }
  