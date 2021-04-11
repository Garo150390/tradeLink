import cli from './lib/readline';
import figlet from './lib/figlet';
import { noFibonacci } from './tasks/no-fibonachi';

figlet('No Fibonacci');

const { rl } = cli;
rl.on('line', noFibonacci);
