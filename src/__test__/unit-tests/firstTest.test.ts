import 'jest';
import c from '../../otherFile';
// const sum = require('../src/index');

describe('first test', () => {

  it('adds 1 + 2 to equal 3', () => {
      expect(c).toBe(4);
    });

  test('true to be true', () => {
    expect(true).toBe(true);
  });

});