const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24,
    week = day * 7,
    year = day * 365.25;

// regexes
const YEAR_REGEX = /^y((rs?)|(ear(s|\(s\))?))?$/;
const WEEK_REGEX = /^w(eek(s|\(s\))?)?$/;
const DAY_REGEX = /^d(ay(s|\(s\))?)?$/;
const HOUR_REGEX = /^h((rs?)|(our(s|\(s\))?))?$/;
const MINUTE_REGEX = /^m((ins?)|(inute(s|\(s\))?))?$/;
const SECOND_REGEX = /^s((ecs?)|(econd(s|\(s\))?))?$/;
const MILLISECOND_REGEX = /^(ms|(msecs?)|(millisecond(s|\(s\))?))?$/;

export default function (value: string): number | null {
    value = value.trim();
    if (YEAR_REGEX.test(value)) return year;
    else if (WEEK_REGEX.test(value)) return week;
    else if (DAY_REGEX.test(value)) return day;
    else if (HOUR_REGEX.test(value)) return hour;
    else if (MINUTE_REGEX.test(value)) return minute;
    else if (SECOND_REGEX.test(value)) return second;
    else if (MILLISECOND_REGEX.test(value)) return 1;
    else return null;
}
