function getFilesToBackup(lastBackup, changes) {

    let result = []
  
    changes.forEach( change => {
         if( change[1] > lastBackup && !result.includes(change[0]) ) result.push( change[0])
    })
    result.sort((a,b) => a - b)
  
    return result  
}