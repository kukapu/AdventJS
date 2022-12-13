const listGifts = (letter) => {
    let result = {}
    const letterArray = letter.trim().split(' ')
    const letterArrayFilted = letterArray.filter( present => !present.startsWith('_'))
    
    letterArrayFilted.forEach( present => {
      result[present] += 1
      if( !result[present] ) result[present] = 1
      
    })
    
    return result
  }