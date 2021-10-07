const pms = require('./').default

console.log(pms("1hour 10 min")); // Output => 4200000
console.log(pms("1hour 10 min 1y")); // Output => 31561800000
console.log(pms("1hour 10 min 1y")); // Output => 31561800000

console.log(pms(123456789)); // Output => 1 day 10 hours 17 minutes 36 seconds 789 milliseconds 
console.log(pms(123456789, { max: 2 })); // Output => 1 day 10 hours 
console.log(pms(123456789, { expanded: false })); // Output => 1 d 10 h 17 m 36 s 789 ms
console.log(pms(123456789, { max: 2, expanded: false })); // Output => 1 d 10 h

console.log(pms(354678902, { returnObject: false, till: "second" })); // Output => 4 d 2 h 31 m 31 s
console.log(pms(354678902, { returnObject: true })); // Output => { day: 4, hour: 2, minute: 31, second: 18, millisecond: 902 }

console.log(pms("hour1")); // Output => undefined
console.log(pms("hello world")); // Output => undefined