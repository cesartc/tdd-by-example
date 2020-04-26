class Money {
  protected amount: number

  constructor (amount: number) {
    this.amount = amount
  }

  equals (money: Money): boolean {
    if (money.constructor === this.constructor) {
      return this.amount === money.amount
    }
    return false
  }
}

export default Money
