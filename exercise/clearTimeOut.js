const timeOut = 3000 //milisegundos ou seja 3 segundos
const finished = () => console.log(`Done`)

let timer = setTimeout(finished, timeOut)
clearTimeout(timer)