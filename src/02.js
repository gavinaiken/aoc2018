const path = require('path')
const utils = require('./utils')

function checkId(id) {
    let chars = id.split('')
    let counts = chars.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1
        return acc
    }, {})
    // console.log(chars, counts)
    let scores = [0, 0]
    Object.values(counts).forEach(val => {
        if (val === 2) { scores[0] = 1 }
        if (val === 3) { scores[1] = 1 }
    })
    return scores
}

function checksum(ids) {
    let doubles = 0,
        triples = 0
    ids.forEach(id => {
        let [double, triple] = checkId(id)
        doubles += double
        triples += triple
    })
    // console.log(doubles, triples)
    return doubles * triples
}

function compareIds(id1, id2) {
    let chars1 = id1.split('')
    let chars2 = id2.split('')
    let diffs = 0
    for (let i = 0; i < chars1.length; i++) {
        if (chars1[i] !== chars2[i]) { diffs++ }
    }
    return diffs
}

function findPair(ids) {
    for (let i = 0; i < ids.length; i++) {
        for (let j = 0; j < ids.length; j++) {
            if (i === j) { continue }
            if (compareIds(ids[i], ids[j]) === 1) { return [ids[i], ids[j]] }
        }
    }
}

function commonLetters(id1, id2) {
    let chars1 = id1.split('')
    let chars2 = id2.split('')
    let common = []
    for (let i = 0; i < chars1.length; i++) {
        if (chars1[i] === chars2[i]) { common.push(chars1[i]) }
    }
    return common.join('')
}

async function run() {
    const input = await utils.getInput(path.basename(__filename, '.js'))
    const parsedInput = input.split(/[\r\n]/)
    console.log(parsedInput)
    console.log('solution to part 1 is', checksum(parsedInput))
    console.log('solution to part 2 is', commonLetters(...findPair(parsedInput)))
}

module.exports = {
    run,
    checkId,
    checksum,
    compareIds,
    findPair
}
