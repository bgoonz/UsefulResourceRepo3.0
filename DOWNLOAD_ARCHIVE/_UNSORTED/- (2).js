const flatten = (elements) => {
  const newArray = [];
  for (let i = 0; i < elements.length; i++) {
    for (let j = 0; j < elements[i].length; j++) {
      newArray.push(elements[i][j]);
    }
  }
  return newArray;
};