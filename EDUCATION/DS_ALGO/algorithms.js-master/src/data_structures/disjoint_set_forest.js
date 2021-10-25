/**
 * Disjoint Set Forest data structure.
 * Allows fast subset merging and querying.
 * New elements lie in their own one-element subsets by default.
 *
 * @constructor
 */
class DisjointSetForest {
  constructor() {
    this._parents = {};
    this._ranks = {};
    this._sizes = {};
  }

  _introduce(element) {
    if (!(element in this._parents)) {
      this._parents[element] = element;
      this._ranks[element] = 0;
      this._sizes[element] = 1;
    }
  }

  /**
   * Check if the elements belong to the same subset.
   * Complexity: O(A^-1) (inverse Ackermann function) amortized.
   *
   * @param {...*} element
   * @return {boolean}
   */
  sameSubset(element, ...rest) {
    this._introduce(element);
    const root = this.root(element);
    return rest.every((element) => {
      this._introduce(element);
      return this.root(element) === root;
    });
  }

  /**
   * Return the root element which represents the given element's subset.
   * The result does not depend on the choice of the element,
   *   but rather on the subset itself.
   * Complexity: O(A^-1) (inverse Ackermann function) amortized.
   *
   * @param {*} element
   * @return {*}
   */
  root(element) {
    this._introduce(element);
    if (this._parents[element] !== element) {
      this._parents[element] = this.root(this._parents[element]);
    }
    return this._parents[element];
  }

  /**
   * Return the size of the given element's subset.
   * Complexity: O(A^-1) (inverse Ackermann function) amortized.
   *
   * @param {*} element
   * @return {number}
   */
  size(element) {
    this._introduce(element);
    return this._sizes[this.root(element)];
  }

  /**
   * Merge subsets containing two (or more) given elements into one.
   * Complexity: O(A^-1) (inverse Ackermann function) amortized.
   *
   * @param {*} element1
   * @param {*} element2
   * @param {...*}
   * @return {DisjointSetForest}
   */
  merge(element1, element2, ...rest) {
    if (rest.length > 0) {
      this.merge(element2, ...rest);
    }

    this._introduce(element1);
    this._introduce(element2);
    const root1 = this.root(element1);
    const root2 = this.root(element2);

    if (this._ranks[root1] < this._ranks[root2]) {
      this._parents[root1] = root2;
      this._sizes[root2] += this._sizes[root1];
    } else if (root1 !== root2) {
      this._parents[root2] = root1;
      this._sizes[root1] += this._sizes[root2];
      if (this._ranks[root1] === this._ranks[root2]) {
        this._ranks[root1] += 1;
      }
    }
    return this;
  }
}

export default DisjointSetForest;
