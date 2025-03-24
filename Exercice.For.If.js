const coresMarcelo = ['azul', 'vermelho', 'preto', 'rosa', 'dourado', 'verde', 'cinza'];
const coresJulia = ['branco', 'marrom', 'rosa', 'dourado', 'verde', 'cinza'];

let contador = 0;

for (let indexJ = 0; indexJ < coresJulia.length; indexJ = indexJ + 1) {
  for (let indexM = 0; indexM < coresMarcelo.length; indexM = indexM + 1) {
    if (coresJulia[indexJ] === coresMarcelo[indexM]) {
      contador = contador + 1;
    }
  }
}
console.log(contador);

// Para cada repetição do primeiro for, o segundo for irá percorrer todo o array coresMarcelo e, 
//através do if, irá comparar se coresJulia[indexJ] é estritamente igual (===) a coresMarcelo[indexM]. 
//Caso a condição seja satisfeita, o contador irá incrementar em 1.
