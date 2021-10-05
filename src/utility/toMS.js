const convert = require('./getType');

/**
 * Convert Human readable time to milliseconds.
 * @param {String} string The human readable time string.
 * @returns {Number} The time in milliseconds.
 */
module.exports = (string) => {
    const strings = string.toLowerCase().trim().split(/ +/g);
    let number = 0, fails = 0, trials = 0;

    strings.forEach((v, i) => {
        trials++;

        // Value is a number
        if (parseInt(v) == v) {
            if (parseInt(strings[i + 1]) == strings[i + 1]) { number += parseInt(v); fails-- } // Next value is also a number
            else {
                let value = convert(strings[i + 1].trim().toLowerCase());
                if (value) number += value * parseInt(v);
                else fails++
            }
        } else {
            let no = parseInt(v), str = v.substring(no.toString().length).trim().toLowerCase();
            let value = convert(str);

            if (value && no) number += no * value;
            else fails++;
        }
    });

    return fails === strings.length ? undefined : number;
}