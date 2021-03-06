import group from "./_group.js";

// Indexes the object's values by a criterion, similar to `_.groupBy`, but for
// when you know that your index values will be unique.
export default group(function (result, value, key) {
  result[key] = value;
});
