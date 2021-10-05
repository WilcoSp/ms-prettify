const getMS = require('./getMS');

module.exports = (number, max, expanded, obj, till) => {
    let time = "", data = {};

    while (number > 0 && max > 0) {
        let ms = getMS(number);
        data[ms.type] = ms.value;
        number = ms.time;
        time += ms.string;
        max--;
        if (till === ms.type) number = 0;
    }

    if (!expanded) time = time.replace(/year+s?/, "y")?.replace(/week+s?/, "w")?.replace(/day+s?/, "d")?.replace(/hour+s?/, "h")?.replace(/minute+s?/, "m")?.replace(/second+s?/, "s")?.replace(/millisecond+s?/, "ms")

    return obj ? data : time;
}