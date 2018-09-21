class SmartCalculator {
  constructor(initialValue) {
    this.v = initialValue;
  }

  toString() {
    return eval(this.v);
  }

  add(number) {
    this.v += '+' + number;
    return this;
  }
  
  subtract(number) {
    this.v += '-' + number;
    return this;
  }

  multiply(number) {
    this.v += '*' + number;
    return this;
  }

  devide(number) {
    this.v += '/' + number;
    return this;
  }

  pow(number) {
    for (let i = 1; i < number; i++) {
      this.v = 'Math.pow('+ this.v +', ' + number + ')';
    }
    return this;
  }
}

module.exports = SmartCalculator;
