export default function wrapGifts(gifts) {
  const lados = gifts.map((n, i)=> '*' + n + '*')
  let max = 0
  const close = '*'.repeat(lados[0].length) 
  lados.push(close)
  lados.unshift(close)
  const maxArr = lados.map(n => n.length)
  max = Math.max(...maxArr)
  
  const dinamic = lados.map((n,i,a) => {
    if(n.length < max){
      n = '*'.repeat((max - a[i].length)/2) + n + '*'.repeat((max - a[i].length)/2)
      return n
    } else {
      return n
    }
  })
  return dinamic
}

wrapGifts(["📷", "⚽️"])
/* Resultado:
[ '****',
  '*📷*',
  '*⚽️*',
  '****'
]
*/

wrapGifts(["🏈🎸", "🎮🧸"])
/* Resultado:
[ '******',
  '*🏈🎸*',
  '*🎮🧸*',
  '******'
]
*/

wrapGifts(["📷"])
/* Resultado:
[ '****',
  '*📷*',
  '****'
]
*/