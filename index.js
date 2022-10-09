const sumItems = function(array) {
  let result = 0;
  if (! Array.isArray(array)) {
    return "Error: not an array";
  } else if (array.length === 0) {
    result += 0;
  } else {
    for (let item of array) {
      if (! Array.isArray(item)) {
        result += Number(item);
      } else {
        result += Number(sumItems(item));
      }
    }
  }

  return result;
};

module.exports = sumItems;