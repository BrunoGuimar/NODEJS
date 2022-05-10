const questions = [
    `What i learn today?`,
    `What let me bored? and What i can do to be great?`,
    `What make me happy today?`,
    `How much people i helped today?`,
]
const ask = (index = 0) => {
    process.stdout.write(`\n\n` + questions[index] + `: `)
}
ask()

const answer = []
process.stdin.on('data', dados =>{
    answer.push(dados.toString().trim())
    if(answer.length < questions.length){
        ask(answer.length)
    }else {
        console.log(answer)
        process.exit()
    }
})

process.on(`exit`, () =>{
    console.log(`
    Cool Bruno!

    What you have learned today was:
    ${answer[0]}

    What have maked your bored and what you have done was:
    ${answer[1]}

    What have make you happy today was:
    ${answer[2]}

    How much people you helped today:
    ${answer[3]}

    Nice! Back tomorrow for more inspirations :)
    `)
})