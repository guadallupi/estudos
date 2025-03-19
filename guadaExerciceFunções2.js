//Expressão de uma Função: atribuir variáveis

const imprimir = function(impressao) {
  console.log(impressao)
}
imprimir("Tudo bem")
//Vai imprimir: Tudo bem


//Outro exemplo com mais variáveis

const valor1 = 50
const valor2 = 30
const calcularSubtracao = function(valor1, valor2) {
  return valor1 - valor2
}
imprimir("A subtração entre ${valor1} e ${valor2} é ${calcularSubtracao(valor1, valor2)}")
//Vai imprimir: A subtração entre 50 e 30 é 20
