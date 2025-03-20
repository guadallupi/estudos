//Desestruturação de Arrays []

const nomes = ["Ana", "Bia", "Gal"]

const [nome1, nome2, nome3] = nomes //desestruturação
console.log("Nome 1: ", nome1)

//imprime: Nome 1: Ana

const casais = [["Ana", "Bia"], ["Felipe", "Matheus"]]

//desestruturando: 
const [casal1, casal2] = casais

console.log("Casal 1: ", casal1) // imprime: Casal 1: ["Ana", "Bia"]

//desestruturando de novo:
const [[nome1, nome2], [nome3, nome4]] = casais

console.log("Nome 1: ", nome1) // imprime: Nome 1: Ana
console.log("Nome 2: ", nome2) // imprime: Nome 2: Bia
...

//DESESTRUTURAÇÃO DE OBJETOS {}

const pessoa = {
  nome: "Ana",
  sobrenome: "Silva",
  familia: ["Lucas", "Paul"]
}

//desestruturando
const { nome: primeiroNome, sobrenome: segundoNome, familia: membrosFamilia } = pessoa

console.log(primeiroNome, segundoNome, membrosFamilia) //imprime: Ana Silva ['Lucas','Paul']

//desestruturando novamente
const {nomeCompleto: {nome: primeiroNome, sobrenome: segundoNome}, familia} = pessoa
