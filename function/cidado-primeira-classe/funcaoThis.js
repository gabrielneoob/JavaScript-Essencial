// this

function f1() {
  console.log(this);
  console.log(this === window);
  return this === window
}
// this aponta para window abaixo
f1() // true
// this é o objeto que esta sendo referenciado no contexto
// this no JS pode variar

// this aqui é o h1
const h1 = document.querySelector('h1');
h1.onclick = f1; // false quando clicar

// this em um function arrow fica com o contexto lexico


