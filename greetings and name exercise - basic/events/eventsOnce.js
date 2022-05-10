const {EventEmitter} = require("events")
const ev = new EventEmitter()

ev.once(`SaySomething`, (message) => {
    console.log(`You have receave a message:`, message)
})

ev.emit(`SaySomething`, `DHSAUDHASUDA ahhaa`)
ev.emit(`SaySomething`, `uuuh lala uuhh lala`)
ev.emit(`SaySomething`, `uuuh lala uuhh lala`)
ev.emit(`SaySomething`, `uuuh lala uuhh lala`)