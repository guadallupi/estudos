const numeros = [1, 33 ,103, 132, 270, 1320, 75];
const numerosPares = [];
const numerosImpares = [];

for (let index = 0; index < numeros.length; index = index + 1) {
  if (numeros[index] % 2 === 0) {
    numerosPares.push(numeros[index]);
  } else {
    numerosImpares.push(numeros[index]);
  }
}
console.log(numerosPares, numerosImpares);

//No if é verificado se numeros[index] divido por 2 tem resto igual a 0. Caso essa condição seja satisfeita, 
//numeros[index] será adicionado ao array numerosPares, e se o resto a divisão de numeros[index] 
//por 2 for diferente de 0, numeros[index] será adicionado ao array numerosImpares.
