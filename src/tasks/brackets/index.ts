import chalk from 'chalk';

const SYMBOLS = {
  '{': '}',
  '(': ')',
  '[': ']',
};

const closeBrackets = Object.values(SYMBOLS);

const checkBrackets = (input: string): boolean => {
  const brackets = [];
  const charInputs: string[] = input.split('');
  let flag: boolean;

  charInputs.every((char) => {
    if (SYMBOLS[char]) {
      brackets.push(char);
      flag = true;
    } else if (closeBrackets.includes(char)) {
      const lastOpenBracket = brackets[brackets.length - 1];
      if (SYMBOLS[lastOpenBracket] !== char) return false;
      brackets.pop();
    }
    return true;
  });

  if (!brackets.length && flag) {
    console.log(chalk.cyan('Correct \n'));
    return true;
  }
  console.log(chalk.redBright('Incorrect \n'));
  return false;
};

export default checkBrackets;
