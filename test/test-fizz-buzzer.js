'use strict';

// Import chai, declare expect variable
const expect = require('chai').expect;

// Import fizBuzz
const fizzBuzz = require('../fizzBuzzer');

// Unit tests for 'fizzBuzz' function
describe('fizzBuzz', function() {
  
  // Test the normal cases
  it('should return "fizz" if divisble by 3, "buzz" if divisible by 5, and \n'
     + '"fizzbuzz" if divisible by both 3 and 5.', function() {
    
    // Create & test normal inputs
    const normalCases = [
      [1, 1],
      [2, 2],
      [3, 'fizz'],
      [4, 4],
      [5, 'buzz'],
      [6, 'fizz'],
      [7, 7],
      [8, 8],
      [9, 'fizz'],
      [10, 'buzz'],
      [15, 'fizz-buzz']
    ];
    
    normalCases.forEach(test => {
      const answer = fizzBuzz(test[0]);
      expect(answer).to.equal(test[1]);
    });
  });
  
  // Test incorrect inputs
  it('should reject non-numerical inputs', function() {
    
    // Create and test non-numerical inputs
    
    const errorCases = [
      [null, false],
      ["1", false],
      [[1], false],
      [{a: 1}, false]
    ];
    
    errorCases.forEach(test => {
      expect(function() {
        fizzBuzz(input[0]);
      }).to.throw(Error);
    });
  });
});