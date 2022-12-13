function countHours(year, holidays) {
  
    let hoursReturn = 0
    holidays.map( date => {
        const newDate = new Date(`${date}/${year}`)
        if( newDate.getDay() <= 5 && newDate.getDay() !== 0 ) hoursReturn += 2
    })
    
    return hoursReturn
}