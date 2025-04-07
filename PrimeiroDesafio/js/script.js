function conversor()
{
  let real = 0.50 / 1000000;
  let euro = 0.08 / 1000000;

  let moeda = prompt("Qual a sua moeda? Euro ou Real?").toLowerCase();
  let zenny = prompt("Quantos Zenny você tem?");
  if (moeda === "real")
  {
    let valorConvertido = zenny * real;
    alert("Você escolheu Real! " + zenny + " Zenny = R$ " + valorConvertido);
  } 
  else if (moeda === "euro")
  {
    let valorConvertido = zenny * euro;
    alert("Você escolheu Euro! " + zenny + " Zenny = € " + valorConvertido);
  }
  else
  {
    alert("Escolha só euro ou real.");
  }
}
