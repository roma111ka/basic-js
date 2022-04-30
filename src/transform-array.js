const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform( arr ) {
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }

  const tranformArr = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--double-next':
        tranformArr.push(arr[i + 1]);
        break;
      case '--double-prev':
        tranformArr.push(tranformArr[tranformArr.length - 1]);
        break;
      case '--discard-next':
        tranformArr.push(undefined);
        i++;
      break;
      case '--discard-prev':
        tranformArr.pop();
        break;
      default:
        tranformArr.push(arr[i]);
    }
  }
  return tranformArr.filter(function (el) {
    return el !== undefined;
  });
}

module.exports = {
  transform
};
