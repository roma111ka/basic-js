const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2 ) {
 let countDigits = 0;
 let copyS2 = s2
 for(symbol of s1){
  if (copyS2.includes(symbol)) {
    countDigits++;
    copyS2 = copyS2.replace(`${symbol}`,'');
  }
 }
 return countDigits;
}

module.exports = {
  getCommonCharacterCount
};
