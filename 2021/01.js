export default function contarOvejas(ovejas) {
  const goodSheep = ovejas.filter(n=>{
    const condColor = n.color === 'rojo'
    const condName = n.name.toLowerCase().includes('a') && n.name.toLowerCase().includes('n')
    console.log(condName)
    return condColor && condName
  })
  
  return goodSheep
}



const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'},
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo'}
]

const ovejasFiltradas = contarOvejas(ovejas)

console.log(ovejasFiltradas)

// [{ name: 'Navidad', color: 'rojo' },
//  { name: 'Ki Na Ma', color: 'rojo' }]