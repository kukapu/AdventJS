function decorateTree(base) {
    const tree = []
    tree.push(base)
    let baseArray = base.split(' ')
    
    for( let i = 1; i <= ((base.length - 1) / 2 ); i++){
        baseArray = baseArray.map( (decoration, index) => {
            const next = baseArray[index+1] 
            
            if( decoration + next === 'PP' ) return 'P'
            if( decoration + next === 'BB' ) return 'B'
            if( decoration + next === 'RR' ) return 'R'
            if( decoration + next === 'BP' || decoration + next === 'PB' ) return 'R'
            if( decoration + next === 'RP' || decoration + next === 'PR' ) return 'B'
            if( decoration + next === 'BR' || decoration + next === 'RB' ) return 'P'
            return undefined
        })
        
        tree.push( baseArray.join(' '))
    }
      
    return tree.reverse().map(x=> x.trim(200))
}