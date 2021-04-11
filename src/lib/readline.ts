import readline, { ReadLine } from 'readline';

class Cli {
  public readonly rl: ReadLine;

  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
    });
  }

  public question(text: string) {
    return new Promise((resolve) => {
      this.rl.question(text, resolve);
    });
  }
}

export default new Cli();
