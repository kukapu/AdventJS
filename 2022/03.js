function distributeGifts(packOfGifts, reindeers) {
    let weightGift = 0
    let strongReindeers = 0
  
    packOfGifts.map( gift => {
          weightGift += gift.length
    })
    reindeers.map( reindeer => {
         strongReindeers += 2*(reindeer.length)
    })
  
    return Math.floor(strongReindeers/weightGift)
}