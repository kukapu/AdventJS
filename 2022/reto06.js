function createCube(size) {
  
    const supL = '/\\'
    const supR = '_\\'
    const infL = '\\/'
    const infR = '_/'
    const space = ' '
    
    let partSup = ''
    let partInf = ''
    
    for( let i=1; i <= size; i++){
      partSup += space.repeat(size-i) + supL.repeat(i) + supR.repeat(size) + '\n'
      
      partInf += space.repeat(i-1) + infL.repeat(size - i + 1) + infR.repeat(size) + '\n'
    }
    
    return partSup + partInf.slice(0,-1)
}