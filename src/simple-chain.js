const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chains: [],
  getLength() {
    this.chains.length;
    return this;
  },
  addLink(value) {
    this.chains.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' ||
        position > this.chains.length ||
        position < 1) {
      this.chains = [];
      throw new Error('You can\'t remove incorrect link!');
      }else {
        this.chains.splice(position - 1, 1);
        return this;
      }
  },
  reverseChain() {
    this.chains.reverse()
    return this
  },
  finishChain() {
    let endChains = this.chains.join('~~');
    this.chains = [];
    return endChains;
  }
};

module.exports = {
  chainMaker
};
