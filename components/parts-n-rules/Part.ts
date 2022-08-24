import Edge from "./Edge"

class Part {
  age: Number = 0
  keyProperty: string = ''
  label: string = ''
  max: Number = 0
  min: Number = 0
  properties: Map<string, object> | null = null
  style: string = ''

  getAge(): Number {
    return this.age
  }
  setAge(age: Number): void {
    this.age = age
  }
  getMax(): Number {
    return this.max
  }
  setMax(max: Number): void {
    this.max = max
  }
  getMin(): Number {
    return this.min
  }
  addMin(min: Number): void {
    this.min = min
  }
}

export default Part
