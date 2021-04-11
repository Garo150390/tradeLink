import chalk from 'chalk';

import { IStringMatch } from '../../interfaces';
import { getNoFibResult } from '../../utils';

class DivideAndRule {
  private countDictonary: number;
  private countStrings: number;
  private dictionary: string[] = [];
  private words: string[] = [];

  constructor() {
    this.checkStringConcat = this.checkStringConcat.bind(this);
  }

  public checkStringConcat(input: string): Promise<any> {
    const num = parseInt(input, 10);

    if (Number.isNaN(num)) {
      // enter string
      if (this.countDictonary && this.dictionary.length < this.countDictonary) {
        this.dictionary.push(input);
      } else if (this.countStrings && this.words.length < this.countStrings) {
        this.words.push(input);
      } else {
        console.log(chalk.redBright('please enter number'));
      }
    } else {
      // enter number
      if (this.countDictonary && this.countStrings) {
        console.log(chalk.redBright('enter string'));
        return;
      }
      this.countDictonary ? this.countStrings = num : this.countDictonary = num;
    }

    if (this.dictionary.length === this.countDictonary && this.words.length === this.countStrings) {
      return this.concatProcess();
    }
  }

  private printRes(matched: IStringMatch[]): string[] {
    return matched.map((res) => {
      let result = `${res.data.length}`;
      res.data.forEach((stringMsatch) => {
        stringMsatch.split(',')
          .reduce((acc, val, index, arr) => {
            if (arr.length - 1 === index && Number(val) !== res.key.length) {
              result = '0';
              return 0;
            }
            const str = res.key.slice(acc, Number(val));
            result += index === 0 ? ` ${str}` : `:${str}`;
            return Number(val);
          }, 0);
      });
      console.log(chalk.cyan(result));
      return result;
    });
  }

  private async concatProcess(): Promise<string[]> {
    try {
      const stringPossitions = this.words.map((word) => {
        const data = [];
        const results = {
          key: word,
          data: [],
        };
        this.dictionary.forEach((prefix) => {
          // find string matching
          const posittion = word.indexOf(prefix);
          if (posittion !== -1) {
            // push prefix last index in array
            if (!data[posittion]) data[posittion] = [];
            data[posittion].push(posittion + prefix.length);
          }
        });
        if (data[0] && data.length >= 2) {
          results.data = data[0].map((el) => {
            return getNoFibResult(data, el, `${el}`).flat(Infinity);
          }).flat();
        }
        return results;
      });
      const res = this.printRes(stringPossitions);
      this.clear();
      return res;
    } catch (e) {
      return Promise.reject(e);
    }
  }

  private clear() {
    this.dictionary = [];
    this.words = [];
    this.countStrings = null;
    this.countDictonary = null;
  }
}

export default new DivideAndRule();
