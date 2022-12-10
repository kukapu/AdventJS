function countTime(leds) {

    let timer = 0
    let newLeds = [...leds]
  
    while( newLeds.some(led => led === 0) ){
      timer += 7
      newLeds = newLeds.map( (led, index)=> {
        if( led === 0 && (newLeds[index - 1])) return 1
        if( led === 0 && index === 0 && newLeds[newLeds.length - 1] === 1)  return 1 
        if( led === 1 ) return 1
        else return 0
      })
     
    } 
  
    return timer
  }