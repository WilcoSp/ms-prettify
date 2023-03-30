import { converter } from './converter.js';

export function timer(
  time: number | string,
  callback: Function,
  ...args: any[]
) {
  const waitFor = typeof time === 'number' ? time : converter(time);
  if (!waitFor) throw new Error('Invalid time was provided in the timer!');

  return new Promise<void>((resolve) =>
    setTimeout(() => {
      if (typeof callback === 'function') callback(...args);

      resolve();
    }, waitFor)
  );
}

export default timer;
