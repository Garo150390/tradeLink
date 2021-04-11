import figlet from 'figlet';

export default (text: string): void => {
  figlet(text, (err, data) => {
    console.log(data);
  });
};
