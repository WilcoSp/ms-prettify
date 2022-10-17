import converter from "./converter";

export default function timer(time: number | string, callback: Function, ...args: any[]) {
    return new Promise((resolve, reject) => {
        const waitFor = typeof time === "number" ? time : converter(time);

        if (!waitFor) return reject("Invalid time was provided in the timer!");

        setTimeout(() => {
            if (typeof callback === "function") callback(...args);
            
            resolve(true);
        }, waitFor);
    })
}