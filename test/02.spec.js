const path = require('path')
const expect = require('chai').expect

const testfilename = path.basename(__filename, '.spec.js')
const solution = require(path.join('..', 'src', testfilename))

describe(`Day ${testfilename}`, () => {
    /*
    To make sure you didn't miss any, you scan the likely candidate boxes again, counting the number that have an ID containing exactly two of any letter and then separately counting those with exactly three of any letter. You can multiply those two counts together to get a rudimentary checksum and compare it to what your device predicts.

    For example, if you see the following box IDs:

    abcdef contains no letters that appear exactly two or three times.
    bababc contains two a and three b, so it counts for both.
    abbcde contains two b, but no letter appears exactly three times.
    abcccd contains three c, but no letter appears exactly two times.
    aabcdd contains two a and two d, but it only counts once.
    abcdee contains two e.
    ababab contains three a and three b, but it only counts once.
    Of these box IDs, four of them contain a letter which appears exactly twice, and three of them contain a letter which appears exactly three times. Multiplying these together produces a checksum of 4 * 3 = 12.
     */

    describe('checksum', () => {
        const ids = [
            'abcdef',
            'bababc',
            'abbcde',
            'abcccd',
            'aabcdd',
            'abcdee',
            'ababab',
        ]
        it('matches the first example', () => {
            expect(solution.checkId(ids[0])).to.be.deep.equal([0, 0])
            expect(solution.checkId(ids[1])).to.be.deep.equal([1, 1])
            expect(solution.checkId(ids[2])).to.be.deep.equal([1, 0])
            expect(solution.checkId(ids[3])).to.be.deep.equal([0, 1])
            expect(solution.checkId(ids[4])).to.be.deep.equal([1, 0])
            expect(solution.checkId(ids[5])).to.be.deep.equal([1, 0])
            expect(solution.checkId(ids[6])).to.be.deep.equal([0, 1])
            expect(solution.checksum(ids)).to.be.equal(12)
        })
    })

    /*
     */

    // describe('reverse captcha 2', () => {
    //     it('matches the first example', () => {
    //         expect(solution.sumToRepeat([1, -2, 3, 1])).to.be.equal(2)
    //     })
    // })
})
