/* tests 0-calcul.js */

const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('Testing calculateNumber', () => {
    it('Add 2 numbers', () => {
        assert.equal(calculateNumber(1, 3), 4);
    });

    it('Check rounding', () => {
        assert.equal(calculateNumber(1.2, 3.7), 5);
    });

    it('Check rounding when both args are double', () => {
        assert.equal(calculateNumber(1.2, 3.7), 5);
    });

    it('Check rounding when first arg is double', () => {
        assert.equal(calculateNumber(1.2, 3), 4);
    });

    it('Check rounding when second arg is double', () => {
        assert.equal(calculateNumber(1, 3.7), 5);
    });    

    it('Check rounding when both args are negative', () => {
        assert.equal(calculateNumber(-1.2, -3.7), -5);
    });

    it('Check rounding when first arg is negative', () => {
        assert.equal(calculateNumber(-1.2, 3), 2);
    });

    it('Check rounding when second arg is negative', () => {
        assert.equal(calculateNumber(1, -3.7), -3);
    });

});
