function selectSleigh(distance, sleighs) {
    let result = null
    const maxBatery = 20
    sleighs.map( sled => {
      if( sled.consumption * distance <= maxBatery ) result = sled.name
    })
    
    return result
  }