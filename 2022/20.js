function howManyReindeers(reindeerTypes, gifts) {
  
    reindeerTypes = reindeerTypes.sort( (a,b) => {
        return a.weightCapacity - b.weightCapacity
    })
    
    return gifts.map( country => {
        let listReindeers = {}
        let weightCountry = country.weight
        let reindeersTypesUseful = reindeerTypes.filter( reindeer => reindeer.weightCapacity < weightCountry )
        while( weightCountry !== 0 ){
            reindeersTypesUseful.map( reindeer => {
            if( weightCountry - reindeer.weightCapacity >= 0 ){
            listReindeers[reindeer.type] ? listReindeers[reindeer.type] += 1 : listReindeers[reindeer.type] = 1
            weightCountry -= reindeer.weightCapacity
            }
            })
        }
        return {
            country: country.country,
            reindeers: reindeersTypesUseful.map( reindeer => {
            return {
                type: reindeer.type,
                num: listReindeers[reindeer.type]
            }
            }).reverse()
        }
    })
}