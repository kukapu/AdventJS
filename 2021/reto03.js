export default function isValid(letter) {
  
    const regex = /^[a-zÀ-ÿ]+$/i
    const regex2 = /^\(+[a-zÀ-ÿ]+\)+$/i
    
    const letterArray = letter.split(' ')
   
    return letterArray.every( n => {
        return regex.test(n) || regex2.test(n)  
    })
}
   