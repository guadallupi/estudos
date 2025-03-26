function imprimeSaudacao(nome, sobrenome, idade) {
  const saudacao = 'Olá, ' + nome + ' ' + sobrenome + '!';
  const exibeIdade = 'Você tem ' + idade + ' anos.';

  return saudacao + ' ' + exibeIdade;
}

const nomeDaPessoa = 'Ana';
const sobrenomeDaPessoa = 'Santos';

console.log(imprimeSaudacao(nomeDaPessoa, sobrenomeDaPessoa, 25));

//imprime: Olá, Ana Santos! Você tem 25 anos.

console.log(imprimeSaudacao('Alberto', 'Torres', 85));

// imprime: Olá, Alberto Torres! Você tem 85 anos. 

console.log(imprimeSaudacao('Sandra', 'Cardoso', 58));

//imprime: Olá, Sandra Cardoso! Você tem 58 anos.

function calculaDespesa(luz, internet) {
  const despesaTotal = luz + internet;
  return 'Esse mês, a despesa foi de : R$ ' + despesaTotal;
}
console.log(calculaDespesa(200, 150));
//imprime: Esse mês, a despesa foi de : R$ 350
