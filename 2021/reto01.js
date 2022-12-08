function contarOvejas(ovejas) {

    const filterOvejas = ovejas.filter( oveja => oveja.color === 'rojo' 
      && oveja.name.toLowerCase().includes('n')
      && oveja.name.toLowerCase().includes('a')
    )
    
    return filterOvejas
}