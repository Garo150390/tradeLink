import chalk from 'chalk';

import { getNoFibonacci } from './fib';

export const noFibonacci = (input: string): number[] => {
  console.log('````');
  const num = parseInt(input, 10);

  if (Number.isNaN(num)) {
    console.log(chalk.redBright('Enter a correct number \n'));
    return [];
  }

  const nofib = getNoFibonacci(num);

  console.log(chalk.cyan(nofib.join('\n')));
  console.log('`````');
  return nofib;
};
