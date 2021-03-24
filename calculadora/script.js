primeiroValor = parseInt(prompt('primeiro valor'))
segundoValor = parseInt(prompt('segundovalor'))




var operacao = prompt(' 1 - divisao , 2- multiplicacao , 3-subtracao , 4-adicao')

switch (operacao){
  case '1':
    document.write  ('<h2>' + primeiroValor + '/' + segundoValor + '='+ (primeiroValor/segundoValor) +  '</h2>');
    break;
     case '2':
    document.write  ('<h2>' + primeiroValor + '*' + segundoValor + '='+ (primeiroValor*segundoValor) +  '</h2>');
    break;
     case '3':
    document.write  ('<h2>' + primeiroValor + '-' + segundoValor + '='+ (primeiroValor-segundoValor) +  '</h2>');
    break;
     case '4':
    document.write  ('<h2>' + primeiroValor + '+' + segundoValor + '='+ (primeiroValor+segundoValor) +  '</h2>');
    break;
  default:
      console.log(`<h2> operação escolhida não listada. Escolha entre:' ${operacao}.` +  '</h2>');
}

