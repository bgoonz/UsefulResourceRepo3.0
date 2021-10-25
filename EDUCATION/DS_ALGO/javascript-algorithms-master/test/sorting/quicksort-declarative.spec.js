import sortTestCase from "./sort.testcase.js";
import { quickSort } from "../../src/sorting/quicksort-declarative.js";

sortTestCase(quickSort, "Quick sort");
