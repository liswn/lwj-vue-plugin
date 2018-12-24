const currencyFormat = (amount = 0, unit = '', position = 'prefix') => {
  amount = parseFloat(amount)
  amount = amount.toFixed(2)
  amount = `${amount}`
  amount = amount.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  return ((position === 'suffix') ? `${amount}${unit}` : `${unit}${amount}`)
}
export default currencyFormat
