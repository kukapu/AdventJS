function getOptimalPath(path) {
  
    const result = parseInt(path.reduceRight( ( supLevel , currentLevel ) => {
        return currentLevel.map( (valor, index) => {
            return valor + Math.min( supLevel[index], supLevel[index + 1] )
        }) 
    }))
  
    return result
}