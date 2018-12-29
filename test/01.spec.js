const path = require('path')
const expect = require('chai').expect

const testfilename = path.basename(__filename, '.spec.js')
const solution = require(path.join('..', 'src', testfilename))

describe(`Day ${testfilename}`, () => {
    /*
    For example, if the device displays frequency changes of +1, -2, +3, +1, then starting from a frequency of zero, the following changes would occur:

    Current frequency  0, change of +1; resulting frequency  1.
    Current frequency  1, change of -2; resulting frequency -1.
    Current frequency -1, change of +3; resulting frequency  2.
    Current frequency  2, change of +1; resulting frequency  3.
    In this example, the resulting frequency is 3.

    Here are other example situations:

    +1, +1, +1 results in  3
    +1, +1, -2 results in  0
    -1, -2, -3 results in -6
     */

    describe('sum', () => {
        it('matches the first example', () => {
            expect(solution.sum([1, -2, 3, 1])).to.be.equal(3)
        })
        it('matches the second example', () => {
            expect(solution.sum([1, 1, 1])).to.be.equal(3)
        })
        it('matches the third example', () => {
            expect(solution.sum([1, 1, -2])).to.be.equal(0)
        })
        it('matches the fourth example', () => {
            expect(solution.sum([-1, -2, -3])).to.be.equal(-6)
        })
    })

    /*
    For example, using the same list of changes above, the device would loop as follows:

    Current frequency  0, change of +1; resulting frequency  1.
    Current frequency  1, change of -2; resulting frequency -1.
    Current frequency -1, change of +3; resulting frequency  2.
    Current frequency  2, change of +1; resulting frequency  3.
    (At this point, the device continues from the start of the list.)
    Current frequency  3, change of +1; resulting frequency  4.
    Current frequency  4, change of -2; resulting frequency  2, which has already been seen.
    In this example, the first frequency reached twice is 2. Note that your device might need to repeat its list of frequency changes many times before a duplicate frequency is found, and that duplicates might be found while in the middle of processing the list.

    Here are other examples:

    +1, -1 first reaches 0 twice.
    +3, +3, +4, -2, -4 first reaches 10 twice.
    -6, +3, +8, +5, -6 first reaches 5 twice.
    +7, +7, -2, -7, -4 first reaches 14 twice.
     */

    describe('reverse captcha 2', () => {
        it('matches the first example', () => {
            expect(solution.sumToRepeat([1, -2, 3, 1])).to.be.equal(2)
        })
        it('matches the second example', () => {
            expect(solution.sumToRepeat([1, -1])).to.be.equal(0)
        })
        it('matches the third example', () => {
            expect(solution.sumToRepeat([3, 3, 4, -2, -4])).to.be.equal(10)
        })
        it('matches the fourth example', () => {
            expect(solution.sumToRepeat([-6, 3, 8, 5, -6])).to.be.equal(5)
        })
        it('matches the fifth example', () => {
            expect(solution.sumToRepeat([7, 7, -2, -7, -4])).to.be.equal(14)
        })
    })
})
