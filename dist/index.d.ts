import { Options, ReturnObject } from './interfaces';
/**
 * An module to convert MS time to human readable string and vice versa.
 */
declare function convertor(time: string | number, options?: Options): number | string | ReturnObject;
export default convertor;
