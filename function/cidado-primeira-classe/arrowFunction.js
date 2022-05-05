// função normal
let dobro = function (a) {
  return a * 2;
};

// arrow function
dobro = (a) => {
  return 2 * a;
}

dobro = (a) => 2 * a; // return está implicito
dobro(10) // 20;


let ola = function () {
  return 'Olá';
}

ola = () => 'Oláá';

// this dentro de uma arrow function é fixo
function Pessoa() {
  this.idade = 0;

  setInterval(() => {
    this.idade++
    console.log(this.idade)
  }, 1000);
}

new Pessoa