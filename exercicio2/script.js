const taboada = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const multiplicador = prompt('Digite um numero de 1 a 10:')

if (multiplicador > 0 && multiplicador <= 10) {
  for (i in taboada) {
    console.log(multiplicador * (Number(i) + 1))
  }
} else {
  alert('Numero Invalido')
}
