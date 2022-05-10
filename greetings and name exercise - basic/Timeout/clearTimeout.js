const timeOut = 3000 //milisegundos
const finished = () => {
    console.log(`done`)
}

let time = setTimeout(finished, timeOut)
clearTimeout(time)