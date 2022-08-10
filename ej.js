const medallaSegunPuesto = (n) => {
  if (n === 1) {
    return 'oro'
  } else if (n === 2) {
    return 'plata'
  } else if (n === 3) {
    return 'bronce'
  } else if (n > 3) {
    return 'nada'
  }
}

console.log(medallaSegunPuesto(1))
console.log(medallaSegunPuesto(2))
console.log(medallaSegunPuesto(3))
console.log(medallaSegunPuesto(4))
console.log(medallaSegunPuesto(5))