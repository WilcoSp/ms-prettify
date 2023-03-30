import toMS from './toMS.js';
import toTimeString from './toTimeString.js';
import { Options, ReturnObject } from '../interfaces.js';

const type: String[] = [
  'year',
  'week',
  'day',
  'hour',
  'minute',
  'second',
  'millisecond'
];

/**
 * An module to convert MS time to human readable string and vice versa.
 */
export function converter(time: string): number;
export function converter(time: string, options: Options): number;
export function converter(time: number): string;
export function converter(
  time: number,
  options: Options & { returnObject: true }
): ReturnObject;
export function converter(time: number, options: Options): string;

export function converter(time: string | number, options: Options = {}) {
  if (typeof time !== 'number' && typeof time !== 'string')
    throw new TypeError(
      'Inavlid time was provided, It should be either a number or human readable time string'
    );
  const {
    max = 7,
    expanded = true,
    returnObject = false,
    till = 'millisecond'
  } = options;

  if (typeof max !== 'number' || max < 1)
    throw new TypeError(
      'Invalid max was provided, it should be a number and at least 1'
    );
  if (typeof expanded !== 'boolean')
    throw new TypeError('Expanded should be a boolean type');
  if (typeof returnObject !== 'boolean')
    throw new TypeError('Expanded should be a boolean type');
  if (!type.some((v) => v === till))
    throw new Error(
      `Till should be one of these values : ${type.join(
        ', '
      )} but we got ${JSON.stringify(till)}`
    );

  if (typeof time === 'string') return toMS(time?.trim());
  return toTimeString(time, max, expanded, returnObject, till);
}
