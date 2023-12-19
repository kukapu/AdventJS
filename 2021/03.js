export default function isValid(letter) {
  
  const regex = /^[a-zÀ-ÿ]+$/i
  const regex2 = /^\(+[a-zÀ-ÿ]+\)+$/i
  
  const letterArray = letter.split(' ')
  
  return letterArray.every( n => {
      return regex.test(n) || regex2.test(n)  
  })
}

"bici coche (balón) bici coche peluche" // -> ✅
"(muñeca) consola bici" // ✅

"bici coche (balón bici coche" // -> ❌
"peluche (bici [coche) bici coche balón" // -> ❌
"(peluche {) bici" // -> ❌
"() bici" // ❌
      