//Função sem parâmetros e sem retorno
function imprimir () {
  console.log("Tudo bem")
}

imprimir()
imprimir()
imprimir()
//Vai imprimir: Tudo bem Tudo bem Tudo bem //

function calcularSoma() {
  console.log(2 + 2)
}

calcularSoma() 
//vai imprimir: 4 //

//Função com parâmetros 
function calcularSoma(valor1, valor2) {
  console.log(valor1 + valor2) //exemplo 1
  console.log("A soma entre ${valor1} e ${valor2} é: ${valor1 + valor2}") //exemplo 2
}

calcularSoma(3, 5) //exemplo 1
//Vai imprimir: 8//

calcularSoma(10, 20) //exemplo 2
// Vai imprimir: A soma entre 10 e 20 é 30

//Outra maneira usando const

//Função com parâmetros e return
function calcularSoma(valor1, valor2) {
  return valor1 + valor2
}

const valor1 = 2
const valor2 = 4
console.log("A soma entre ${valor1} e ${valor2} é ${calcularSoma(valor1, valor2)" }

            //Vai imprimir: A soma entre 2 e 4 é 6

// Usando Funções com parâmetros

function imprimir(impressao) {
  console.log(impressao)
}

imprimir("Tudo bem")
//Vai imprimir: Tudo bem

imprimir("A soma entre ${valor1} e ${valor2} é ${calcularSoma(valor1, valor2)}")
// Vai imprimir: A soma entre valor1 e valor2 é valor1+valor2




