const path = require('path')
const utils = require('./utils')

function sum(arr) {
    return arr.reduce((acc, curr) => {
        acc += curr
        return acc
    }, 0)
}

function sumToRepeat(arr) {
    let seen = new Set()
    let curr = 0,
        idx = 0
    while (!seen.has(curr)) {
        seen.add(curr)
        // debug(curr, arr[idx], curr + arr[idx])
        curr += arr[idx]
        idx++
        if (idx === arr.length) { idx = 0 }
    }
    return curr
}

async function run() {
    const input = await utils.getInput(path.basename(__filename, '.js'))
    const parsedInput = input.split(/[\r\n]/).map(i => Number(i))
    console.log(parsedInput)
    console.log('solution to part 1 is', sum(parsedInput))
    console.log('solution to part 2 is', sumToRepeat(parsedInput))
}

module.exports = {
    run,
    sum,
    sumToRepeat
}
