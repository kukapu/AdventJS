export default function createXmasTree(height) {

  let arbol = ''
  let tronco = '_'.repeat( height - 1 ) + '#' + '_'.repeat( height - 1 )
  
  for( let i = 1; i <= height; i++ ){
    arbol += '_'.repeat( height - i ) + '*'.repeat( 2*i - 1 ) + '_'.repeat( height - i ) + '\n'
  }
  
  
  return arbol + tronco + '\n' + tronco
}

// 5
// ____*____
// ___***___
// __*****__
// _*******_
// *********
// ____#____
// ____#____

// 3
// __*__
// _***_
// *****
// __#__
// __#__
