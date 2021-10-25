const heapSort = require("../../..").Sorting.heapSort;
import sortingTestsHelper from "./sorting_tests_helper";

describe("Heap Sort", () => {
  it("sorts the given array", () => {
    sortingTestsHelper.testSort(heapSort);
  });

  it("sorts the array with a specific comparison function", () => {
    sortingTestsHelper.testSortWithComparisonFn(heapSort);
  });
});
