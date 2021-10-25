export default (sort, algorithmName, options) => {
  "use strict";

  options = options || {
    integers: false,
    reverse: true,
  };

  describe(algorithmName, () => {
    function createRandomArray(config = {}) {
      const size = config.size || 100;
      const precision = config.precision || 2;
      const multiplier = config.multiplier || 100;
      const result = [];

      for (let i = size; i > 0; i -= 1) {
        result.push(
          parseFloat((Math.random() * multiplier).toFixed(precision))
        );
      }
      return result;
    }

    it("should work with empty array", () => {
      expect(sort([])).toEqual([]);
    });

    it("should work with sorted arrays", () => {
      expect(sort([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
    });

    it("should work with random non-sorted arrays", () => {
      let array;
      if (options.integers) {
        array = createRandomArray();
      } else {
        array = createRandomArray({
          precision: 0,
        });
      }
      array = sort(array);
      for (let i = 0; i < array.length - 1; i += 1) {
        expect(array[i] <= array[i + 1]).toBeTruthy();
      }
    });

    if (options.reverse) {
      it(
        "should sort the numbers in descending order " +
          "when such comparator is provided",
        () => {
          function comparator(a, b) {
            return b - a;
          }

          let array = createRandomArray();
          array = sort(array, comparator);

          for (let i = 0; i < array.length - 1; i += 1) {
            expect(array[i] >= array[i + 1]).toBeTruthy();
          }
        }
      );
    }
  });
};
