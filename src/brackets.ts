import cli from './lib/readline';
import checkBrackets from './tasks/brackets';
import figlet from './lib/figlet';

figlet('BRACKETS');

const { rl } = cli;

rl.on('line', checkBrackets);
