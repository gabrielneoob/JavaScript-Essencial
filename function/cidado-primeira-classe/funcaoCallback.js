// callBacks
const fabricantes = ['Mercedes', 'Audi', 'BMW'];

function imprimir(nome, indice) {
  console.log(`${indice + 1}. ${nome}`);
}

fabricantes.forEach((item, index) => {
  imprimir(item, index);
})

fabricantes.forEach(imprimir/*callBack */);


const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];
