function printTable(gifts) {
    let maxName = 0
    let maxQuant = 0
    
      
    gifts.forEach( gift => {
        if( gift.name.length > maxName ) maxName = gift.name.length
        if( `${gift.quantity}`.length > maxQuant) maxQuant = `${gift.quantity}`.length
    })
    
    maxName > 4 ? maxName : maxName = 4
    maxQuant > 8 ? maxQuant : maxQuant = 8
    const wide = 7 + maxName + maxQuant
    
    let result = '+'.repeat(wide) + '\n'
    result += '| ' + 'Gift' + ' '.repeat(maxName-3) 
    result += '| ' + 'Quantity' 
    if( maxQuant > 8 ) result += ' '.repeat(maxQuant-8) + ' |\n' 
    else result += ' |\n'
    result += '| ' + '-'.repeat(maxName) + ' | ' + '-'.repeat(maxQuant) + ' |\n'
    
    gifts.forEach( gift => {
        result += '| ' + gift.name + ' '.repeat(maxName-gift.name.length+1)
        result += '| ' + gift.quantity + ' '.repeat(maxQuant-`${gift.quantity}`.length ) + ' |' + '\n'
    })
    
    result += '*'.repeat(wide)
    return result
}