export const calculateCartItemSubtotal = (integers, decimals, amount) => {
  const sumOfDecimals = decimals * amount
  const subtotalintegers = (integers.replace('.', '') * amount) + Math.floor(sumOfDecimals / 100)
  const restOfDecimals = sumOfDecimals % 100

  return `${subtotalintegers}.${restOfDecimals}`
}

export const calculateCartSubtotal = (cartItems) => {
  var cartSubtotal = cartItems.reduce((subtotal, item) => {
      return subtotal + Number(item.subtotal);
  }, 0);
  return cartSubtotal
}

export const calculateCartTotal = (subtotal, freight) => subtotal + freight
