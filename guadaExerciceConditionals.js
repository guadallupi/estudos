const idadeJoao = 14
const maioridadeBrasil = 18

if (idadeJoao >= 18) {
  console.log("João pode dirigir")
} else { 
  const anosFaltam = maioridade - idadeJoão
  console.log("João não pode dirigir")
  console.log("Faltam ${anosFaltam} anos para João dirigir.")
}
//Operadores ternários

idadeJoão >= maioridade
? console.log("João pode dirigir")
: console.log("João não pode dirigir")

// 0 a 12 anos -> infancia
// 13 a 17 anos -> adolescencia
// 18 a 25 anos -> jovem adulto
// 26 a 60 anos -> adulto
// mais que 60 anos -> idoso

if(idadePessoa >= 0 && idadePessoa <= 12) {
console.log("infancia")
} else if (idadePessoa >= 13 && idadePessoa <= 17) {
  console.log("adolescencia")
} else if (idadePessoa >= 18 && idadePessoa <= 25) {
  console.log("jovem adulto")
} else if (idadePessoa >= 26 && idadePessoa <= 60) {
  console.log("adulto")
} else { 
  console.log("idoso")
