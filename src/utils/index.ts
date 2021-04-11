export const getNoFibResult = (array: number[][], el: number, res: string) => {
  if (array[el] && array[el].length) {
    return (array[el].map((e) => {
      return getNoFibResult(array, e, `${res},${e}`);
    }));
  }
  return [res];
};
