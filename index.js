const sumItems = function(array) {
  let result = 0;
  if (array.length === 0) {
    result += 0;
  } else if (! Array.isArray(array)) {
    return "Error: not an array";
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

console.log(sumItems([ 1, [2, 3, [4, 5]], 6]));

module.exports = sumItems;