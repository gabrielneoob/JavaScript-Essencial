const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

//Sem callback
let notasBaixas = [];
for (let i = 0; i < notas.length; i++) {
  if (notas[i] < 7) {
    notasBaixas.push(notas[i]);
  }
}

//Com callback
notasBaixas = notas.filter(function (nota) {
  return nota < 7.0;
})

notasBaixas = notas.filter((nota) => {
  return nota < 7.0;
})

notasBaixas = notas.filter((nota) => nota < 7);