const numIntervals = (start: number, end: number, count: number): number[] => {
  const result = [];
  for (let i = start + 1; i < end && result.length < count; i += 1) {
    result.push(i);
  }
  return result;
};

export const getNoFibonacci = (n: number): number[] => {
  const fib = [1, 1];
  const noFib = [];

  let i = 2;
  while (n > noFib.length) {
    const last = fib[i - 1];
    fib[i] = last + fib[i - 2];
    if (fib[i] - last > 1) {
      noFib.push(...numIntervals(last, fib[i], n - noFib.length));
    }
    i += 1;
  }

  return noFib;
};
