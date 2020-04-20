import Dollar from '../../src/money/dollar'

test('Multiplication', () => {
  const nomination = 5
  const numberOfTimes = 2
  const five: Dollar = new Dollar(nomination)
  five.times(numberOfTimes)
  expect(five.amount).toEqual(nomination * numberOfTimes)
})
