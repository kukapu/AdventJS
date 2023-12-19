function manufacture(gifts, materials) {
  const result: string[] = []
  const pieces: string[] = materials.split('')
  
  gifts.forEach( (gif: string) => {
    const gifPieces: string[] = gif.split('')
    if(gifPieces.every( piece => pieces.includes(piece) )) result.push(gif)
  })
  return result
}


const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

manufacture(gifts, materials) // ["tren", "oso"]
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'

const gifts1 = ['juego', 'puzzle']
const materials1 = 'jlepuz'

manufacture(gifts, materials) // ["puzzle"]

const gifts2 = ['libro', 'ps5']
const materials2 = 'psli'

manufacture(gifts, materials) // []