export default function checkSledJump(heights) {
  let okJump = ''
	let max = Math.max(...heights)
  //console.log(heights.indexOf(max))
  const up = heights.slice(0, heights.indexOf(max))
  const down = heights.slice(heights.indexOf(max)+1)
  console.log(up)
  console.log(down)
  
  const condUp = (test) => {
    const res = test.map((n,i,a)=>a[i]>=a[i+1])
    return res
  }
  const condDown = (test) => {
    const res = test.map((n,i,a)=>a[i]<=a[i+1])
    return res
  }
  const testUp = condUp(up)
  const testDown = condDown(down)
  console.log(testUp)
  console.log(testDown)
  if(testUp.length == 0 || testDown.length == 0){
    okJump = false
  } else {
    if(testUp.some(n=>n==true) || testDown.some(n=>n==true)){
      okJump = false
    } else {
      okJump = true
    }
  }
  return okJump
} 

checkSledJump([1, 2, 3, 2, 1]) // true: sube y baja de forma estricta
checkSledJump([0, 1, 0]) // -> true: sube y baja de forma estricta
checkSledJump([0, 3, 2, 1]) // -> true: sube y baja de forma estricta
checkSledJump([0, 1000, 1]) // -> true: sube y baja de forma estricta

checkSledJump([2, 4, 4, 6, 2]) // false: no sube de forma estricta
checkSledJump([1, 2, 3]) // false: sólo sube
checkSledJump([1, 2, 3, 2, 1, 2, 3]) // false: sube y baja y sube... ¡no vale!