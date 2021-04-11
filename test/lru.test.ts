/* eslint-disable no-undef,no-unused-expressions */
import chai from 'chai';

import LRU from '../src/tasks/LRU';

const { expect } = chai;

describe('LRU', () => {
  it('should cache maxSize equal cache count', async () => {
    const cache = new LRU(3);

    await cache.get('test1', (data) => data, ['test1']);
    await cache.get('test2', (data) => data, ['test2']);
    await cache.get('test3', (data) => data, ['test3']);
    await cache.get('test4', (data) => data, ['test4']);
    await cache.get('test1', (data) => data, ['test1']);
    await cache.get('test1', (data) => data, ['test1']);

    const count = cache.getCount();

    expect(count).to.be.equal(cache.maxSize);
  });
});
