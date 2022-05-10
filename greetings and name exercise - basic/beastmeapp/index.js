const questions = [
    "What i learn today?",
    "What make me bored, and what can i make to improve-it?",
    "what make me happy today",
    "How much people i helped today?",
]
const ask = (index = 0) => {
    process.stdout.write(questions[index] + `\n`)
}
ask()

const answers = []
process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    if (answers.length < questions.length) {
        ask(answers.length)
    }else{
        console.log(answers)
        process.exit()
    }
})

process.on('exit', () =>{
    console.log(`
    Cool Bruno!

    What u have learn today was:
    ${answers[0]}

    What made you bored and what u due to fix was:
    ${answers[1]}
    
    What made you happy was:
    ${answers[2]}

    How much people you have helped today was:
    ${answers[3]}

    Come back tomorrow for more reflexions!
    `)
})