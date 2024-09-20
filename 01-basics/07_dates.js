// Dates

let myDate = new Date()

console.log(myDate.getDay()) // similary to get month, date, etc.
console.log(myDate.getMonth() + 1) // month starts with 0, to get similar we use +1

console.log(myDate) // complicated date
console.log(myDate.toString()) // Fri Sep 20 2024 12:05:48 GMT+0530 (India Standard Time)

console.log(myDate.toDateString()) // Fri Sep 20 2024
console.log(myDate.toLocaleString())  // 9/20/2024, 12:09:15 PM
console.log(myDate.toISOString()) // 2024-09-20T06:38:17.180Z

console.log(typeof myDate)

let myCreatedDate = new Date(2022, 0, 12)
console.log(myCreatedDate.toDateString()) // Wed Jan 12 2022 => month starts with 0

let myCreatedDate1 = new Date(2023, 4, 23, 8, 32) // y, m, d, hr, min
console.log(myCreatedDate1.toLocaleString()) // 5/23/2023, 8:32:00 AM

let myCreatedDate2 = new Date("01-23-2023")
console.log(myCreatedDate2.toDateString()) // mm-dd-yyyy or yyyy-mm-dd

let myTimeStamp = Date.now()
console.log(myTimeStamp) // date in milli sec from starting date

console.log(Math.floor(myTimeStamp/1000)) // covert date in milli sec (Math.floor to remove decimal)

// to get full time
console.log(`Date and time is ${myDate.toLocaleString()}`)

// we can customize toLocaleString more like -

newDate.toLocaleString('default', {
    weekday: "long",
})