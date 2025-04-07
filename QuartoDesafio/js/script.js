let escolhaJogador
let viloesPossiveis
//let randomViloes
let escolhaPc
let forcaJogador
let forcaPc

forcaPc = 0;
forcaJogador = 0;
escolhaPc = [];
viloesPossiveis = ["Lula", "Bolsonaro", "Alexandre de moraes", "Amanda vetorazzo", "Nando Moura"];
escolhaJogador = ["","",""];
//Escolher aliados
for (i = 0; i < 3; i++)
  {
    escolhaJogador[i] = prompt("Escolha Seus Heróis: " + (i + 1));
    //Calculo força aliada
    forcaJogador = forcaJogador + Math.floor(Math.random() * 10) + 1;
  }
alert("Seus heróis são respectivamente: "+ escolhaJogador);
alert("A força dos seus aliados É " + forcaJogador);
//Escolha do computador
for (i = 0; i < 3; i++)
  {
    //randomViloes = Math.floor(Math.random() * 5); Otimizei e coloquei o calculo dentro do viloesPossiveis
    escolhaPc[i] = viloesPossiveis[Math.floor(Math.random() * 5)];
    forcaPc = forcaPc + Math.floor(Math.random() * 10) + 1;
  }
alert("Os seus adversários serão: " + escolhaPc);
alert("A força do adversário é : " + forcaPc);
if (forcaJogador > forcaPc)
  {
    alert("Voce derrotou os viloes !!");
  }
else
  alert("Os viloes comeram voce com farinha");
