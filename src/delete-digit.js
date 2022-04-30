const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let strNumber = String(n)
  let arr = ('' + n).split('').map(Number)
  if (strNumber.length === 2) {
    return Math.max(...arr)
  }
  for (i = 0; i < strNumber.length; i++) {

    if (+strNumber[i] < +strNumber[i + 1]) {
      return +(('' + n).replace(+strNumber[i], ''))
    }
  }
}

module.exports = {
  deleteDigit
};
