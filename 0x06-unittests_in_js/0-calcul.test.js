const assert = require('assert');
const calculateNumber = require('./0-calcul');

// Test cases

// Test rounding positive float numbers
assert.strictEqual(calculateNumber(1.4, 2.6), 4, 'Test Case 1 Failed');

// Test rounding negative float numbers
assert.strictEqual(calculateNumber(-1.4, -2.6), -4, 'Test Case 2 Failed');

// Test rounding positive and negative numbers
assert.strictEqual(calculateNumber(1.4, -2.6), -1, 'Test Case 3 Failed');

// Test rounding to nearest integers
assert.strictEqual(calculateNumber(2.5, 3.5), 6, 'Test Case 4 Failed');

// Test edge cases with point zero
assert.strictEqual(calculateNumber(0.1, 0.9), 1, 'Test Case 5 Failed');
assert.strictEqual(calculateNumber(-0.1, -0.9), -1, 'Test Case 6 Failed');

// Test cases where numbers are integers
assert.strictEqual(calculateNumber(2, 3), 5, 'Test Case 7 Failed');
assert.strictEqual(calculateNumber(-2, -3), -5, 'Test Case 8 Failed');

// Test cases with large numbers floats or ints
assert.strictEqual(calculateNumber(1234567.89, 9876543.21), 11111111, 'Test Case 9 Failed');

console.log('All test cases passed!');
