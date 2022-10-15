const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  return matrix.reduce((cat, cats) => {
    return cat + cats.reduce((ear, ears) => {
      if (ears === "^^") {
        return ear + 1;
      }
      else { return ear }; 
    },0);
  },0);
}

module.exports = {
  countCats
};
