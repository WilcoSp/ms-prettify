# Installations
```
npm i ms-prettify
```

# What ?
An module to convert MS to human readable time and Human readable time to MS, with advanced options.

# Why ?
- Easy to use.
- Advanced options for manipulating the reult.

# How ?
```js
const pms = require('ms-prettify');

console.log(pms("1hour 10 min")); // Output => 4200000
console.log(pms("1hour 10 min 1y")); // Output => 31561800000
console.log(pms("1hour 10 min 1y")); // Output => 31561800000

console.log(pms(123456789)); // Output => 1 day 10 hours 17 minutes 36 seconds 789 milliseconds 
console.log(pms(123456789, { max: 2 })); // Output => 1 day 10 hours 
console.log(pms(123456789, { expanded: false })); // Output => 1 d 10 h 17 m 36 s 789 ms
console.log(pms(123456789, { max: 2, expanded: false })); // Output => 1 d 10 h

console.log(pms("hour1")); // Output => undefined
console.log(pms("hello world")); // Output => undefined
```

# Support
for support or issues or queries contace me on my [discord server](https://discord.gg/XYnMTQNTFh) or create a issue [here](https://github.com/KartikeSingh/ms-prettify/issues).