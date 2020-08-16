export const formatNumberToCurrency = (number) => {
  if(!number) return
  return Number(number)
    .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}
