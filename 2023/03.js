function findNaughtyStep(original, modified) {
  const maxLength = Math.max(original.length, modified.length)
  if(original === modified) return ''
  for(let i = 0; i < maxLength; i++){
    if(original[i] !== modified[i]) {
      if(original.length === maxLength) return original[i]
      if(modified.length === maxLength) return modified[i]
    }
  }
}


const original = 'abcd'
const modified = 'abcde'
findNaughtyStep(original, modified) // 'e'

const original1 = 'stepfor'
const modified1 = 'stepor'
findNaughtyStep(original1, modified1) // 'f'

const original2 = 'abcde'
const modified2 = 'abcde'
findNaughtyStep(original2, modified2) // ''