import cli from './lib/readline';
import divideAndRule from './tasks/divide_and_rule';
import figlet from './lib/figlet';

figlet('DIVIDE  AND  RULE');

const { rl } = cli;

rl.on('line', divideAndRule.checkStringConcat);
