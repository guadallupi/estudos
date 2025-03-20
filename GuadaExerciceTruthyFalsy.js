//VALORES FALSY: 0, "", undefined, null, NaN

console.log(Boolean(0)) // false
console.log(Boolean("")) // false
console.log(Boolean(undefined)) // false
console.log(Boolean(null)) // false
console.log(Boolean(NaN)) // false

//VALORES TRUTHY: números, palavras, objetos, arrays

console.log("1:", Boolean(1)) // 1: true
console.log("olá:", Boolean("olá")) // olá: true
console.log("Objeto:", Boolean({objeto})) // Objeto: true
console.log("Array:", Boolean([1,2])) // Array: true
console.log("Array vazio:", Boolean([])) // Array vazio: true
console.log("Objeto vazio:", Boolean({})) // Objeto vazio: true


// FALSY E TRUTHY NA PRÁTICA:

const nomes = ["Ana", "Gil", "Gal", ""]
console.log("nomes: ", nomes) //imprime: nomes: ["Ana", "Gil", "Gal", ""]

const nomesFiltrados = nomes.filter((nome) => nome)
console.log("nomes Filtrados: ", nomesFiltrados) // imprime: nomes Filtrados: ["Ana", "Gil", "Gal"]

//Em Condicionais (mais usados no quotidiano)

const x = 10
const y = null

if (x) {
  console.log("x é uma variável truthy") //imprime: x é uma variável truthy
}

if (y) {
  console.log("y é uma variável truthy") // NÃO IMPRIME
}

//ForEach

const nomes = ["Vivi", "Val",""]

nomes.forEach(nome =>  {
  if(nome) {
    console.log("É truthy: ", nome) //imprime: É truthy: Vivi É truthy: Val
  }
})




