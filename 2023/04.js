function decode(message) {
  while(message.includes('(')){
    let close = message.indexOf(')')
    let open = message.lastIndexOf('(', close)
    let reverse = message.substring(open + 1, close).split('').reverse().join('')
    message = message.substring(0, open) + reverse + message.substring(close + 1)
  }
  return message
}


//const a = decode('hola (odnum)')
//console.log(a) // hola mundo

//const b = decode('(olleh) (dlrow)!')
//console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

const d =  decode('((nta)(sa))')
console.log(d) // santa

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus