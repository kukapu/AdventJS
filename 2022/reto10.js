function checkJump(heights) {

    const max = Math.max(...heights)
    const indexMax = heights.indexOf(max)
  
    const heightsBool = heights.map( (jump, index) => {
      const prev = heights[index - 1]
      if( max === Math.min(...heights)) return false
      if( indexMax === heights.length - 1 || indexMax === 0) return false
      if( index === 0 ) {
        if( jump <= heights[1] ) return true
        return false
      }
  
      if ( index <= indexMax ) {
        if( prev <= jump ) return true
        return false
      }
      
      if ( index >= indexMax ) {
        if( prev >= jump ) return true
        return false
      }
    })
    return !heightsBool.some( jump => jump === false )
  }
  