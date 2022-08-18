const maioresPaises = ['Rússia', 'Canadá', 'China', 'EUA', 'Brasil']
for (i in maioresPaises) {
  let posicao = `${Number(i) + 1} - `
  for (pais of maioresPaises[i]) {
    posicao += `${pais}`
  }
  console.log(posicao)
}
