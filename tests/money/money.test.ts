import Dollar from '../../src/money/dollar'
import Franc from '../../src/money/franc'

test('Multiplication', () => {
  const five: Dollar = new Dollar(5)
  expect(five.times(2).equals(new Dollar(10))).toBeTruthy()
  expect(five.times(3).equals(new Dollar(15))).toBeTruthy()
})

test('Equality', () => {
  const fiveDollars = new Dollar(5)
  const anotherFiveDollars = new Dollar(5)
  expect(fiveDollars.equals(anotherFiveDollars)).toBeTruthy()
  const sixDollars = new Dollar(6)
  expect(fiveDollars.equals(sixDollars)).toBeFalsy()

  expect(new Franc(5).equals(new Franc(5))).toBeTruthy()
  expect(new Franc(5).equals(new Franc(6))).toBeFalsy()

  expect(new Franc(5).equals(new Dollar(5))).toBeFalsy()
})

test('Franc multiplication', () => {
  const five: Franc = new Franc(5)
  expect(five.times(2).equals(new Franc(10))).toBeTruthy()
  expect(five.times(3).equals(new Franc(15))).toBeTruthy()
})
