let comparaComThis = function (param) {
  console.log(this === param);
}
comparaComThis(globalThis) // true

const obj = {}
comparaComThis = comparaComThis.bind(obj);
comparaComThis(globalThis) // false
comparaComThis(obj) // true