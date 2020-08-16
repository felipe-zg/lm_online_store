export const calculateCartItemSubtotal = (integers, decimals, amount) => {
  if(!integers || !decimals || !amount) return
  const sumOfDecimals = decimals * amount
  const subtotalintegers = (String(integers).replace('.', '') * amount) + Math.floor(sumOfDecimals / 100)
  const restOfDecimals = sumOfDecimals % 100

  return `${subtotalintegers}.${restOfDecimals}`
}

export const calculateCartSubtotal = (cartItems) => {
  if(!cartItems) return
  const subtotal = cartItems.reduce((subtotal, item) => {
      if(!item.subtotal) return subtotal
      return subtotal + Number(item.subtotal)
  }, 0)
  return Number(subtotal).toFixed(2)
}

export const calculateCartTotal = (subtotal, freight) => {
  if(!subtotal || !freight) return
  return (Number(subtotal) + Number(freight)).toFixed(2)
}
