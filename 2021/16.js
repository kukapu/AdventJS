export default function decodeNumber(symbols) {
  //  .1  ,5   :10   ;50   !100
  const numbers = symbols
  .replaceAll('.', '1 ' )
  .replaceAll(',', '5 ' )
  .replaceAll(':', '10 ' )
  .replaceAll(';', '50 ' )
  .replaceAll('!', '100 ' )
  const array = numbers.trim().split(' ')
  let res = 0
  
  const res1 = array.map(n=>n = parseInt(n))
  .map((n,i,a)=> {
    if(a[i]<a[i+1]){
      res -= n
    } else {
      res += n
    }
  })
    //console.log(numbers)
  //console.log(array)
  return res
}

// Símbolo       Valor
//   .             1
//   ,             5
//   :             10
//   ;             50
//   !             100

decodeNumbers('...') // 3
decodeNumbers('.,') // 4 (5 - 1)
decodeNumbers(',.') // 6 (5 + 1)
decodeNumbers(',...') // 8 (5 + 3)
decodeNumbers('.........!') // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
decodeNumbers('.;') // 49 (50 - 1)
decodeNumbers('..,') // 5 (-1 + 1 + 5)
decodeNumbers('..,!') // 95 (1 - 1 - 5 + 100)
decodeNumbers('.;!') // 49 (-1 -50 + 100)
decodeNumbers('!!!') // 300
decodeNumbers(';!') // 50
decodeNumbers(';.W') // NaN