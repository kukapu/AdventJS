export default function missingReindeer(ids) {
  ids.sort((a,b)=> a-b)
  let res = 0
  for(let i=0; i<ids.length; i++){
    if(ids[i+1] - ids[i] > 1){
      res = ids[i] + 1
    }
    if(ids.length > ids[ids.length-1]){
      res = ids[i] + 1
    }
  } 
  return res
}

missingReindeer([0, 2, 3]) // -> 1
missingReindeer([5, 6, 1, 2, 3, 7, 0]) // -> 4
missingReindeer([0, 1]) // -> 2 (¡es el último el que falta!)
missingReindeer([3, 0, 1]) // -> 2
missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1]) // -> 8
missingReindeer([0]) // -> 1 (¡es el último el que falta!)
