//Comparar 1 variável ou expressão a Vários casos

const diaDaSemana = 4
let nomeDoDia

switch(diaDaSemana) {
  case 0:
    nomeDoDia = "Domingo"
  break
  case 1:
    nomeDoDia = "Segunda"
  break
  case 2:
    nomeDoDia = "Terça"
  break
  case 3:
    nomeDoDia = "Quarta"
  break
  case 4:
    nomeDoDia = "Quinta"
  break
  case 5:
    nomeDoDia = "Sexta"
  break
  case 6:
    nomeDoDia = "Sábado"
    break
}

console.log("O dia da semana é " + nomeDoDia) // depende do valor do const diaDaSemana
