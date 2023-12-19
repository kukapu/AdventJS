export default function daysToXmas(date) {
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  console.log(day)
  console.log(month)
  console.log(year)

  if(year == 2021){
    if(month == 11){
      return 25 - day
    } 
    else if(month == 10) {
      return 25 + (30-day)
    } 
    else if(month == 9) {
      return 55 + (31-day)
    } 
    else if(month == 8) {
      return 86 + (30-day)
    } 
    else if(month == 7) {
      return 116 + (31-day)
    }   
    else if(month == 6) {
      return 147 + (31-day)
    } 
    else if(month == 5) {
      return 178 + (30-day)
    }  
    else if(month == 4) {
      return 208 + (31-day)
    } 
    else if(month == 3) {
      return 239 + (30-day) 
    } 
    else if(month == 2) {
      return 269 + (31-day)
    } 
    else if(month == 1) {
      return 300 + (28-day)
    } 
    else if(month == 0) {
      return 328 + (31-day)
    }
  }
  else if(year == 2022) {
    if(month == 11){
      return -340 - day
    } 
    else if(month == 10) {
      return -310 -day
    } 
    else if(month == 9) {
      return -279 -day
    } 
    else if(month == 8) {
      return -249 -day
    } 
    else if(month == 7) {
      return -218 -day
    }   
    else if(month == 6) {
      return -187 -day
    } 
    else if(month == 5) {
      return -157 -day
    }  
    else if(month == 4) {
      return -126 -day
    } 
    else if(month == 3) {
      return -96 -day 
    } 
    else if(month == 2) {
      return -65 -day
    } 
    else if(month == 1) {
      return -37 - day
    } 
    else if(month == 0) {
      return -6 - day
    }
  }  
}


const date1 = new Date('Dec 1, 2021')
daysToXmas(date1) // 24
const date2 = new Date('Dec 24, 2021 00:00:01')
daysToXmas(date2) // 1
const date3 = new Date('Dec 24, 2021 23:59:59')
daysToXmas(date3) // 1
const date4 = new Date("December 20, 2021 03:24:00")
daysToXmas(date4) // 5

const date5 = new Date('Dec 25, 2021')
daysToXmas(date5) // 0
const date6 = new Date('Dec 26, 2021')
daysToXmas(date6) // -1
const date7 = new Date('Dec 31, 2021')
daysToXmas(date7) // -6
const date8 = new Date('Jan 1, 2022 00:00:01')
daysToXmas(date8) // -7
const date9 = new Date('Jan 1, 2022 23:59:59')
daysToXmas(date9) // -7

