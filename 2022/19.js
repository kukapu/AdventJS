function sortToys(toys, positions) {

    const result = []
    const min =  Math.min(...positions)
  
    for( let i = min; i < min + toys.length; i++ ){
        const position = positions.indexOf( i )
        result.push( toys[position] )
    }
  
    return result
}