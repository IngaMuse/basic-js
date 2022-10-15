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
function transform(arr) {
    if (Array.isArray(arr)) {
      cloneArr = arr.slice(0);
      cloneArr.forEach((element, i) => {
        if (element === "--discard-next") {
          if (cloneArr[i + 2] === "--double-prev" || cloneArr[i + 2] === "--discard-prev") {
            cloneArr.splice(i, 3);
          } else {
            cloneArr[i + 1] ? cloneArr.splice(i, 2) : cloneArr.splice(i, 1);
          }
        } else if (element === "--discard-prev") {
          i == 0 ? cloneArr.splice(i, 1) : cloneArr.splice(i - 1, 2);
        } else if (element === "--double-next") {
          cloneArr[i + 1] ? cloneArr.splice(i, 1, cloneArr[i + 1]) : cloneArr.splice(i, 1);
        } else if (element === "--double-prev") {
          i == 0 ? cloneArr.splice(i, 1) : cloneArr.splice(i, 1, cloneArr[i - 1]);
        }
      });
      return cloneArr;
    } else {
      throw new Error(
        `'arr' parameter must be an instance of the Array!`
        );
    }
  }

module.exports = {
  transform
};
