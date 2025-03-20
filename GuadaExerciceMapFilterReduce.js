//MAP

const distaciaEmMetros = [1000, 1500, 2000, 2500]

const distanciasEmKm = distanciaEmMetros.map(distancia => distancia / 1000)

console.log("Distancia em Km: ", distanciasEmKm) //imprime: Distancia em Km: [1, 1.5, 2, 2.5]

//FILTER

const distanciaEmMetros[1000, 1500, 2000, 2500]

const intensFiltrados = distanciaEmMetros.filter(distancia => distancia > 1500)

console.log("Itens filtrados: ", itensFiltrados) // imprime: [2000, 2500]

//FILTER com mais de um parâmetro exige () , exemplo:

const intensFiltrados = distanciaEmMetros.filter((distancia, index, arrayOriginal) => {

  console.log("A distancia ${distancia} está no índice ${index}.")
  console.log("Array original: ${arrayOriginal}.")
}) 
//imprime: A distancia 1000 está no índice 0.
           Array original:
           1000, 1500, 2000, 2500 // se repete para todos os números...

//REDUCE: reduzir todos os valores do Array em um valor só (acc = acumulador)

const distanciaTotal = distanciaEmMetros.reduce((acc, distancia) => {
  return acc + distancia
}, 0) 

console.log("Distancia total: ", distanciaTotal) // Imprime: Distancia total: 7000
