function getCompleted(part, total) {
   
    const timeToSec = (time) => {
      const hour = parseInt( time.slice(0,2) ) 
      const min = parseInt(time.slice(3,5))
      const sec = parseInt(time.slice(6,8))
      
      return (hour*3600 + min*60 + sec)
    }
    
    const partSec = timeToSec(part)
    const totalSec = timeToSec(total)
    
    const maximoComunDivisor = ( num, denom ) => {
      return denom === 0 ? num : maximoComunDivisor( denom, num % denom )
    }
    const mCD = maximoComunDivisor( partSec, totalSec )
    
    return `${partSec/mCD}/${totalSec/mCD}`
}
  