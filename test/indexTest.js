const { expect } = require('chai');
const { receivesAFunction, returnsANamedFunction, returnsAnAnonymousFunction } = require('../index.js');

describe('index', () => {
  describe('receivesAFunction(callback)', () => {
    it('receives a function and calls it', () => {
      let called = false;
      const callback = () => {
        called = true;
      };
      receivesAFunction(callback);
      expect(called).to.be.true;
    });
  });

  describe('returnsANamedFunction()', () => {
    let namedFunction;
    before(() => {
      namedFunction = returnsANamedFunction();
    });

    it('returns a named function', () => {
      expect(namedFunction).to.be.a('function');
      expect(namedFunction()).to.equal('I am a named function!');
    });
  });

  describe('returnsAnAnonymousFunction()', () => {
    let anonymousFunction;
    before(() => {
      anonymousFunction = returnsAnAnonymousFunction();
    });

    it('returns an anonymous function', () => {
      expect(anonymousFunction).to.be.a('function');
      expect(anonymousFunction()).to.equal('I am an anonymous function!');
    });
  });
});
