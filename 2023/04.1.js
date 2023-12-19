function decode(message) {
  let result = ''
  let arr = message.split('')
  
  function findAllIndex(array, valorBuscado) {
      return array
          .map((elemento, indice) => elemento === valorBuscado ? indice : -1)
          .filter(indice => indice !== -1);
  }
  
  const openArr = findAllIndex(arr, '(')
  const closeArr = findAllIndex(arr, ')')
  
  function invertirSubseccion(array, inicio, fin) {
    if (inicio < 0 || fin >= array.length || inicio >= fin) {
        return array;
    }
    const subseccionInvertida = array.slice(inicio, fin + 1).reverse();
    return [
        ...array.slice(0, inicio),
        ...subseccionInvertida,
        ...array.slice(fin + 1)
    ];
  }
  
  if(openArr.length === 1){
    result = invertirSubseccion(arr, ...openArr, ...closeArr)
  }

  else if(openArr[1] < closeArr[0]){
    result = invertirSubseccion(arr, openArr[1], closeArr[0])
    arr = result
    result = invertirSubseccion(arr, openArr[0], closeArr[1])

  }
  else if(openArr[0] < closeArr[0]){
    for(let i = 0; i < openArr.length; i++){
      result = invertirSubseccion(arr, openArr[i], closeArr[i])
      arr = result
    }
  }
  return result.filter(e => e !== '(' && e !== ')').join('')
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