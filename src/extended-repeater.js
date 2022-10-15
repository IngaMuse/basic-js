const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const subNewStr = []
  const newStr = []
  if (options.additionRepeatTimes == undefined && options.addition != undefined) {
    options.additionRepeatTimes = 1;
  }
  for (let i = 1; i <= options.additionRepeatTimes; ++i) {
    subNewStr.push(`${options.addition}`)
    if (options.additionSeparator == undefined) {
      options.additionSeparator = '|'
    }
    subNewStr.push(`${options.additionSeparator}`)      
  }
  if (options.repeatTimes == undefined) {
    options.repeatTimes = 1;
  }
  for (let i = 1; i <= options.repeatTimes; ++i) {
    newStr.push(`${str}${subNewStr.slice(0, -1).join('')}`)
    if (options.separator == undefined) {
      options.separator = '+'
    }
  newStr.push(`${options.separator}`)    
  }
  return newStr.slice(0,-1).join('')
}

module.exports = {
  repeater
};
