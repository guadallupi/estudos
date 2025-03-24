//Desenvolva um algoritmo que multiplique os números de 1 a 9 pelos números 2 e 5. Você terá como multiplicando os números 2 e 5 e como multiplicadores os números de 1 a 9

const multiplicador = [2, 5];
for(let index = 0; index <= multiplicador.length; index = index + 1); {
  for(let index2 = 1; index2 <= 9; index2 = index2 + 1); {

    resultado = multiplicador[index] * index2

    console.log(multiplicador[index] + ' x ' + index2 + ' = ' + resultado)
  }
} 

// Imprime: 
3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
3 x 4 = 12
3 x 5 = 15
3 x 6 = 18
3 x 7 = 21
3 x 8 = 24
3 x 9 = 27
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
7 x 6 = 42
7 x 7 = 49
7 x 8 = 56
7 x 9 = 63


