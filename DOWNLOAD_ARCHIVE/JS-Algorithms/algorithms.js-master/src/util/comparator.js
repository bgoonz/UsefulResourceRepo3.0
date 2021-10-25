/**
 * Initialize the comparator object with a compare function
 *
 * If the function is not passed, it will use the default
 * compare signs (<, > and ==)
 *
 * @param { Function } compareFn
 */
class Comparator {
  constructor(compareFn) {
    if (compareFn) {
      this.compare = compareFn;
    }
  }

  /**
   * Default implementation for the compare function
   */
  compare(a, b) {
    if (a === b) return 0;
    return a < b ? -1 : 1;
  }

  lessThan(a, b) {
    return this.compare(a, b) < 0;
  }

  lessThanOrEqual(a, b) {
    return this.lessThan(a, b) || this.equal(a, b);
  }

  greaterThan(a, b) {
    return this.compare(a, b) > 0;
  }

  greaterThanOrEqual(a, b) {
    return this.greaterThan(a, b) || this.equal(a, b);
  }

  equal(a, b) {
    return this.compare(a, b) === 0;
  }

  /**
   * Reverse the comparison function to use the opposite logic, e.g:
   * this.compare(a, b) => 1
   * this.reverse();
   * this.compare(a, b) => -1
   */
  reverse() {
    const originalCompareFn = this.compare;
    this.compare = (a, b) => originalCompareFn(b, a);
  }
}

export default Comparator;
