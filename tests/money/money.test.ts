import Dollar from '../../src/money/dollar'

test('Multiplication', () => {
  const five: Dollar = new Dollar(5)
  let product: Dollar = five.times(2)
  expect(product.amount).toEqual(10)
  product = five.times(3)
  expect(product.amount).toEqual(15)
})

test('Equality', () => {
  const fiveDollars = new Dollar(5)
  const anotherFiveDollars = new Dollar(5)
  expect(fiveDollars.equals(anotherFiveDollars)).toBeTruthy()

  const sixDollars = new Dollar(6)
  expect(fiveDollars.equals(sixDollars)).toBeFalsy()
})
