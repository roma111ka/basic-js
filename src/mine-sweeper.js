const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper( matrix ) {
  /*let result = [];
  for (let i = 0; i < result.length; i++) {
    result[i] = matrix[i].slice();
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      let digit = 0;
      
      if (i === 0 && matrix[i] !== undefined) {
        (matrix[i][j - 1] === true && matrix[i] !== undefined) ? digit++ : (digit = digit);
        (matrix[i][j + 1] === true && matrix[i] !== undefined)? digit++ : (digit = digit);
        (matrix[i + 1][j] === true && matrix[i+1] !== undefined)? digit++ : (digit = digit);
        (matrix[i + 1][j - 1] === true && matrix[i+1] !== undefined) ? digit++ : (digit = digit);
        (matrix[i + 1][j + 1] === true && matrix[i+1] !== undefined) ? digit++ : (digit = digit);
      }
      
      else if (i === matrix.length -1) {
        (matrix[i][j - 1] === true && matrix[i] !== undefined) ? digit++ : (digit = digit);
        (matrix[i][j + 1] === true && matrix[i] !== undefined) ? digit++ : (digit = digit);
        (matrix[i - 1][j ] === true &&  matrix[i-1] !== undefined) ? digit++ : (digit = digit);
        (matrix[i - 1][j - 1] === true &&  matrix[i-1] !== undefined) ? digit++ : (digit = digit);
        (matrix[i - 1][j + 1] === true &&  matrix[i-1] !== undefined) ? digit++ : (digit = digit);
      }
      
      else if(matrix[i - 1] !== undefined) {
        (matrix[i][j - 1] === true && matrix[i] !== undefined) ? digit++ : (digit = digit);
        (matrix[i][j + 1] === true && matrix[i] !== undefined) ? digit++ : (digit = digit);
        (matrix[i - 1][j] === true && matrix[i-1] !== undefined) ? digit++ : (digit = digit);
        (matrix[i - 1][j - 1] === true && matrix[i-1] !== undefined) ? digit++ : (digit = digit);
        (matrix[i - 1][j + 1] === true && matrix[i-1] !== undefined) ? digit++ : (digit = digit);
        (matrix[i + 1][j] === true && matrix[i+1] !== undefined) ? digit++ : (digit = digit);
        (matrix[i + 1][j - 1] === true && matrix[i+1] !== undefined) ? digit++ : (digit = digit);
        (matrix[i + 1][j + 1] === true && matrix[i+1] !== undefined) ? digit++ : (digit = digit);
      }
      result[i][j] = digit;
    }
  }*/
  
    let result = [];
    for (let i = 0; i < matrix.length; i++) {
      let resline = [];
      for (let j = 0; j < matrix[i].length; j++) {
        let digit = 0;
        if (i === 0) {
          matrix[i][j - 1] === true ? digit++ : (digit = digit);
          matrix[i][j + 1] === true ? digit++ : (digit = digit);
          matrix[i + 1][j] === true ? digit++ : (digit = digit);
          matrix[i + 1][j - 1] === true ? digit++ : (digit = digit);
          matrix[i + 1][j + 1] === true ? digit++ : (digit = digit);
        }
        else if (i === matrix.length - 1) {
          matrix[i][j - 1] === true ? digit++ : (digit = digit);
          matrix[i][j + 1] === true ? digit++ : (digit = digit);
          matrix[i - 1][j] === true ? digit++ : (digit = digit);
          matrix[i - 1][j - 1] === true ? digit++ : (digit = digit);
          matrix[i - 1][j + 1] === true ? digit++ : (digit = digit);
        }
        else {
          matrix[i][j - 1] === true ? digit++ : (digit = digit);
          matrix[i][j + 1] === true ? digit++ : (digit = digit);
          matrix[i - 1][j] === true ? digit++ : (digit = digit);
          matrix[i - 1][j - 1] === true ? digit++ : (digit = digit);
          matrix[i - 1][j + 1] === true ? digit++ : (digit = digit);
          matrix[i + 1][j] === true ? digit++ : (digit = digit);
          matrix[i + 1][j - 1] === true ? digit++ : (digit = digit);
          matrix[i + 1][j + 1] === true ? digit++ : (digit = digit);
        }
        resline.push(digit);
      }
      result.push(resline);
    }
    
  return result;

}

module.exports = {
  minesweeper
};
