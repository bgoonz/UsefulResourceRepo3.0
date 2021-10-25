const shellSort = require("../../..").Sorting.shellSort;
import sortingTestsHelper from "./sorting_tests_helper.js";

describe("ShellSort", () => {
  it("sorts the given array", () => {
    sortingTestsHelper.testSort(shellSort);
  });

  it("sorts the array with a specific comparison function", () => {
    sortingTestsHelper.testSortWithComparisonFn(shellSort);
  });
});
