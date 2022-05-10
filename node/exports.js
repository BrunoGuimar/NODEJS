//console.log(process.argv)
function getFlag(flag) {
    const flagValue = process.argv.indexOf(flag) + 1
    return process.argv[flagValue]
}

module.exports = getFlag;