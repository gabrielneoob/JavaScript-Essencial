// OO
const pessoa = {
  saudacao: 'Bom dia!',
  falar() {
    console.log('this ->', this);
    console.log(this.saudacao);
  }
}

const falar = pessoa.falar;
falar() // conflito entre paradigmas: funcional e OO

// usando o bind
// bind vc passa um objeto
// bind serve para amarrar um determinado objeto para ele ser o dono do objeto
// bind n altera a função original

const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa();


function Pessoa() {
  this.idade = 0;

  const self = this;
  setInterval(function () {
    this.idade++
    console.log(this.idade);
  }/* .bind(this)*/, 1000) // dispara outra função a partir de um determinado intervalo que vc passou
}

new Pessoa
