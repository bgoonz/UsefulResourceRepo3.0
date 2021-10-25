class DiffPercentage {
  constructor(period = 200) { // change
    this.in = [];
    this.out = [];
    this.period = period;
  }

  update(data) {
    if(typeof data === 'undefined') { }
    else if(Array.isArray(data)) {
      const newDiffPercentage = data.map(this.getDiffPercentage, this);
      this.out = this.out.concat(newDiffPercentage);
    } else {
      const newDiffPercentage = this.getDiffPercentage(data);
      this.out.push(newDiffPercentage);
    }

    return this.out;
  }

  getDiffPercentage(currentValue) {
    this.in.push(currentValue);

    const index = this.in.length;
    const period = this.period;

    if(index < 2) { return null; }

    const previousValue = this.in[index - 2];
    const delta = currentValue - previousValue;
    const percentage = delta / previousValue;

    // rotate arrays
    if(index > period) {
      this.in.shift();
      this.out.shift();
    }

    return percentage;
  }

}

module.exports = DiffPercentage;