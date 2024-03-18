class Calculator {
  Calculator() {
    this.result = 0;
  }
  add(a) {
    this.result += a;
  }
  subtract(b) {
    this.result -= b;
  }
  multiply(c) {
    this.result *= c;
  }
  divide(d) {
    if (d !== 0) {
      this.result /= d;
    }
  }
  clear() {
    this.result = 0;
  }
  getResult() {
    return this.result;
  }
  calculate(str) {
    this.clear();
    str = str.replace("/s/g", ""); // removes all white space

    let res = eval(str);
    if (isNaN(res) || !isFinite(res)) {
      throw new error("Not calculated");
    }
    return (this.result = res);
  }
}
