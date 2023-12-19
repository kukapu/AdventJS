export default function checkIsSameTree(treeA, treeB) {
 
  const sameTree = (tree1, tree2) => {
    if(!tree1 && !tree2) return true
    if(!tree1 && tree2) return false
    if(tree1 && !tree2) return false
    if(tree1.value != tree2.value) return false

    return (
      sameTree(tree1.left, tree2.left) && sameTree(tree1.right, tree2.right)
    )
  }
  
  const inverse = (tree) => {
    return JSON.parse(
      JSON.stringify(tree)
      .replaceAll('left', 'temp')
      .replaceAll('right', 'left')
      .replaceAll('temp', 'right')
    )
  }
  return sameTree(treeA, treeB) || sameTree(treeA, inverse(treeB))
}



const tree = {
  value: 1,
  left: { value: 2, left: null, right: null },
  right: { value: 3, left: null, right: null }
}

checkIsSameTree(tree, tree) // true

const tree2 = {
  value: 1,
  left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
  right: { value: 5, left: null, right: { value: 4, left: null, right: null } }
}

checkIsSameTree(tree, tree2) // false
checkIsSameTree(tree2, tree2) // true