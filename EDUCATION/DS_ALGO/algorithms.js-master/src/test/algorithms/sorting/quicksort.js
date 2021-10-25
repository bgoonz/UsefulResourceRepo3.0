const quicksort = require("../../..").Sorting.quicksort;
import sortingTestsHelper from "./sorting_tests_helper";

describe("QuickSort", () => {
  it("sorts the given array", () => {
    sortingTestsHelper.testSort(quicksort);
  });

  it("sorts the array with a specific comparison function", () => {
    sortingTestsHelper.testSortWithComparisonFn(quicksort);
  });
});
