//Escopo de Função

const x = "variavel global"

//Escopo de Bloco

if (x) {
  const z = "variavel de bloco"
  console.log("x é: ", x) // x é variavel global
  console.log("z é: ", z) // z é variavel de bloco
}

//Escopo de Função

const funcao = () =>{
  const a = "variavel do escopo da funcao"
  console.log("Na função, A é", a) // Na função, A é variavel do escopo da funcao
}

funcao()
