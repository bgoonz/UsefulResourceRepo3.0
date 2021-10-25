const bubbleSort = require("../../..").Sorting.bubbleSort;
import sortingTestsHelper from "./sorting_tests_helper";

describe("Bubble Sort", () => {
  it("sorts the given array", () => {
    sortingTestsHelper.testSort(bubbleSort);
  });

  it("sorts the array with a specific comparison function", () => {
    sortingTestsHelper.testSortWithComparisonFn(bubbleSort);
  });
});
