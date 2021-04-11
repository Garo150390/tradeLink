/* eslint-disable no-undef,no-unused-expressions */
import chai from 'chai';

import { noFibonacci } from '../src/tasks/no-fibonachi';

const { expect } = chai;

describe('No Fibonacci', () => {
  const noFibNumbers = [4, 6, 7, 9, 10, 11, 12, 14, 15, 16];
  it('should return 4, 6, 7, 9, 10', () => {
    const result = noFibonacci('5');
    expect(result).to.have.members(noFibNumbers.slice(0, 5));
  });
});
