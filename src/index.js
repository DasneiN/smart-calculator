class SmartCalculator {
  constructor(initialValue) {
    this.v = initialValue;
    this.lastNum = initialValue;
  }

  toString() {    
    return eval(this.v);
  }

  add(number) {
    this.v += '+' + number;
    this.lastNum = number;
    return this;
  }
  
  subtract(number) {
    this.v += '-' + number;
    this.lastNum = number;
    return this;
  }

  multiply(number) {
    this.v += '*' + number;
    this.lastNum = number;
    return this;
  }

  devide(number) {
    this.v += '/' + number;
    this.lastNum = number;
    return this;
  }

  pow(number) {
    //  Решение на 65%
    /*
    if (number > 1 ) {
      this.v = '(' + this.v + ')';
      for (let i = 0; i < number; i++) {
        this.v += '*(' + this.v + ')';
      }
    }
    */

    //  Новое решение
    let new_last_num = this.lastNum;
    for (let i = 1; i < number; i++) {
      this.v += '*' + this.lastNum;
      new_last_num += '*' + this.lastNum;
    }

    this.lastNum = new_last_num;
    
    return this;
  }
}

module.exports = SmartCalculator;
