import LRU from './tasks/LRU';

const cache = new LRU(3);

(async function f(): Promise<void> {
  await cache.get('test1', (data) => data, ['test1']);
  await cache.get('test2', (data) => data, ['test2']);
  await cache.get('test3', (data) => data, ['test3']);
  await cache.get('test4', (data) => data, ['test4']);
  await cache.get('test1', (data) => data, ['test1']);
  await cache.get('test1', (data) => data, ['test1']);

  console.log(cache.getAllCachedData());
}());
