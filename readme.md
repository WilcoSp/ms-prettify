# What is it?

An module to convert MS to human readable time to MS with advanced options.

# Installation

```
npm i @wilcosp/ms-prettify --save
pnpm add @wilcosp/ms-prettify
yarn add @wilcosp/ms-prettify
```

Can also be used via a cdn, check "how to import" for all known available CDNs.

# Note

-   Requires node 16 or later, for browsers at least Chrome/Edge 88, Firefox 85 or Safari 14

# Why?

-   Easy to use.
-   Advanced options for manipulating the result.
-   Typescript definitions included.
-   Support for ES Modules & Commonjs.
-   Minified for browsers.

# how to import

```js
// Esm
import { pms } from "@wilcosp/ms-prettify";
import pms from "@wilcosp/ms-prettify"; // default export
import { converter } from "@wilcosp/ms-prettify"; // alternative named export,
// Commonjs
const { pms } = require("@wilcosp/ms-prettify"); //no "export = " type of export available for commonjs
// Jsdelivr
import { pms } from "https://cdn.jsdelivr.net/npm/@wilcosp/ms-prettify@2.0.0";
// Skypack (check for a pinned url)
import { pms } from "https://cdn.skypack.dev/@wilcosp/ms-prettify@2.0.0";
// Esm.sh
import { pms } from "https://esm.sh/@wilcosp/ms-prettify@2.0.0";
// Unpkg
import { pms } from "https://unpkg.com/@wilcosp/ms-prettify@2.0.0";
// Deno (may look into how to publish to deno.land)
import { pms } from "npm:@wilcosp/ms-prettify@2.0.0";
```

# How?

```js
import { pms } from "@wilcosp/ms-prettify";

console.log(pms("1hour 10 min")); // Output => 4200000
console.log(pms("1hour 10 min 1y")); // Output => 31561800000
console.log(pms("132ms 12")); // Output => 144

console.log(pms(123456789)); // Output => 1 day 10 hours 17 minutes 36 seconds 789 milliseconds
console.log(pms(123456789, { max: 2 })); // Output => 1 day 10 hours
console.log(pms(123456789, { expanded: false })); // Output => 1 d 10 h 17 m 36 s 789 ms
console.log(pms(123456789, { max: 2, expanded: false })); // Output => 1 d 10 h

console.log(pms(354678902, { returnObject: false, till: "second" })); // Output => 4 d 2 h 31 m 18 s
console.log(pms(354678902, { returnObject: true })); // Output => { day: 4, hour: 2, minute: 31, second: 18, millisecond: 902 }

console.log(pms("hour 1s")); // Output => 100
console.log(pms("hour 1er4 d9")); // Output => undefined
console.log(pms("hour1")); // Output => undefined
console.log(pms("hello world")); // Output => undefined
```

# Timer

```js
import { timer } from "@wilcosp/ms-prettify/timer";
import timer from "@wilcosp/ms-prettify/timer"; //default export
const { timer } = require("@wilcosp/ms-prettify/timer"); // commonjs
import { timer } from "@wilcosp/ms-prettify"; //also exported here but will be dropped when better support for exports map in package.json

/**
 * @param {Number} time Time after which timer should be executed
 * @param {Function} callback a callback function that should be executed when the timer ends
 * @param {...any[]} args arguments for the callback function
 */
timer(
    "10 minutes 12 second",
    (data, client) => client.doSomething(data),
    await getDataSomehow()
);

// Other ways to use

// ...
await timer("15 seconds");
// now do something else
```

# differences & similarities from original version from [Shisui/KartikeSingh](https://github.com/KartikeSingh/ms-prettify)

1. Support for esm & cjs modules.
2. Minified for browser & cdn by default
3. Converter being exported with named exports "coverter" & "pms" (does still export as default).
4. Timer is being exported both via "@wilcosp/ms-prettify/timer" with "timer" named export & default and also exported at "@wilcosp/ms-prettify" as "timer" named export

(the none @wilcosp/ms-prettify export of timer will be dropped when there's better support for exports map from cdn providers & typescript)

# Support

for support or issues, create a issue [here](https://github.com/WilcoSp/ms-prettify/issues).
