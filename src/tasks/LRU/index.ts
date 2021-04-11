import { ICache } from '../../interfaces';

class LRU {
  public readonly maxSize: number;

  private cache = new Map<string, ICache>();
  private deleteKeys: string[] = [];

  constructor(maxSize: number) {
    this.maxSize = maxSize;
  }

  async get<T, Arg = unknown>(key: string, handler: (...parameters: any[]) => T, arg: Arg[] = []): Promise<T> {
    let cacheData: ICache = this.cache.get(key);
    if (!cacheData) {
      const data = handler(...arg);
      cacheData = { data, longNum: 0 };
    } else {
      cacheData.longNum = 0;
    }

    await this.cache.set(key, cacheData);
    this.changeLongNum(key);

    return cacheData.data;
  }

  public getCount(): number {
    return this.cache.size;
  }

  public getAllCachedData(): IterableIterator<[string, ICache]> {
    return this.cache.entries();
  }

  private async changeLongNum(exceptKey): Promise<void> {
    try {
      this.cache.forEach((value: ICache, key) => {
        if (key !== exceptKey) {
          value.longNum += 1;
        }

        if (value.longNum > this.maxSize) {
          this.deleteKeys.push(key);
        }
      });

      if (this.deleteKeys.length) this.cleanCache();
    } catch (e) {
      console.log(e);
    }
  }

  private async cleanCache() {
    try {
      this.deleteKeys.forEach((key) => {
        this.cache.delete(key);
      });
    } catch (e) {
      console.log(e);
    }
  }
}

export default LRU;
