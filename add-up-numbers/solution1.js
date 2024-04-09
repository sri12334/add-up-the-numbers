'use strict';

/**
 * Add up all the numbers from 1 to the given input number.
 *
 * @param {number} number - The number up to which the sum needs to be calculated.
 * @returns {number} The sum of all numbers from 1 to the input number.
 */

export const addUp = (number) => {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum += i;
    }
    return sum;
}