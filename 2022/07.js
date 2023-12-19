function getGiftsToRefill(a1, a2, a3) {
   
    let result = []
    
    const uniqueItem = (a1,a2,a3) => {
      a1.forEach( item => {
        if( !a2.includes(item) && !a3.includes(item) ) result.push(item)
      })
    }
    
    uniqueItem(a1,a2,a3)
    uniqueItem(a2,a1,a3)
    uniqueItem(a3,a2,a1)
    
    return [...new Set(result)]
}