function carryGifts(gifts, maxWeight) {
  
    let result = []
    let packGift = ''
    
    gifts.forEach( (gift, index) => {
  
        if( gift.length > maxWeight) return    
        if( index < gifts.length - 1 ) {
            
            packGift += (' ' + gift) 
            const post = packGift.replace(/\s+/g, '') + gifts[index + 1]
            if( post.length > maxWeight ){
            result.push( packGift )
            packGift = ''
            }
        }
        
        if( index === gifts.length - 1) {
            packGift += (' ' + gift) 
            result.push( packGift )
        }
        
    })
    
    return result.map( n => n.trim())
}