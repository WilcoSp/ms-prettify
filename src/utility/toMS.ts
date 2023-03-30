import convert from './getType.js';

/**
 * Just a Number
 * @param value value you want to check if it's a number
 * @returns whether the value is a number
 */
function JaN(value: string): value is `${number}` {
    //@ts-ignore
    return value == parseFloat(value);
}

/**
 * makes a number absolute
 * @param value a number or bigint
 * @returns absolute value
 */
function abs(value: number) {
    return value < 0n ? -value : value;
}

/**
 * Convert Human readable time to milliseconds.
 * @param {String} value The human readable time string.
 * @returns {Number} The time in milliseconds.
 */
export default function (value: string): number | null {
    value = value.trim().toLowerCase();
    if (JaN(value)) {
        return parseFloat(value);
    }
    const values = value.split(/ +/g);
    let ms = 0;
    // fails = 0,
    // trials = 0;

    ms: for (let [i, v] of values.entries()) {
        v = v.trim();
        if (JaN(v.trim())) {
            const n = abs(parseFloat(v)),
                next = values[i + 1]?.trim();
            if (JaN(next) || !next) {
                // second value is a number/null, so current value is ms
                ms += n;
                continue ms;
            }
            // second value is a string
            const time = convert(next);
            if (!time) {
                return null;
            }
            ms += n * time;
            continue ms;
        }
        const nr = parseFloat(v);
        if (Number.isNaN(nr)) {
            const previous = values[i - 1];
            if (JaN(previous)) {
                const c = convert(v);
                if (c) {
                    continue ms; // we've already done this one;
                }
                return null; // unmatched kind
            }
            const c = convert(v);
            if (!c) {
                return null;
            }
            ms += c;
            continue ms;
        }

        const c = convert(v.substring(nr.toString().length));
        if (!c) {
            return null;
        }
        ms += nr * c;
        continue ms;
    }

    return ms;

    // strings.forEach((v, i) => {
    //     trials++;

    //     // Value is a number
    //     if (JaN(v)) {
    //         let t = Math.abs(parseFloat(v));
    //         if (JaN(strings[i + 1]) || !strings[i + 1]) {
    //             number += t;
    //             fails--;
    //         } // Next value is also a number
    //         else {
    //             let value = convert(strings[i + 1].trim()?.toLowerCase());
    //             if (value) number += value * t;
    //             else fails++;
    //         }
    //     } else {
    //         let no = parseFloat(v),
    //             str = v.substring(no.toString()?.length)?.trim()?.toLowerCase();
    //         let value = convert(str);

    //         if (value && no) number += no * value;
    //         else fails++;
    //     }
    // });

    // return fails === values.length ? undefined : ms;
}
