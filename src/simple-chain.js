const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`)
    return this;
  },
  removeLink(position) {
    if (
      typeof position === "number" &&
      position > 0 &&
      position <= this.getLength()
    ) {

      this.chain.splice(position - 1, 1);
      return this;
    } else {
      this.chain = []
      throw new Error("You can\'t remove incorrect link!");
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const finish = this.chain.join('~~')
    this.chain = []
    return finish;
  }
};

module.exports = {
  chainMaker
};
