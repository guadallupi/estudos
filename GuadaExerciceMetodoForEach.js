const array1 = ["a", "b", "c"];

array1.forEach((element) => console.log(element));

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"



const notasFinais = [            //Uso do Array
  {nome: "Ana", nota: 4}
  {nome: "Murilo", nota:8}
  {nome: "Alice", nota: 10}
  {nome: "Julio", nota: 5}
]

notasFinais.forEach((aluno) => {    // Uso do forEach
  if (aluno.nota >= 6) {
  console.log("O aluno ${aluno.nome} está aprovado com ${aluno.nota}") 
  } else {
    console.log("O aluno ${aluno.nome} está reprovado com ${aluno.nota}")
    }

//Imprime: O aluno Ana está reprovado com 4
           O aluno Murilo está aprovado com 8
           O aluno Alice está aprovado com 10
           O aluno Julio está reprovado com 5
