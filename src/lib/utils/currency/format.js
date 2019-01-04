const currencyFormat = (amount = 0, {
  unit = '',
  places = 2,
  position = 'prefix'
}) => {
  amount = parseFloat(amount)
  amount = amount.toFixed(places)
  amount = `${amount}`
  amount = amount.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  return ((position === 'suffix') ? `${amount}${unit}` : `${unit}${amount}`)
}
export default currencyFormat
