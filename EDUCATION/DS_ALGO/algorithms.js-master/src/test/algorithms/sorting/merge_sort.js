const mergeSort = require("../../..").Sorting.mergeSort;
import sortingTestsHelper from "./sorting_tests_helper";

describe("Merge Sort", () => {
  it("sorts the given array", () => {
    sortingTestsHelper.testSort(mergeSort);
  });

  it("sorts the array with a specific comparison function", () => {
    sortingTestsHelper.testSortWithComparisonFn(mergeSort);
  });
});
