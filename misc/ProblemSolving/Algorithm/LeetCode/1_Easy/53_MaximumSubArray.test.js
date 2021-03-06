/**
 * 53_MaximumSubArray.test.js
 */

const { maxSubArray } = require("./53_MaximumSubArray");

test('[-2,1,-3,4,-1,2,1,-5,4]', () => {
    expect(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])).toBe(6);
});

test('[1]', () => {
    expect(maxSubArray([1])).toBe(1);
});

test('[5,4,-1,7,8]', () => {
    expect(maxSubArray([5,4,-1,7,8])).toBe(23);
});

test('[-3,-2,-2,-3]', () => {
    expect(maxSubArray([-3,-2,-2,-3])).toBe(-2);
});
