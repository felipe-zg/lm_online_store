export const formatNumberToCurrency = (number) => {
  return Number(number)
    .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}
