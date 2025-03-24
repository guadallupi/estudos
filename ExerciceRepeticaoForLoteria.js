const numerosApostados = [2, 5, 10, 22, 36, 43, 49, 55];
const numerosPremiados = [3, 7, 20, 22, 36, 49];

for(let index = 0; index < numerosApostados.length; index += 1) {
  for(let indexPremiado = 0; indexPremiado < numerosPremiados.length; indexPremiado += 1) {
    if(numerosApostados[index] === numerosPremiados[indexPremiado]) {
      console.log(numerosApostados[index]);
    } 
  }
} 

// imprime = 22, 36, 49
