const getMS = require('./getMS');

module.exports = (number, max, expanded) => {
    let time = "";

    while (number > 0 && max > 0) {
        let ms = getMS(number);

        number = ms.time;
        time += ms.string;
        max--;
    }
    
    if (!expanded) time = time.replace(/year+s?/, "y").replace(/week+s?/, "w").replace(/day+s?/, "d").replace(/hour+s?/, "h").replace(/minute+s?/, "m").replace(/second+s?/, "s").replace(/millisecond+s?/, "ms")

    return time;
}