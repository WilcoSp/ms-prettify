export interface Options {
    till?: "year" | "week" | "day" | "hour" | "minute" | "second" | "millisecond";
    max?: number;
    expanded?: boolean;
    returnObject?: boolean;
}
export interface ReturnObject {
    millisecond?: number;
    second?: number;
    minute?: number;
    hour?: number;
    day?: number;
    week?: number;
    year?: number;
}
