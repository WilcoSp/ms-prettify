const toMS = require('./utility/toMS');
const toTimeString = require('./utility/toTimeString');

/**
 * An module to convert MS time to human readable string and vice versa.
 * @param {String | Number} time The time in milliseconds or time in string.
 * @param {Options} options The options for modifying the time.
 * @returns {Number | String} The time in milliseconds or human readable string.
 */
function convertor(time, options = {}) {
    if (typeof (time) !== "number" && typeof (time) !== "string") throw new TypeError("Inavlid time was provided, It should be either a number or human readable time string");
    const { max = 7, expanded = true, returnObject = false, till = "millisecond" } = options;
    const type = ["year", "week", "day", "hour", "minute", "second", "millisecond"]

    if (typeof (max) !== "number" || max < 1) throw new TypeError("Invalid max was provided, it should be a number and at least 1");
    if (typeof (expanded) !== "boolean") throw new TypeError("Expanded should be a boolean type");
    if (typeof (returnObject) !== "boolean") throw new TypeError("Expanded should be a boolean type");
    if (!type.includes(till)) throw new Error(`Till should be one of these values : ${type.join(", ")} but we got ${JSON.stringify(till)}`)

    if (typeof (time) === "string") return toMS(time);
    else return toTimeString(time, max, expanded, returnObject,till);
}

module.exports = convertor;

/**
 * @typedef {Object} Options The options for modifying the return value.
 * @property {"year" | "week" | "day" | "hour" | "minute" | "second" | "millisecond"} till Show the values till particular time type.
 * @property {Number} max The maximum types you want to have, like 1 day 10 hour => 2 type.
 * @property {Boolean} expanded Whether the time types should be expanded or not, like hour instead of h.
 * @property {Boolean} returnObject Whether the return should be an object
 */