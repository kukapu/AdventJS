export default function canReconfigure(from, to) {

  const fromArr = from.split('')
  const toArr = to.split('')
  let par = []
  for(let i=0; i<fromArr.length; i++) {
    par.push(fromArr[i] + toArr[i])
  }
  let fromArrFilter = fromArr.filter((e,i)=>{
    return fromArr.indexOf(e) === i;
  })
  let toArrFilter = toArr.filter((e,i)=>{
    return toArr.indexOf(e) === i;
  })
  let parFilter = par.filter((e,i)=>{
    return par.indexOf(e) === i;
  })

  if(fromArr.length != toArr.length) {
    return false
  }
  else {
      if(fromArrFilter.length != parFilter.length) return false
      else if(toArrFilter.length != parFilter.length) return false
      else return true
  }
}




const from1 = 'BAL'
const to1   = 'LIB'
canReconfigure(from1, to1) // true
/* la transformación sería así:
B -> L
A -> I
L -> B
*/

const from2 = 'CON'
const to2   = 'JUU'
canReconfigure(from2, to2) // false
/* no se puede hacer la transformación:
C -> J
O -> U
N -> FALLO
*/

const from3 = 'XBOX'
const to3   = 'XXBO'
canReconfigure(from3, to3) // false
/* no se puede hacer la transformación:
X -> X
B -> X (FALLO, no mantiene el orden de transformación y la B no puede asignarse a la X que ya se asignó a otra) 
O -> B
X -> O (FALLO, la X no puede asignarse a la O que ya se asignó a la X)
*/

const from4 = 'XBOX'
const to4   = 'XOBX'
canReconfigure(from4, to4) // true

const from5 = 'MMM'
const to5   = 'MID'
canReconfigure(from5, to5) // false
/* no se puede hacer la transformación:
M -> M (BIEN, asigna el mismo carácter a si mismo)
M -> I (FALLO, asigna el mismo carácter a dos letras distintas)
M -> D (FALLO, asigna el mismo carácter a dos letras distintas)
*/

const from6 = 'AA'
const to6   = 'MID'
canReconfigure(from6, to6) // false -> no tiene la misma longitud
