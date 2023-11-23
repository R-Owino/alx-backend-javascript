/* tests 0-calcul.js */

const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
    it('should round numbers and return the sum', () => {
        // case 1
        const res1 = calculateNumber(1, 3);
        assert.strictEqual(res1, 4);

        // case 2
        const res2 = calculateNumber(1, 3.7);
        assert.strictEqual(res2, 5);

        // case 3
        const res3 = calculateNumber(1.2, 3.7);
        assert.strictEqual(res3, 5);

        // case 4
        const res4 = calculateNumber(1.5, 3.7);
        assert.strictEqual(res4, 6);
    });
});