import convert from './getType.js';

function JaN(value: string): value is `${number}` {
    //@ts-ignore
    return value == parseFloat(value);
}

/**
 * Convert Human readable time to milliseconds.
 * @param {String} value The human readable time string.
 * @returns {Number} The time in milliseconds.
 */

// 1 hour 10min
export default function (value: string): number | undefined {
    if (JaN(value)) {
        return parseFloat(value);
    }
    const strings = value.toLowerCase().trim().split(/ +/g);
    let number = 0,
        fails = 0,
        trials = 0;

    strings.forEach((v, i) => {
        trials++;

        // Value is a number
        if (JaN(v)) {
            let t = Math.abs(parseFloat(v));
            if (JaN(strings[i + 1]) || !strings[i + 1]) {
                number += t;
                fails--;
            } // Next value is also a number
            else {
                let value = convert(strings[i + 1].trim()?.toLowerCase());
                if (value) number += value * t;
                else fails++;
            }
        } else {
            let no = parseFloat(v),
                str = v.substring(no.toString()?.length)?.trim()?.toLowerCase();
            let value = convert(str);

            if (value && no) number += no * value;
            else fails++;
        }
    });

    return fails === strings.length ? undefined : number;
}
