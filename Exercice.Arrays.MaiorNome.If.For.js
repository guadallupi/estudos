const nomes = ['João', 'Lucas', 'Juliana', 'Amanda', 'Guilherme'];
let maiorNome = '';

for (let index = 0; index < nomes.length; index = index + 1) {
  if (nomes[index].length > maiorNome.length) {
    maiorNome = nomes[index];
  }
}
//a estrutura de repetição irá percorrer o array de nomes e SE nomes[index].length, ou seja,
// o comprimento do nome no index atual for maior que maiorNome.length, o valor de nomes[index] será atribuido a maiorNome.
