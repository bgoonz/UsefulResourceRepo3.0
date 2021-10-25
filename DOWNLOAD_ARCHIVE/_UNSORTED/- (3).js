const keys = (obj) => {
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys
  const newArray = [];
  for (const key in obj) {
    newArray.push(key);
  }
  return newArray;
};

const values = (obj) => {
  // Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values
  const newArray = [];
  for (const key in obj) {
    newArray.push(obj[key]);
  }
  return newArray;
};