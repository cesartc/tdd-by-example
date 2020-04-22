class Franc {
  private amount: number
  constructor (amount: number) {
    this.amount = amount
  }

  times (multiplier: number): Franc {
    return new Franc(this.amount * multiplier)
  }

  equals (anotherFranc: Franc): boolean {
    return this.amount === anotherFranc.amount
  }
}

export default Franc
