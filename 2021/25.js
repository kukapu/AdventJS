export default function canMouseEat(direction, game) {
  const plana = game.flat()
  const posPlana = plana.indexOf('m')
  //console.log(posPlana)
  const posMouse1 = Math.floor((posPlana) / game[0].length)
  console.log(posMouse1)
  const posMouse2 = ((posPlana) % game[0].length) 
  console.log(posMouse2)
  //console.log(room[0].length)

  if(direction==='up' && posMouse1!=0){
    if(game[posMouse1-1][posMouse2].includes('*')) return true
    else return false   
  }
  else if(direction==='up' && posMouse1===0) return false
  
  else if(direction==='down' && posMouse1!=((game.length)-1)){
    if(game[posMouse1+1][posMouse2].includes('*')) return true
    else return false    
  } 
  else if(direction==='down' && posMouse1===((game.length)-1)) return false
  
  else if(direction==='right' && posMouse2 != ((game[0].length)-1)){
    if(game[posMouse1][posMouse2+1].includes('*')) return true
    else return false
  } 
  else if(direction==='right' && posMouse2 === ((game[0].length)-1)) return false
    
  else if(direction==='left' && posMouse2!=0){
    if(game[posMouse1][posMouse2-1].includes('*')) return true
    else return false
  } 
  else if(direction==='left' && posMouse2===0) return false
}


const room = [
  [' ', ' ', ' '],
  [' ', ' ', 'm'],
  [' ', ' ', '*']
]

canMouseEat('up',    room)   // false
canMouseEat('down',  room)   // true
canMouseEat('right', room)   // false
canMouseEat('left',  room)   // false

const room2 = [
  ['*', ' ', ' ', ' '],
  [' ', 'm', '*', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', '*']
]
