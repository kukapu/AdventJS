const listGifts = (letter) => {reto02
  let result = {}
  const letterArray = letter.trim().split(' ')
  const letterArrayFilted = letterArray.filter( present => !present.startsWith('_'))
  
  letterArrayFilted.forEach( present => {
    result[present] += 1
    if( !result[present] ) result[present] = 1
    
  })
  
  return result
}


const carta = 'bici coche balón _playstation bici coche peluche'

const regalos = listGifts(carta)

console.log(regalos)
/*
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/