// extremamente importante funções anonimas
// funcoes com arrow sempre serão anonimas
// funções anonimas são funções novas q vc cria
const soma = function (x, y) {
  return x + y;
}

const imprimirResultado = function (a, b, operacao = soma) {
  console.log(operacao(a, b));
}

imprimirResultado(3, 4) // 7
imprimirResultado(3, 4, (x, y) => x * y); // 12

const pessoa = {
  falar() {
    console.log('Opa')
  }
}

pessoa.falar();