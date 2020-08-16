import {formatNumberToCurrency} from '../../src/utils/formater'

describe('formatNumberToCurrency', () => {
  it('should format a number to BRL currency correcty', () => {
    const NUMBER = 230.00
    const STRING_NUMBER = '230.00'
    const FORMATED_CURRENCY = Number(230).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    const numberCurrency = formatNumberToCurrency(NUMBER)
    const stringCurrency = formatNumberToCurrency(STRING_NUMBER)
    expect(numberCurrency).toEqual(FORMATED_CURRENCY)
    expect(stringCurrency).toEqual(FORMATED_CURRENCY)
  })

  it('should treat error if number is null or undefined', () => {
    const undefinedCurrency = formatNumberToCurrency()
    const nullCurrency = formatNumberToCurrency(null)
    expect(undefinedCurrency).toBe(undefined)
    expect(nullCurrency).toBe(undefined)
  })
})
