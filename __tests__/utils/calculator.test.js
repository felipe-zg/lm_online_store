import {calculateCartItemSubtotal, calculateCartSubtotal, calculateCartTotal} from '../../src/utils/calculator'

describe('calculateCartItemSubtotal', () => {
  it('should calculate the cart item subtotal correctly', () => {
    const ITEM_PRICE_INTEGERS = '173'
    const ITEM_PRICE_DECIMALS = '39'
    const ITEM_AMOUNT = '3'
    const ITEM_SUBTOTAL = '520.17'
    const subtotal = calculateCartItemSubtotal(ITEM_PRICE_INTEGERS, ITEM_PRICE_DECIMALS, ITEM_AMOUNT)
    expect(subtotal).toEqual(ITEM_SUBTOTAL)
  })

  it('should treat error if null is passed as argument', () => {
    const returnedValueWithItemPriceIntegersAsNull = calculateCartItemSubtotal(null, '99', '2')
    const returnedValueWithItemPriceDecimalsAsNull = calculateCartItemSubtotal('27', null, '2')
    const returnedValueWithItemAmountsAsNull = calculateCartItemSubtotal('27', '99', null)
    expect(returnedValueWithItemPriceIntegersAsNull).toBe(undefined)
    expect(returnedValueWithItemPriceDecimalsAsNull).toBe(undefined)
    expect(returnedValueWithItemAmountsAsNull).toBe(undefined)
  })

  it('should treat error if any argument is not passed', () => {
    const returnedValueWithZeroParameters = calculateCartItemSubtotal()
    const returnedValueWithOneParameters = calculateCartItemSubtotal('27')
    const returnedValueWithTwoParameters = calculateCartItemSubtotal('27', '99')
    expect(returnedValueWithZeroParameters).toBe(undefined)
    expect(returnedValueWithOneParameters).toBe(undefined)
    expect(returnedValueWithTwoParameters).toBe(undefined)
  })

  it('should treat error if any of the string parameters is passed as other primitive type', () => {
    const ITEM_PRICE_INTEGERS = '173'
    const ITEM_PRICE_DECIMALS = '39'
    const ITEM_AMOUNT = '3'
    const ITEM_SUBTOTAL = '520.17'
    const returnedValueWithItemPriceIntegersAsNumber = calculateCartItemSubtotal(Number(ITEM_PRICE_INTEGERS), ITEM_PRICE_DECIMALS, ITEM_AMOUNT)
    const returnedValueWithItemPriceDecimalsAsNumber = calculateCartItemSubtotal(ITEM_PRICE_INTEGERS, Number(ITEM_PRICE_DECIMALS), ITEM_AMOUNT)
    const returnedValueWithItemAmountAsNumber = calculateCartItemSubtotal(ITEM_PRICE_INTEGERS, ITEM_PRICE_DECIMALS, Number(ITEM_AMOUNT))
    expect(returnedValueWithItemPriceIntegersAsNumber).toEqual(ITEM_SUBTOTAL)
    expect(returnedValueWithItemPriceDecimalsAsNumber).toEqual(ITEM_SUBTOTAL)
    expect(returnedValueWithItemAmountAsNumber).toEqual(ITEM_SUBTOTAL)
  })
})


describe('calculateCartSubtotal', () => {
  it('should calculate cart subtotal correctly', () => {
    const CART_ITEMS = [
      {
        info: {},
        subtotal: '229.90'
      },
      {
        info: {},
        subtotal: '87.95'
      },
      {
        info: {},
        subtotal: '339.33'
      },
    ]
    const CART_SUBTOTAL = '657.18'
    const cartSubtotal = calculateCartSubtotal(CART_ITEMS)
    expect(cartSubtotal).toEqual(CART_SUBTOTAL)
  })

  it('should return 0.00 if cartItems is empty', () => {
    const cartSubtotal = calculateCartSubtotal([])
    expect(cartSubtotal).toEqual('0.00')
  })

  it('should treat error if cartItem is undefined or null', () => {
    const cartSubtotal = calculateCartSubtotal()
    expect(cartSubtotal).toBe(undefined)
  })

  it('should treat error if cartItem subtotal is null or undefined', () => {
    const CART_ITEMS = [
      {
        info: {},
        subtotal: undefined
      },
      {
        info: {},
        subtotal: null
      },
      {
        info: {},
        subtotal: '339.33'
      },
    ]
    const CART_SUBTOTAL = '339.33'
    const cartSubtotal = calculateCartSubtotal(CART_ITEMS)
    expect(cartSubtotal).toEqual(CART_SUBTOTAL)
  })

  it('should treat error if cartItem subtotal is empty', () => {
    const CART_ITEMS = [
      {
        info: {},
        subtotal: ''
      },
      {
        info: {},
        subtotal: ''
      },
      {
        info: {},
        subtotal: '339.33'
      },
    ]
    const CART_SUBTOTAL = '339.33'
    const cartSubtotal = calculateCartSubtotal(CART_ITEMS)
    expect(cartSubtotal).toEqual(CART_SUBTOTAL)
  })

  it('should treat error if cartItem subtotal is not a string', () => {
    const CART_ITEMS = [
      {
        info: {},
        subtotal: '223.75'
      },
      {
        info: {},
        subtotal: 270.87
      },
      {
        info: {},
        subtotal: '22.99'
      },
    ]
    const CART_SUBTOTAL = '517.61'
    const cartSubtotal = calculateCartSubtotal(CART_ITEMS)
    expect(cartSubtotal).toEqual(CART_SUBTOTAL)
  })
})


describe('calculateCartTotal', () => {
  it('should calculate cart subtotal correctly', () => {
    const CART_SUBTOTAL = '230.00'
    const FREIGHT = '10.00'
    const TOTAL = '240.00'
    const total = calculateCartTotal(CART_SUBTOTAL, FREIGHT)
    expect(total).toEqual(TOTAL)
  })

  it('it should treate error if any parameter is missing or null', () => {
    const totalWithoutParameters = calculateCartTotal()
    const totalWithOneParameter = calculateCartTotal('220.00')
    const totalWithNullSubtotal = calculateCartTotal(null, '10.00')
    const totalWithNullFreight = calculateCartTotal('220.00', null)
    expect(totalWithoutParameters).toBe(undefined)
    expect(totalWithOneParameter).toBe(undefined)
    expect(totalWithNullSubtotal).toBe(undefined)
    expect(totalWithNullFreight).toBe(undefined)
  })
})
