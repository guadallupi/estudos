//SPREAD OPERATORS IN ARRAYS

const listaGuada = ["Ana", "Julia", "Carlos"]

const listaMaeGuada = [...listaGuada, "Sara", "Dani"]

console.log("Lista da mãe da Guada: ", listaMaeGuada) //imprime: Lista da mãe da Guada: ['Ana', 'Julia', 'Carlos', 'Sara', 'Dani']

//Cópias de Arrays:

console.log("listaGuada", listaGuada)

const listaGuada2 = [...listaGuada] // uso do spread operator (...)

console.log("listaGuada2", listaGuada // imprime: listaGuada2 ["Ana", "Julia", "Carlos"]

listaGuada2.push("Leo") // add "Leo" no final da lista

console.log("listaGuada2", listaGuada) // imprime: listaGuada ["Ana", "Julia", "Carlos"] listaGuada2 ["Ana", "Julia", "Carlos", "Leo"]

// SPREADS OPERATOR EM OBJETOS

const medico1 = {
  especialidade: "Pediatra",
  hospital: "IJF",
  nome: "Amaro",
}

const medico2 = {
  ...medico1,
  nome: "Ana"
}

console.log("Médico 1", medico1) //imprime: Médico 1 {especialidade: 'Pediatra', hospital: 'IJF', nome: 'Amaro'}

console.log("Médico 2", medico2) //imprime: Médico 2 {especialidade: 'Pediatra', hospital: 'IJF', nome: 'Ana'}

