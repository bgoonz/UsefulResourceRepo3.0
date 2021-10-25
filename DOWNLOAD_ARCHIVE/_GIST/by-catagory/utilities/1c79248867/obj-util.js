/*
 Copyright (c) 2012, Yahoo! Inc.  All rights reserved.
 Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */

/**
 * utility methods to process coverage objects. A coverage object has the following
 * format.
 *
 *      {
 *          "/path/to/file1.js": { file1 coverage },
 *          "/path/to/file2.js": { file2 coverage }
 *      }
 *
 *  The internals of the file coverage object are intentionally not documented since
 *  it is not a public interface.
 *
 *  *Note:* When a method of this module has the word `File` in it, it will accept
 *  one of the sub-objects of the main coverage object as an argument. Other
 *  methods accept the higher level coverage object with multiple keys.
 *
 * Works on `node` as well as the browser.
 *
 * Usage on nodejs
 * ---------------
 *
 *      var objectUtils = require('istanbul').utils;
 *
 * Usage in a browser
 * ------------------
 *
 * Load this file using a `script` tag or other means. This will set `window.coverageUtils`
 * to this module's exports.
 *
 * @class ObjectUtils
 * @module main
 * @static
 */
((isNode) => {
  /**
   * adds line coverage information to a file coverage object, reverse-engineering
   * it from statement coverage. The object passed in is updated in place.
   *
   * Note that if line coverage information is already present in the object,
   * it is not recomputed.
   *
   * @method addDerivedInfoForFile
   * @static
   * @param {Object} fileCoverage the coverage object for a single file
   */
  function addDerivedInfoForFile(fileCoverage) {
    const statementMap = fileCoverage.statementMap;
    const statements = fileCoverage.s;
    let lineMap;

    if (!fileCoverage.l) {
      fileCoverage.l = lineMap = {};
      Object.keys(statements).forEach((st) => {
        const line = statementMap[st].start.line;
        let count = statements[st];
        const prevVal = lineMap[line];
        if (count === 0 && statementMap[st].skip) {
          count = 1;
        }
        if (typeof prevVal === "undefined" || prevVal < count) {
          lineMap[line] = count;
        }
      });
    }
  }
  /**
   * adds line coverage information to all file coverage objects.
   *
   * @method addDerivedInfo
   * @static
   * @param {Object} coverage the coverage object
   */
  function addDerivedInfo(coverage) {
    Object.keys(coverage).forEach((k) => {
      addDerivedInfoForFile(coverage[k]);
    });
  }
  /**
   * removes line coverage information from all file coverage objects
   * @method removeDerivedInfo
   * @static
   * @param {Object} coverage the coverage object
   */
  function removeDerivedInfo(coverage) {
    Object.keys(coverage).forEach((k) => {
      delete coverage[k].l;
    });
  }

  function percent(covered, total) {
    let tmp;
    if (total > 0) {
      tmp = (1000 * 100 * covered) / total + 5;
      return Math.floor(tmp / 10) / 100;
    } else {
      return 100.0;
    }
  }

  function computeSimpleTotals(fileCoverage, property, mapProperty) {
    const stats = fileCoverage[property];
    const map = mapProperty ? fileCoverage[mapProperty] : null;
    const ret = { total: 0, covered: 0, skipped: 0 };

    Object.keys(stats).forEach((key) => {
      const covered = !!stats[key];
      const skipped = map && map[key].skip;
      ret.total += 1;
      if (covered || skipped) {
        ret.covered += 1;
      }
      if (!covered && skipped) {
        ret.skipped += 1;
      }
    });
    ret.pct = percent(ret.covered, ret.total);
    return ret;
  }

  function computeBranchTotals(fileCoverage) {
    const stats = fileCoverage.b;
    const branchMap = fileCoverage.branchMap;
    const ret = { total: 0, covered: 0, skipped: 0 };

    Object.keys(stats).forEach((key) => {
      const branches = stats[key];
      const map = branchMap[key];
      let covered;
      let skipped;
      let i;
      for (i = 0; i < branches.length; i += 1) {
        covered = branches[i] > 0;
        skipped = map.locations && map.locations[i] && map.locations[i].skip;
        if (covered || skipped) {
          ret.covered += 1;
        }
        if (!covered && skipped) {
          ret.skipped += 1;
        }
      }
      ret.total += branches.length;
    });
    ret.pct = percent(ret.covered, ret.total);
    return ret;
  }
  /**
   * returns a blank summary metrics object. A metrics object has the following
   * format.
   *
   *      {
   *          lines: lineMetrics,
   *          statements: statementMetrics,
   *          functions: functionMetrics,
   *          branches: branchMetrics
   *          linesCovered: lineCoveredCount
   *      }
   *
   *  Each individual metric object looks as follows:
   *
   *      {
   *          total: n,
   *          covered: m,
   *          pct: percent
   *      }
   *
   * @method blankSummary
   * @static
   * @return {Object} a blank metrics object
   */
  function blankSummary() {
    return {
      lines: {
        total: 0,
        covered: 0,
        skipped: 0,
        pct: "Unknown",
      },
      statements: {
        total: 0,
        covered: 0,
        skipped: 0,
        pct: "Unknown",
      },
      functions: {
        total: 0,
        covered: 0,
        skipped: 0,
        pct: "Unknown",
      },
      branches: {
        total: 0,
        covered: 0,
        skipped: 0,
        pct: "Unknown",
      },
      linesCovered: {},
    };
  }
  /**
   * returns the summary metrics given the coverage object for a single file. See `blankSummary()`
   * to understand the format of the returned object.
   *
   * @method summarizeFileCoverage
   * @static
   * @param {Object} fileCoverage the coverage object for a single file.
   * @return {Object} the summary metrics for the file
   */
  function summarizeFileCoverage(fileCoverage) {
    const ret = blankSummary();
    addDerivedInfoForFile(fileCoverage);
    ret.lines = computeSimpleTotals(fileCoverage, "l");
    ret.functions = computeSimpleTotals(fileCoverage, "f", "fnMap");
    ret.statements = computeSimpleTotals(fileCoverage, "s", "statementMap");
    ret.branches = computeBranchTotals(fileCoverage);
    ret.linesCovered = fileCoverage.l;
    return ret;
  }
  /**
   * merges two instances of file coverage objects *for the same file*
   * such that the execution counts are correct.
   *
   * @method mergeFileCoverage
   * @static
   * @param {Object} first the first file coverage object for a given file
   * @param {Object} second the second file coverage object for the same file
   * @return {Object} an object that is a result of merging the two. Note that
   *      the input objects are not changed in any way.
   */
  function mergeFileCoverage(first, { s, f, b }) {
    const ret = JSON.parse(JSON.stringify(first));
    let i;

    delete ret.l; //remove derived info

    Object.keys(s).forEach((k) => {
      ret.s[k] += s[k];
    });
    Object.keys(f).forEach((k) => {
      ret.f[k] += f[k];
    });
    Object.keys(b).forEach((k) => {
      const retArray = ret.b[k];
      const secondArray = b[k];
      for (i = 0; i < retArray.length; i += 1) {
        retArray[i] += secondArray[i];
      }
    });

    return ret;
  }
  /**
   * merges multiple summary metrics objects by summing up the `totals` and
   * `covered` fields and recomputing the percentages. This function is generic
   * and can accept any number of arguments.
   *
   * @method mergeSummaryObjects
   * @static
   * @param {Object} summary... multiple summary metrics objects
   * @return {Object} the merged summary metrics
   */
  function mergeSummaryObjects() {
    const ret = blankSummary();
    const args = Array.prototype.slice.call(arguments);
    const keys = ["lines", "statements", "branches", "functions"];

    const increment = (obj) => {
      if (obj) {
        keys.forEach((key) => {
          ret[key].total += obj[key].total;
          ret[key].covered += obj[key].covered;
          ret[key].skipped += obj[key].skipped;
        });

        // keep track of all lines we have coverage for.
        Object.keys(obj.linesCovered).forEach((key) => {
          if (!ret.linesCovered[key]) {
            ret.linesCovered[key] = obj.linesCovered[key];
          } else {
            ret.linesCovered[key] += obj.linesCovered[key];
          }
        });
      }
    };

    args.forEach((arg) => {
      increment(arg);
    });
    keys.forEach((key) => {
      ret[key].pct = percent(ret[key].covered, ret[key].total);
    });

    return ret;
  }
  /**
   * returns the coverage summary for a single coverage object. This is
   * wrapper over `summarizeFileCoverage` and `mergeSummaryObjects` for
   * the common case of a single coverage object
   * @method summarizeCoverage
   * @static
   * @param {Object} coverage  the coverage object
   * @return {Object} summary coverage metrics across all files in the coverage object
   */
  function summarizeCoverage(coverage) {
    const fileSummary = [];
    Object.keys(coverage).forEach((key) => {
      fileSummary.push(summarizeFileCoverage(coverage[key]));
    });
    return mergeSummaryObjects(...fileSummary);
  }

  /**
   * makes the coverage object generated by this library yuitest_coverage compatible.
   * Note that this transformation is lossy since the returned object will not have
   * statement and branch coverage.
   *
   * @method toYUICoverage
   * @static
   * @param {Object} coverage The `istanbul` coverage object
   * @return {Object} a coverage object in `yuitest_coverage` format.
   */
  function toYUICoverage(coverage) {
    const ret = {};

    addDerivedInfo(coverage);

    Object.keys(coverage).forEach((k) => {
      const fileCoverage = coverage[k];
      const lines = fileCoverage.l;
      const functions = fileCoverage.f;
      const fnMap = fileCoverage.fnMap;
      let o;

      o = ret[k] = {
        lines: {},
        calledLines: 0,
        coveredLines: 0,
        functions: {},
        calledFunctions: 0,
        coveredFunctions: 0,
      };
      Object.keys(lines).forEach((k) => {
        o.lines[k] = lines[k];
        o.coveredLines += 1;
        if (lines[k] > 0) {
          o.calledLines += 1;
        }
      });
      Object.keys(functions).forEach((k) => {
        const name = `${fnMap[k].name}:${fnMap[k].line}`;
        o.functions[name] = functions[k];
        o.coveredFunctions += 1;
        if (functions[k] > 0) {
          o.calledFunctions += 1;
        }
      });
    });
    return ret;
  }

  /**
   * Creates new file coverage object with incremented hits count
   * on skipped statements, branches and functions
   *
   * @method incrementIgnoredTotals
   * @static
   * @param {Object} cov File coverage object
   * @return {Object} New file coverage object
   */
  function incrementIgnoredTotals(cov) {
    //TODO: This may be slow in the browser and may break in older browsers
    //      Look into using a library that works in Node and the browser
    const fileCoverage = JSON.parse(JSON.stringify(cov));

    [
      { mapKey: "statementMap", hitsKey: "s" },
      { mapKey: "branchMap", hitsKey: "b" },
      { mapKey: "fnMap", hitsKey: "f" },
    ].forEach(({ mapKey, hitsKey }) => {
      Object.keys(fileCoverage[mapKey]).forEach((key) => {
        const map = fileCoverage[mapKey][key];
        const hits = fileCoverage[hitsKey];

        if (mapKey === "branchMap") {
          const locations = map.locations;

          locations.forEach(({ skip }, index) => {
            if (hits[key][index] === 0 && skip) {
              hits[key][index] = 1;
            }
          });

          return;
        }

        if (hits[key] === 0 && map.skip) {
          hits[key] = 1;
        }
      });
    });

    return fileCoverage;
  }

  const exportables = {
    addDerivedInfo,
    addDerivedInfoForFile,
    removeDerivedInfo,
    blankSummary,
    summarizeFileCoverage,
    summarizeCoverage,
    mergeFileCoverage,
    mergeSummaryObjects,
    toYUICoverage,
    incrementIgnoredTotals,
  };

  /* istanbul ignore else: windows */
  if (isNode) {
    module.exports = exportables;
  } else {
    window.coverageUtils = exportables;
  }
})(
  typeof module !== "undefined" &&
    typeof module.exports !== "undefined" &&
    typeof exports !== "undefined"
);
