// Função em JS é First-Class Object
// higher-order function

// Se a função não rertornar nada ela sempre retornará undefined 

// criar de forma literal
function fun1() { }

// armazenar em uma variável
const subtrair = function (n1, n2) {
  return n1 - n2;
}

// armazenar em uma array
const array = [function dizerOi() { console.log(array[1]) }, 'oi', fun1, subtrair];
console.log(array)
console.log(array[3](10, 5));

// armaxenar em um objeto
const obj = {
  ehPar: ((num) => num % 2 === 0),
}
obj.sum = ((n1, n2) => n1 + n2); // arrow function
obj.sub = function (n1, n2) {
  return n1 - n2;
}

// Passar função como parâmetro para outro função
function run(fun) {
  fun();
}
run(function () {
  console.log('executei fun');
})

// Uma função pode retornar/conter uma função
function soma2(a, b) {
  return function (c) {
    return a + b + c;
  }
}
soma2(2, 5)(10); // 17
const cincoMais = soma2(2, 3); // function
cincoMais(4) // 9

// array function
const soma = ((n1, n2) => n1 + n2)