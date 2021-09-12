const second = 1000, minute = second * 60, hour = minute * 60, day = hour * 24, week = day * 7, year = day * 365.25;

module.exports = (time) => {
    let value, string;

    if (time > year) {
        value = parseInt(time / year);
        time -= year * value;
        string = `${value} year${value > 1 ? "s" : ""} `
    } else if (time > week) {
        value = parseInt(time / week);
        time -= week * value;
        string = `${value} week${value > 1 ? "s" : ""} `
    } else if (time > day) {
        value = parseInt(time / day);
        time -= day * value;
        string = `${value} day${value > 1 ? "s" : ""} `
    } else if (time > hour) {
        value = parseInt(time / hour);
        time -= hour * value;
        string = `${value} hour${value > 1 ? "s" : ""} `
    } else if (time > minute) {
        value = parseInt(time / minute);
        time -= minute * value;
        string = `${value} minute${value > 1 ? "s" : ""} `
    } else if (time > second) {
        value = parseInt(time / second);
        time -= second * value;
        string = `${value} second${value > 1 ? "s" : ""} `
    } else {
        value = time;
        time = 0;
        string = `${value} millisecond${value > 1 ? "s" : ""} `
    }

    return { time, value, string };
}