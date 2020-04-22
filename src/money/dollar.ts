class Dollar {
  private amount: number
  constructor (amount: number) {
    this.amount = amount
  }

  times (multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier)
  }

  equals (anotherDollar: Dollar): boolean {
    return this.amount === anotherDollar.amount
  }
}

export default Dollar
