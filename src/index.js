class SmartCalculator {
  constructor(initialValue) {
    this.v = initialValue;
    this.lastNum = initialValue;
    this.lastPow = 1;
  }

  toString() {    
    return eval(this.v);
  }

  add(number) {
    this.v += '+' + number;
    this.lastNum = number;
    this.lastPow = 1;
    return this;
  }
  
  subtract(number) {
    this.v += '-' + number;
    this.lastNum = number;
    this.lastPow = 1;
    return this;
  }

  multiply(number) {
    this.v += '*' + number;
    this.lastNum = number;
    this.lastPow = 1;
    return this;
  }

  devide(number) {
    this.v += '/' + number;
    this.lastNum = number;
    this.lastPow = 1;
    return this;
  }

  pow(number) {

    //  Новое решение
    let new_last_num = this.lastNum;

    this.lastPow = number > 1 && this.lastPow ? number : false;
    
    if (this.lastPow) {
      for (let i = 1; i < number; i++) {
        this.v += '*' + this.lastNum;
        new_last_num += '*' + this.lastNum;
      }
    }

    this.lastNum = new_last_num;
    
    return this;
  }
}

module.exports = SmartCalculator;
