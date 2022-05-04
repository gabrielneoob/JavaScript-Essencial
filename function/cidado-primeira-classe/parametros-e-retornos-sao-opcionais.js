// Parâmetros e retornos sao opcionais

function sum(a, b) {
  return a + b;
}
// só irá passar os dois primeiros parâmetros abaixo;
sum(5, 5, 10, 10, 100) // 10


function area(largura, altura) {
  const area = largura * altura;
  if (area > 20) {
    console.log(`Valor acima do permitido: ${area}m2.`);
  } else {
    return area;
  }
}

area(2, 2); // 4
area(2); // NaN
area(); // NaN
area(2, 3, 10, 20, 1000, 44); // 6
area(5, 5) // return -> undefined