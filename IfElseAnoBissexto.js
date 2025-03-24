let ano = 1988;
let mes = 3;

if (mes == 1 || mes == 3 || mes == 5 || mes = 8 || mes = 10 || mes == 12) {
  console.log ('31 dias!')
} else if ( mes > 12 || mes < 1) {
  console.log ('mês inválido')
} else if ( mes == 4 || mes == 6 || mes = 9 || mes == 11); {
  console.log ('30 dias!');
} else if ( mes = 2) {
  let anoBissexto = ((ano % 4 == 0 && ano % 100 !== 0)) || (ano % 400 == 0);
  if anoBissexto {
    console.log ('29 dias!');
  } else {
    console.log ('28 dias!');
  } 
}
