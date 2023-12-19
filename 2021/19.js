export default function learn(time, courses) {

  let sol = []
  let max = []
  let maxReal = []

  courses.forEach((e1,i1)=>{
    courses.forEach((e2,i2)=>{
      if(i1 != i2 && e1+e2 <= time){
        max.push(e1+e2)
        //console.log(max)
        maxReal = max.filter(n=>n===Math.max(...max))
        //console.log(maxReal)
      }
    })
  })

  const sumMax = maxReal.pop()

  courses.forEach((e1,i1)=>{
    courses.forEach((e2,i2)=>{
      if(e1+e2 === sumMax && i1 != i2){
        sol.push(i1, i2)
      }
    })
  })

  if(sol.slice(0,2).length == 0) return null
  else return sol.slice(0,2) 
}

learn(10, [2, 3, 8, 1, 4]) // [0, 2] -> con 10 horas disponibles lo mejor es que completemos los cursos en el índice 0 y 2.

learn(15, [2, 10, 4, 1]) // [1, 2] -> Los cursos en [1, 2] son 14 horas, es la mejor opción.

learn(25, [10, 15, 20, 5]) // [0, 1] -> los cursos [0, 1] y [2, 3] completan exactamente con 25 horas pero siempre devolvemos el primero que encontremos

learn(8, [8, 2, 1]) // [1, 2] -> para hacer dos cursos, no podemos hacer el de 8 horas, así que devolvemos el de 1 y 2.

learn(8, [8, 2, 1, 4, 3]) // [3, 4] -> usamos el máximo tiempo disponible así que [3, 4] usa 7 horas y el [1, 2] sólo usaría 3 horas.

learn(4, [10, 14, 20]) // null -> no nos da tiempo a hacer dos cursos
