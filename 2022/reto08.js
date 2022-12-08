const checkPart = ( part ) => {
   
    const partArray = part.split('')
    const reversePart = partArray.reverse()
    
    if( part === reversePart.join('') ) return true
    
    for( let i = 0; i < part.length; i++){
      const shortPart = [...partArray]
      shortPart.splice(i,1)
      if( shortPart.join('') === shortPart.reverse().join('')) return true
    }
    
    return false
}
  