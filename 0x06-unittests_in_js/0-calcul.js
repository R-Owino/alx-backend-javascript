#!/usr/bin/env node

/* function calculateNumber that accepts 2 arguments (a, b) and returns their sum. */

const calculateNumber = (a, b) => {
    return (Math.round(a) + Math.round(b));
}

module.exports = calculateNumber;
