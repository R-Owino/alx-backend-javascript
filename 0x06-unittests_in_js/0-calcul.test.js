/* tests 0-calcul.js */

const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('Testing calculateNumber', () => {
    it('Add 2 numbers', () => {
        const res1 = calculateNumber(1, 3);
        assert.strictEqual(res1, 4);
    });

    it('Check rounding', () => {
        const res2 = calculateNumber(1, 3.7);
        assert.strictEqual(res2, 5);
    });

    it('Check rounding when both args are double', () => {
        const res3 = calculateNumber(1.2, 3.7);
        assert.strictEqual(res3, 5);
    });

    it('Check rounding when first arg is double', () => {
        const res3 = calculateNumber(1.2, 3);
        assert.strictEqual(res3, 4);
    });

    it('Check rounding when second arg is double', () => {
        const res3 = calculateNumber(1, 3.7);
        assert.strictEqual(res3, 5);
    });

    it('Check rounding when both args are negative', () => {
        const res3 = calculateNumber(-1.2, -3.7);
        assert.strictEqual(res3, -5);
    });

    it('Check rounding when first arg is negative', () => {
        const res3 = calculateNumber(-1.2, 3);
        assert.strictEqual(res3, 2);
    });

    it('Check rounding when second arg is negative', () => {
        const res3 = calculateNumber(1, -3.7);
        assert.strictEqual(res3, -3);
    });

});
